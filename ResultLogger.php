
<?php
	function saveLogToFile($log){
		$myfile = fopen("testfile.txt", "a");
		fwrite($myfile, $log.PHP_EOL);
		fclose($myfile);
	}
	
	if(isset($_POST['log']) && !empty($_POST['log'])) {
		saveLogToFile($_POST['log']);
		echo $_POST['log'];
    }
	
?>