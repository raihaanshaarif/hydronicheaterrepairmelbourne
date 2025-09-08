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

class SMTPMailer {
    private $smtp_host = 'smtp.gmail.com';
    private $smtp_port = 587;
    private $smtp_username = 'inquiryservicefirstau@gmail.com';
    private $smtp_password = 'ualrphismhfjdcam';
    
    public function sendEmail($to, $subject, $message, $from_email, $from_name = '') {
        // Create socket connection
        $socket = fsockopen($this->smtp_host, $this->smtp_port, $errno, $errstr, 30);
        
        if (!$socket) {
            throw new Exception("Failed to connect to SMTP server: $errstr ($errno)");
        }
        
        // Read server response
        $response = fgets($socket, 512);
        
        // Send EHLO command
        fputs($socket, "EHLO " . $_SERVER['SERVER_NAME'] . "\r\n");
        $response = fgets($socket, 512);
        
        // Start TLS
        fputs($socket, "STARTTLS\r\n");
        $response = fgets($socket, 512);
        
        // Enable crypto
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        
        // Send EHLO again after TLS
        fputs($socket, "EHLO " . $_SERVER['SERVER_NAME'] . "\r\n");
        $response = fgets($socket, 512);
        
        // Authenticate
        fputs($socket, "AUTH LOGIN\r\n");
        $response = fgets($socket, 512);
        
        fputs($socket, base64_encode($this->smtp_username) . "\r\n");
        $response = fgets($socket, 512);
        
        fputs($socket, base64_encode($this->smtp_password) . "\r\n");
        $response = fgets($socket, 512);
        
        // Set sender
        fputs($socket, "MAIL FROM: <{$this->smtp_username}>\r\n");
        $response = fgets($socket, 512);
        
        // Set recipient
        fputs($socket, "RCPT TO: <$to>\r\n");
        $response = fgets($socket, 512);
        
        // Start data
        fputs($socket, "DATA\r\n");
        $response = fgets($socket, 512);
        
        // Send email headers and body
        $headers = "From: $from_name <{$this->smtp_username}>\r\n";
        $headers .= "Reply-To: $from_email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "Subject: $subject\r\n";
        $headers .= "\r\n";
        
        fputs($socket, $headers . $message . "\r\n.\r\n");
        $response = fgets($socket, 512);
        
        // Quit
        fputs($socket, "QUIT\r\n");
        $response = fgets($socket, 512);
        
        // Close connection
        fclose($socket);
        
        return true;
    }
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
            .emergency { background-color: #ffe6e6; padding: 10px; border-left: 4px solid #ff4444; margin: 15px 0; }
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
                
                <div class='emergency'>
                    <strong>⚡ Quick Response Required:</strong> This is a potential gas heater service request. Please respond within 2-4 hours during business hours for regular service, or immediately for emergency repairs.
                </div>
            </div>
            
            <div class='footer'>
                <p>📧 This email was sent from the Gas Heater Service website contact form</p>
                <p>🕒 Received on: " . date('Y-m-d H:i:s') . " (Melbourne time)</p>
                <p>📱 Customer contact: {$email}" . ($phone ? " / $phone" : "") . "</p>
                <p>🚨 For emergency gas heater repairs, contact customer immediately</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Send email using custom SMTP class
    $mailer = new SMTPMailer();
    $sent = $mailer->sendEmail($to, $subject, $emailBody, $email, $name);
    
    if ($sent) {
        // Success response
        echo json_encode([
            'success' => true,
            'message' => 'Thank you! Your schedule request has been sent successfully. We will contact you within 2-4 hours during business hours.'
        ]);
    } else {
        throw new Exception('Failed to send email via SMTP');
    }
    
} catch (Exception $e) {
    // Log error (in production, log to file)
    error_log("Email sending failed: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'We apologize, but there was an issue sending your request. Please call us directly at [your phone number] or try again later.'
    ]);
}
?>
