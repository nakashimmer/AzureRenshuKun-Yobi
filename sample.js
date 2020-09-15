$id("temp1").addEventListener("click",function(){
	$id("editor").value
=`a
`;
});

$id("temp1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>テンプレート</title>
		<style>
			*{margin:0px;padding:0px;}
			h1{
				height: 50px;
				background-color: gray;
				line-height: 50px;
				text-align: center;
				color: white;
			}
			#outer{
				height: calc(100vh - 50px);
				display: flex;
  			justify-content: center;
  			align-items: center;
			}
			#box1{
				width: 1em;
				line-height: 1em;
				font-size: 50px;
				text-align: center;
				
				transform-origin: center;
				animation: mystory1 1s linear 0s infinite normal;
				animation-fill-mode:both;
			}
			@keyframes mystory1{
				100%{	}
			}
		</style>
	</head>
	<body>
		<h1>テンプレート</h1>
		<div id="outer">
			<div id="box1">🍎</div>
		</div>
	</body>
</html>`;
});

$id("temp2").addEventListener("click",function(){
	$id("editor").value
=`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>回転</title>
		<style>
			*{margin:0px;padding:0px;}
			h1{
				height: 50px;
				background-color: gray;
				line-height: 50px;
				text-align: center;
				color: white;
			}
			#outer{
				height: calc(100vh - 50px);
				display: flex;
  			justify-content: center;
  			align-items: center;
			}
			#box1{
				width: 1em;
				line-height: 1em;
				font-size: 50px;
				text-align: center;

				transform-origin: center;
				animation: mystory1 1s linear 0s infinite normal;
				animation-fill-mode:both;
			}
			@keyframes mystory1{
				100%{transform:rotate(360deg);}
			}
		</style>
	</head>
	<body>
		<h1>回転</h1>
		<div id="outer">
			<div id="box1">🍎</div>
		</div>
	</body>
</html>`;
});

$id("temp3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>伸縮</title>
		<style>
			*{margin:0px;padding:0px;}
			h1{
				height: 50px;
				background-color: gray;
				line-height: 50px;
				text-align: center;
				color: white;
			}
			#outer{
				height: calc(100vh - 50px);
				display: flex;
  			justify-content: center;
  			align-items: center;
			}
			#box1{
				width: 1em;
				line-height: 1em;
				font-size: 50px;
				text-align: center;

				transform-origin: center;
				animation: mystory1 1s linear 0s infinite alternate;
				animation-fill-mode:both;
			}
			@keyframes mystory1{
				100%{transform:scale(3);}
			}
		</style>
	</head>
	<body>
		<h1>伸縮</h1>
		<div id="outer">
			<div id="box1">🍎</div>
		</div>
	</body>
</html>`;
});

$id("temp4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>移動</title>
		<style>
			*{margin:0px;padding:0px;}
			h1{
				height: 50px;
				background-color: gray;
				line-height: 50px;
				text-align: center;
				color: white;
			}
			#outer{
				height: calc(100vh - 50px);
				display: flex;
  			justify-content: center;
  			align-items: center;
			}
			#box1{
				width: 1em;
				line-height: 1em;
				font-size: 50px;
				text-align: center;

				transform-origin: center;
				animation: mystory1 1s linear 0s infinite normal;
				animation-fill-mode:both;
			}
			@keyframes mystory1{
				0%{transform:translate(-300px);}
				100%{transform:translate(300px);}
			}
		</style>
	</head>
	<body>
		<h1>移動</h1>
		<div id="outer">
			<div id="box1">🍎</div>
		</div>
	</body>
</html>`;
});

$id("temp5").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>合成</title>
		<style>
			*{margin:0px;padding:0px;}
			h1{
				height: 50px;
				background-color: gray;
				line-height: 50px;
				text-align: center;
				color: white;
			}
			#outer{
				height: calc(100vh - 50px);
				display: flex;
  			justify-content: center;
  			align-items: center;
			}
			#box1{
				width: 1em;
				line-height: 1em;
				font-size: 50px;
				text-align: center;

				transform-origin: center;
				animation: mystory1 1s linear 0s infinite normal;
				animation-fill-mode:both;
			}
			@keyframes mystory1{
				0%{transform:translate(-300px,0px) rotate(-360deg) scale(0,0);}
				50%{transform:translate(0px,0px) rotate(0deg) scale(1,1);}
				100%{transform:translate(300px,0px) rotate(360deg) scale(0,0);}
			}
		</style>
	</head>
	<body>
		<h1>移動</h1>
		<div id="outer">
			<div id="box1">🍎</div>
		</div>
	</body>
</html>`;
});

$id("temp6").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>三次元</title>
		<style>
			*{margin:0px;padding:0px;}
			h1{
				height: 50px;
				background-color: gray;
				line-height: 50px;
				text-align: center;
				color: white;
			}
			#outer{
				height: calc(100vh - 50px);
				display: flex;
  			justify-content: center;
  			align-items: center;

				transform-style:preserve-3d;
				perspective:300px;
			}
			#box1{
				width: 1em;
				line-height: 1em;
				font-size: 50px;
				text-align: center;

				transform-origin: center;
				animation: mystory1 1s linear 0s infinite normal;
				animation-fill-mode:both;
			}
			@keyframes mystory1{
				100%{transform:rotateY(360deg);}
			}
		</style>
	</head>
	<body>
		<h1>移動</h1>
		<div id="outer">
			<div id="box1">🍎</div>
		</div>
	</body>
</html>`;
});