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

function sendGmailSMTP($to, $subject, $message, $reply_to, $reply_name) {
    // Gmail SMTP settings
    $smtp_host = 'smtp.gmail.com';
    $smtp_port = 587;
    $smtp_username = 'inquiryservicefirstau@gmail.com';
    $smtp_password = 'ualrphismhfjdcam';
    
    // Create message
    $boundary = uniqid('np');
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: Gas Heater Service <$smtp_username>\r\n";
    $headers .= "Reply-To: $reply_name <$reply_to>\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP SMTP\r\n";
    
    // Try using PHP's mail() function with proper headers
    $success = mail($to, $subject, $message, $headers);
    
    return $success;
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
    $subject = '🔥 New Gas Heater Service Request - Schedule Online';
    
    // Create HTML email template
    $emailBody = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <title>New Schedule Request</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: white; }
            .header { background: linear-gradient(135deg, #ff6b35, #ff8e35); color: white; padding: 25px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h2 { margin: 0; font-size: 24px; }
            .content { padding: 25px; border-left: 1px solid #ddd; border-right: 1px solid #ddd; }
            .field { margin-bottom: 20px; background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #ff6b35; }
            .label { font-weight: bold; color: #555; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { margin-top: 8px; font-size: 16px; color: #333; }
            .priority-box { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .footer { background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 10px 10px; border: 1px solid #ddd; border-top: none; }
            .contact-info { background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 15px 0; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>🔥 NEW SERVICE REQUEST</h2>
                <p style='margin: 10px 0 0 0; font-size: 16px;'>Gas Heater Service - Schedule Online Form</p>
            </div>
            
            <div class='content'>
                <div class='field'>
                    <div class='label'>👤 Customer Name</div>
                    <div class='value'><strong>{$name}</strong></div>
                </div>
                
                <div class='field'>
                    <div class='label'>📧 Email Address</div>
                    <div class='value'><a href='mailto:{$email}' style='color: #ff6b35; text-decoration: none;'>{$email}</a></div>
                </div>
                
                <div class='field'>
                    <div class='label'>📞 Phone Number</div>
                    <div class='value'>" . ($phone ? "<a href='tel:$phone' style='color: #ff6b35; text-decoration: none;'>$phone</a>" : '<em>Not provided</em>') . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>🏠 Service Address</div>
                    <div class='value'>" . ($address ?: '<em>Not provided</em>') . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>🔧 Service Type Required</div>
                    <div class='value'><strong>" . ($services ?: 'Not specified') . "</strong></div>
                </div>
                
                <div class='field'>
                    <div class='label'>📅 Preferred Meeting Time</div>
                    <div class='value'>" . ($meeting_time ?: '<em>Flexible / Not specified</em>') . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>💬 Additional Message</div>
                    <div class='value'>" . ($message ?: '<em>No additional message provided</em>') . "</div>
                </div>
                
                <div class='priority-box'>
                    <strong>⚡ ACTION REQUIRED:</strong> This customer has requested gas heater service through your website. Please respond within 2-4 hours during business hours, or immediately for emergency repairs.
                </div>
                
                <div class='contact-info'>
                    <strong>📋 Quick Contact Summary:</strong><br>
                    <strong>Customer:</strong> {$name}<br>
                    <strong>Email:</strong> {$email}<br>
                    <strong>Phone:</strong> " . ($phone ?: 'Not provided') . "<br>
                    <strong>Service:</strong> " . ($services ?: 'Not specified') . "
                </div>
            </div>
            
            <div class='footer'>
                <p><strong>📧 Sent from Gas Heater Service Website</strong></p>
                <p>🕒 Received: " . date('l, F j, Y \a\t g:i A') . " (Melbourne time)</p>
                <p>🌐 Source: Schedule Online Form</p>
                <p style='margin-top: 15px; color: #ff6b35;'><strong>🚨 For emergency gas heater repairs, contact customer immediately!</strong></p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Send email
    $sent = sendGmailSMTP($to, $subject, $emailBody, $email, $name);
    
    if ($sent) {
        // Success response
        echo json_encode([
            'success' => true,
            'message' => 'Perfect! Your service request has been sent successfully. 🔥 Our gas heater specialists will contact you within 2-4 hours during business hours. For emergency repairs, expect a call much sooner!'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }
    
} catch (Exception $e) {
    // Log error for debugging
    error_log("Gas Heater Service - Email sending failed: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'We apologize, there was a technical issue sending your request. Please call us directly for immediate assistance, or try submitting the form again in a few minutes.'
    ]);
}
?>
