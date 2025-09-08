<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    if (empty($input['name']) || empty($input['email'])) {
        throw new Exception('Name and email are required');
    }
    
    // Sanitize input data
    $name = htmlspecialchars(trim($input['name']));
    $email = filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars(trim($input['phone'] ?? ''));
    $address = htmlspecialchars(trim($input['address'] ?? ''));
    $services = htmlspecialchars(trim($input['services'] ?? ''));
    $message = htmlspecialchars(trim($input['message'] ?? ''));
    $meeting_time = htmlspecialchars(trim($input['meeting_time'] ?? ''));
    
    if (!$email) {
        throw new Exception('Invalid email address');
    }
    
    // Email configuration
    $to = 'nihaanexpertise@gmail.com';
    $subject = 'New Schedule Online Request - Gas Heater Service';
    $from = 'inquiryservicefirstau@gmail.com';
    
    // Create HTML email template
    $emailBody = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <title>New Schedule Request</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f4f4f4; padding: 20px; text-align: center; border-radius: 5px; }
            .content { padding: 20px; border: 1px solid #ddd; border-radius: 5px; margin-top: 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-radius: 3px; }
            .footer { margin-top: 20px; padding: 15px; background-color: #f4f4f4; text-align: center; font-size: 12px; border-radius: 5px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>🔥 New Gas Heater Service Request</h2>
                <p>Schedule Online Form Submission</p>
            </div>
            
            <div class='content'>
                <div class='field'>
                    <div class='label'>👤 Customer Name:</div>
                    <div class='value'>{$name}</div>
                </div>
                
                <div class='field'>
                    <div class='label'>📧 Email Address:</div>
                    <div class='value'>{$email}</div>
                </div>
                
                <div class='field'>
                    <div class='label'>📞 Phone Number:</div>
                    <div class='value'>" . ($phone ?: 'Not provided') . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>🏠 Address:</div>
                    <div class='value'>" . ($address ?: 'Not provided') . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>🔧 Service Required:</div>
                    <div class='value'>" . ($services ?: 'Not specified') . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>📅 Preferred Meeting Time:</div>
                    <div class='value'>" . ($meeting_time ?: 'Not specified') . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>💬 Message:</div>
                    <div class='value'>" . ($message ?: 'No additional message') . "</div>
                </div>
            </div>
            
            <div class='footer'>
                <p>📧 This email was sent from the Gas Heater Service website</p>
                <p>🕒 Received on: " . date('Y-m-d H:i:s') . "</p>
                <p>🚨 Please respond to this customer within 24 hours for emergency service requests</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Email headers
    $headers = array(
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: Gas Heater Service <' . $from . '>',
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion()
    );
    
    // Send email using PHP mail() function
    $sent = mail($to, $subject, $emailBody, implode("\r\n", $headers));
    
    if ($sent) {
        // Success response
        echo json_encode([
            'success' => true,
            'message' => 'Schedule request sent successfully! We will contact you soon.'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email: ' . $e->getMessage()
    ]);
}
?>
