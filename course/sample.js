$id("temp1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>1.テンプレ</title>
		<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
	</head>
	<body>
		<!-- ① -->

	</body>
</html>`;
});

$id("temp2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>2.場面</title>
		<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
	</head>
	<body>
		<!-- ① -->
		<!-- 場面 -->
		<a-scene 
			background="color:black"
		>

 			<!-- ② --> 

		</a-scene>
	</body>
</html>`;
});

$id("temp3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>3.平面</title>
		<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
	</head>
	<body>
		<!-- ① -->
		<!-- 場面 -->
		<a-scene 
			background="color:black"
		>
		
			<!-- ② --> 
			<!--平面-->
			<a-plane 
				position="0 0 -3" 
				rotation="-90 0 0" 
				width="6" 
				height="3" 
				color="sienna" 
				shadow
			></a-plane>

		</a-scene>
	</body>
</html>`;
});

$id("temp4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>4.立方</title>
		<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
	</head>
	<body>
		<!-- ① -->
		<!-- 場面 -->
		<a-scene 
			background="color:black"
		>

			<!-- ② -->
			<!--平面-->
			<a-plane 
				position="0 0 -3" 
				rotation="-90 0 0" 
				width="6" 
				height="3" 
				color="sienna" 
				shadow
			></a-plane>

			<!--立方-->
			<a-box 
				position="-2 1 -3"  
				rotation="0 0 0" 
				color="lime" 
				width="1" 
				height="1" 
				depth="1" 
				shadow
			></a-box>

		</a-scene>
	</body>
</html>`;
});

$id("temp5").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>5.球体</title>
		<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
	</head>
	<body>
		<!-- ① -->
		<!-- 場面 -->
		<a-scene 
			background="color:black"
		>
		 
			<!-- ② -->
			<!--平面-->
			<a-plane 
				position="0 0 -3" 
				rotation="-90 0 0" 
				width="6" 
				height="3" 
				color="sienna" 
				shadow
			></a-plane>

			<!--立方-->
			<a-box
				position="-2 1 -3"
				rotation="0 0 0"
				color="lime"
				width="1"
				height="1"
				depth="1"
				shadow
			></a-box>

			<!--球体-->
			<a-sphere
				position="0 0.5 -3"
				radius="0.5"
				color="pink"
				shadow
			></a-sphere>

		</a-scene>
	</body>
</html>`;
});



$id("temp6").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>6.円盤</title>
		<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
	</head>
	<body>
		<!-- ① -->
		<!-- 場面 -->
		<a-scene 
			background="color:black"
		>

			<!-- ② --> 
			<!--平面-->
			<a-plane 
				position="0 0 -3" 
				rotation="-90 0 0" 
				width="6" 
				height="3" 
				color="sienna" 
				shadow
			></a-plane>

			<!--立方-->
			<a-box
				position="-2 1 -3"
				rotation="0 0 0"
				color="lime"
				width="1"
				height="1"
				depth="1"
				shadow
			></a-box>

			<!--球体-->
			<a-sphere
				position="0 0.5 -3"
				radius="0.5"
				color="pink"
				shadow
			></a-sphere>

			<!--円盤-->
			<a-circle
				position="0 0.5 -3"
				rotation="-90 0 0"
				radius="1"
				color="gray"
			></a-circle>

		</a-scene>
	</body>
</html>`;
});

$id("temp7").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>7.円柱</title>
		<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
	</head>
	<body>
		<!-- ① -->
		<!-- 場面 -->
		<a-scene 
			background="color:black"
		>

			<!-- ② -->
			<!--平面-->
			<a-plane 
				position="0 0 -3" 
				rotation="-90 0 0" 
				width="6" 
				height="3" 
				color="sienna" 
				shadow
			></a-plane>

			<!--立方-->
			<a-box
				position="-2 1 -3"
				rotation="0 0 0"
				color="lime"
				width="1"
				height="1"
				depth="1"
				shadow
			></a-box>

			<!--球体-->
			<a-sphere
				position="0 0.5 -3"
				radius="0.5"
				color="pink"
				shadow
			></a-sphere>

			<!--円盤-->
			<a-circle
				position="0 0.5 -3"
				rotation="-90 0 0"
				radius="1"
				color="gray"
			></a-circle>

			<!--円柱-->
			<a-cylinder
				position="2 1 -3"
				rotation="0 0 0"
				radius="0.5"
				height="1"
				segments-radial="100"
				color="skyblue"
				shadow
			></a-cylinder>

		</a-scene>
	</body>
