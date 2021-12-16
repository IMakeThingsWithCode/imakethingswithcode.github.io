<!DOCTYPE html>

<html lang="en">

<head>
	<title>website</title>
	<link rel="stylesheet" href="style.css">
	<script src="script.js"></script>
</head>

<body>
	<div>
		<h1>Survey</h1>
		<img width="50%" height="50%" src="content/pasta.png"></img>
		<p>Do you like Pasta?</p>
	</div>

	<div class=".boxesdiv">
		<input class="tacb" id="yes" type="checkbox">Yes</input>
		<input class="tacb" id="no" type="checkbox">No</input>
	</div>

	<p></p>

	<div>
		<button class="submit" onclick="update()">Submit</button>
		<h3 class="responseheader" id="yes_or_no"></h3>
	</div>

</body>

</html>
