<?php
function manifest( $file ) {
    $manifest = file_get_contents('./dist/mix-manifest.json');
    $manifest = json_decode($manifest, true);

    return './dist' . $manifest[$file];
}
?>

<!DOCTYPE html>
<html class="no-js" dir="ltr" lang="en" itemscope itemtype="http://schema.org/WebSite" prefix="og: http://ogp.me/ns#">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<meta name="description" content="Senior software engineer Erik Thomas from Nearby Creative" >
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;400;600;900&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">

		<link rel="icon" href="./dist/img/favicon.png" sizes="32x26">
		<link rel="icon" href="./dist/img/favicon-192x155.png" sizes="192x155">
		<link rel="apple-touch-icon-precomposed" href="./dist/img/favicon-180x145.png" sizes="180x145">
		<link rel="canonical" href="//erikjamesthomas.com">

		<link rel="stylesheet" href="<?= manifest('/styles/main.css'); ?>">

		<title>Erik James Thomas - Senior Software Engineer</title>
	</head>
	<body>

		<div id="app"></div>

        <script src="<?= manifest('/scripts/manifest.js'); ?>"></script>
        <script src="<?= manifest('/scripts/vendor.js'); ?>"></script>
		<script src="<?= manifest('/scripts/main.js'); ?>"></script>
	</body>
</html>