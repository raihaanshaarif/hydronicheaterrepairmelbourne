<?php
// PHPMailer download script - run this once to download PHPMailer
// Download PHPMailer from GitHub

function downloadFile($url, $destination) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    $data = curl_exec($ch);
    
    if (curl_error($ch)) {
        throw new Exception('Curl error: ' . curl_error($ch));
    }
    
    curl_close($ch);
    
    file_put_contents($destination, $data);
    return true;
}

try {
    // Create vendor directory structure
    $vendorDir = __DIR__ . '/vendor/phpmailer/phpmailer/src';
    if (!is_dir($vendorDir)) {
        mkdir($vendorDir, 0755, true);
    }
    
    // Download PHPMailer files
    $baseUrl = 'https://raw.githubusercontent.com/PHPMailer/PHPMailer/master/src/';
    $files = [
        'PHPMailer.php',
        'SMTP.php',
        'Exception.php',
        'POP3.php',
        'OAuth.php'
    ];
    
    foreach ($files as $file) {
        echo "Downloading $file...\n";
        downloadFile($baseUrl . $file, $vendorDir . '/' . $file);
    }
    
    // Create autoload file
    $autoloadContent = '<?php
// Simple autoloader for PHPMailer
spl_autoload_register(function ($class) {
    $prefix = "PHPMailer\\PHPMailer\\";
    $baseDir = __DIR__ . "/phpmailer/phpmailer/src/";
    
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        return;
    }
    
    $relativeClass = substr($class, $len);
    $file = $baseDir . str_replace("\\", "/", $relativeClass) . ".php";
    
    if (file_exists($file)) {
        require $file;
    }
});
?>';
    
    file_put_contents(__DIR__ . '/vendor/autoload.php', $autoloadContent);
    
    echo "PHPMailer downloaded successfully!\n";
    
} catch (Exception $e) {
    echo "Error downloading PHPMailer: " . $e->getMessage() . "\n";
}
?>