</html>`;
});

$id("temp8").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>8.テキスト</title>
		<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
	</head>
	<body>
		<!-- ① -->
		<!-- 場面 -->
		<a-scene 
			background="color:black"
		>

			<!-- ② -->
			<!--平面-->
			<a-plane 
				position="0 0 -3" 
				rotation="-90 0 0" 
				width="6" 
				height="3" 
				color="sienna" 
				shadow
			></a-plane>

			<!--立方-->
			<a-box
				position="-2 1 -3"
				rotation="0 0 0"
				color="lime"
				width="1"
				height="1"
				depth="1"
				shadow
			></a-box>

			<!--球体-->
			<a-sphere
				position="0 0.5 -3"
				radius="0.5"
				color="pink"
				shadow
			></a-sphere>

			<!--円盤-->
			<a-circle
				position="0 0.5 -3"
				rotation="-90 0 0"
				radius="1"
				color="gray"
			></a-circle>

			<!--円柱-->
			<a-cylinder
				position="2 1 -3"
				rotation="0 0 0"
				radius="0.5"
				height="1"
				segments-radial="100"
				color="skyblue"
				shadow
			></a-cylinder>

			<!--テキスト-->
			<a-text
				position="-2 1 -2"
				value="Cyber Univ."
				color="white"
				scale="3 3 1"
				rotation="0 0 0"
				font="dejavu"
			></a-text>

		</a-scene>
	</body>
</html>`;
});

$id("temp9").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>9.アニメーション</title>
		<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
	</head>
	<body>
		<!-- ① -->
		<!-- 場面 -->
		<a-scene 
			background="color:black"
		>

			<!-- ② -->
			<!--平面-->
			<a-plane 
				position="0 0 -3" 
				rotation="-90 0 0" 
				width="6" 
				height="3" 
				color="sienna" 
				shadow
			></a-plane>

			<!--立方-->
			<a-box
				position="-2 1 -3"
				rotation="0 0 0"
				color="lime"
				width="1"
				height="1"
				depth="1"
				shadow
				animation="
					property: depth;
					to:2;
					dur: 1000;
					delay:0;
					easing:linear;
					loop: true;
					dir:alternate;"
			></a-box>
		

			<!--球体-->
			<a-sphere 
				position="0 0.5 -3" 
				radius="0.5" 
				color="pink" 
				shadow  
				animation="
					property: position; 
					to:0 1.5 -3; 
					dur: 2000; 
					delay:0;
					easing:easeInQuad; 
					loop: true; 
					dir:alternate;"
			></a-sphere>

			<!--円盤-->
			<a-circle 
				position="0 0.5 -3" 
				rotation="-90 0 0" 
				radius="1" 
				color="gray" 
				shadow 
				animation="
					property: position; 
					to:0 1.5 -3; 
					dur: 2000; 
					delay:0;
					easing:easeInQuad; 
					loop: true; 
					dir:alternate;"
			></a-circle>

			<!--円柱-->
			<a-cylinder
				position="2 1 -3"
				rotation="0 0 0"
				radius="0.5"
				height="1"
				segments-radial="3"
				color="skyblue"
				shadow
				animation="
					property: rotation;
					to:360 0 0 ;
					dur: 3000;
					delay:0;
					easing:linear;
					loop: true;
					dir:normal;"
			></a-cylinder>

			<!--テキスト-->
			<a-text
				position="-2 1 -2"
				value="Cyber Univ."
				color="white"
				scale="3 3 1"
				rotation="0 0 0"
				font="dejavu"
				animation="
					property: position;
					to:-2 0.5 -2 ;
					dur: 3000;
					delay:0;
					easing:linear;
					loop: true;
					dir:alternate;"
			></a-text>

		</a-scene>
	</body>
</html>`;
});
