//2.

$id("temp2-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>2-1</title>
		<style>

		</style>
	</head>

	<body>

	</body>

</html>
`;
});

$id("temp2-1-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>2-1</title>
		<style>

		</style>
	</head>

	<body>
		<p>この文字を赤色にします。</p>
	</body>

</html>

`;
});


$id("temp2-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>2-2</title>
		<style>
			p{color:red;}
		</style>
	</head>

	<body>
		<p>この文字を赤色にします。</p>
	</body>

</html>

`;
});

$id("temp2-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>2-3</title>
		<style>
			p{color:red;}
		</style>
	</head>

	<body>
		<p>段落は青くなります</p>
		<p class="css1" id="id1">id指定しました</p>
		<p class="css1">class指定しました</p>
	</body>

</html>
`;
});

$id("temp2-3-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>2-3</title>
		<style>
			*{margin:0; padding:0;}

			p{color:blue; border:1px solid gray;}
			
			#id1{color:green;}
			
			.css1{color:red;}
		</style>
	</head>

	<body>
		<p>段落は青くなります</p>
		<p class="css1" id="id1">id指定しました</p>
		<p class="css1">class指定しました</p>
	</body>

</html>

`;
});

//3.

$id("temp3-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>3-1</title>
		<style>
			*{margin:0px;padding:0px;}

			.box{

			}

			#box1{

			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>
`;
});

$id("temp3-1-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>3-1</title>
		<style>
			*{margin:0px;padding:0px;}				/*リセットCSS*/

			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				margin:250px auto;							/*外余白*/
				padding:0px;										/*内側余白*/

			}

			#box1{
				background-color:green; 				/*背景色*/
				font-size:30px;									/*文字の大きさ*/
				color:red; 											/*文字の色*/
				text-align:center; 							/*文字の左右真ん中揃え*/
				line-height:200px; 							/*行高*/
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>

`;
});
$id("temp3-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>3-2</title>
		<style>
			*{margin:0px;padding:0px;}				/*リセットCSS*/

			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				background-color:green; 				/*背景色*/
				font-size:30px;									/*文字の大きさ*/
				color:red; 											/*文字の色*/
				text-align:center; 							/*文字の左右真ん中揃え*/
				line-height:200px; 							/*行高*/
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>

`;
});
$id("temp3-3-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>3-3-1</title>
		<style>
			*{margin:0px;padding:0px;}				/*リセットCSS*/

			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				border-radius:15px;
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>

`;
});
$id("temp3-3-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>3-3-2</title>
		<style>
			*{margin:0px;padding:0px;}				/*リセットCSS*/

			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				box-shadow:3px 3px 3px gray;		/*箱の影*/
				text-shadow:2px 2px 2px gray; 	/*テキストの影*/
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>

`;
});
$id("temp3-3-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>3-3-3</title>
		<style>
			*{margin:0px;padding:0px;}				/*リセットCSS*/

			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				box-shadow:
					250px 0px 0px red, 
					-250px 0px 0px green, 
					0px 250px 0px blue, 
					0px -250px 0px yellow;
				border-radius:50%;
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>

`;
});
$id("temp3-3-4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>3-3-4</title>
		<style>
			*{margin:0px;padding:0px;}				/*リセットCSS*/

			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
					background:linear-gradient(white,black);	/*線形のグラデーション*/
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1"></div>
	</body>

</html>

`;
});
$id("temp3-3-5").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>3-3-5</title>
		<style>
			*{margin:0px;padding:0px;}				/*リセットCSS*/

			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				background:linear-gradient(45deg,transparent 50%,black 50%);	/*線形のグラデーション*/
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1"></div>
	</body>

</html>

`;
});
$id("temp3-4-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>3-4-1</title>
		<style>
			*{margin:0px;padding:0px;}				/*リセットCSS*/

			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				background-image:url(media/html5.png); /*背景画像*/
				background-size:100% 100%;			/*背景のサイズ*/
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1"></div>
	</body>

</html>

`;
});
$id("temp3-4-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>3-4-2</title>
		<style>
			*{margin:0px;padding:0px;}				/*リセットCSS*/

			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				background-image:url(media/html5.png); 	/*背景画像*/
				background-size:100% 100%;							/*背景のサイズ*/
				filter:drop-shadow(3px 3px 3px black);	/*透過画像に影*/

			}
		</style>
	</head>

	<body>
		<div class="box" id="box1"></div>
	</body>

</html>

`;
});


//4.

$id("temp4-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>4-1</title>
		<style>
			.box{
				width:200px; height:200px;
				line-height:200px; text-align:center;
				border:1px solid gray;
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{

			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>
`;
});
$id("temp4-1-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>4-1</title>
		<style>
			.box{
				width:200px; height:200px;
				line-height:200px; text-align:center;
				border:1px solid gray;
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{transform:rotate(45deg);}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>

`;
});

$id("temp4-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>4-2</title>
		<style>
			.box{
				width:200px; height:200px;
				line-height:200px; text-align:center;
				border:1px solid gray;
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{transform:scale(1,2);}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>

`;
});

$id("temp4-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>4-3</title>
		<style>
			.box{
				width:200px; height:200px;
				line-height:200px; text-align:center;
				border:1px solid gray;
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{transform:skew(40deg,0deg);}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>

`;
});

$id("temp4-4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>4-4</title>
		<style>
			.box{
				width:200px; height:200px;
				line-height:200px; text-align:center;
				border:1px solid gray;
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{transform:translate(100px,0px);}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>

`;
});

$id("temp4-5").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>4-5</title>
		<style>
			.box{
				width:200px; height:200px;
				line-height:200px; text-align:center;
				border:1px solid gray;
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{transform:translate(100px,0px) rotate(45deg);}
		</style>
	</head>

	<body>
		<div class="box" id="box1">Box1</div>
	</body>

</html>

`;
});


//5.

$id("temp5-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>5-1</title>
		<style>
			.box{
				width:200px; height:200px;
				line-height:200px; text-align:center;
				border:1px solid gray;
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{

			}
		</style>
	</head>

	<body>
		<div id="box1" class="box">サンプル</div>
	</body>

</html>
`;
});

$id("temp5-1-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>5-1</title>
		<style>
			.box{
				width:200px; height:200px;
				line-height:200px; text-align:center;
				border:1px solid gray;
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				transition:all 1s ease-in-out 0s;
			}

			#box1:hover{
				color:white;
				background-color:red;
			}
		</style>
	</head>

	<body>
		<div id="box1" class="box">サンプル</div>
	</body>

</html>

`;
});


$id("temp5-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>5-2</title>
		<style>
			.box{
				width:200px; height:200px;
				line-height:200px; text-align:center;
				border:1px solid gray;
				margin:50px auto;
			}

			#box1{

			}

			#box1:hover{}
		</style>
	</head>

	<body>
		<div class="box" id="box1">回転</div>
		<div class="box" id="box2">伸縮</div>
		<div class="box" id="box3">歪み</div>
		<div class="box" id="box4">移動</div>
	</body>

</html>
`;
});

$id("temp5-2-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>5-2</title>
		<style>
			.box{
				width:200px; height:200px;
				line-height:200px; text-align:center;
				border:1px solid gray;
				margin:50px auto;
			}

			#box1,#box2,#box3,#box4{
				transition:transform 1s ease-in-out 0s;
			}

			#box1:hover{transform:rotate(45deg);}
			#box2:hover{transform:scale(1,2);}
			#box3:hover{transform:skew(10deg,0deg);}
			#box4:hover{transform:translate(100px,100px);}

		</style>
	</head>

	<body>
		<div class="box" id="box1">回転</div>
		<div class="box" id="box2">伸縮</div>
		<div class="box" id="box3">歪み</div>
		<div class="box" id="box4">移動</div>
	</body>

</html>

`;
});


//6.

$id("temp6-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>6-1</title>
		<style>
			.box{
				border:1px solid gray;
				width:200px;
				height:200px;
				padding:0px;
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{

			}

			@keyframes anime{

			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">アニメ</div>
	</body>

</html>
`;
});

$id("temp6-1-1").addEventListener("click", function () {
	$id("editor").value
		= `
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>6-1</title>
		<style>
			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				animation: anime 3s ease-in-out 0s infinite normal;
			}

			@keyframes anime{
				0%{transform:rotate(0deg);}
				100%{transform:rotate(360deg);}
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">アニメ</div>
	</body>

</html>

`;
});

$id("temp6-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>6-2</title>
		<style>
			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				animation:anime 1s linear 0s infinite normal;
				animation-fill-mode:both;
				width:150px; height:150px;
				border-color:red green blue yellow;
				border-width:10px;
				border-style:solid;
				border-radius:50%;
			}

			@keyframes anime{
				0%{transform:rotate(0deg);}
				100%{transform:rotate(360deg);}
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1"></div>
	</body>

</html>

`;
});

$id("temp6-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>6-3</title>
		<style>
			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				animation:anime 3s ease-in-out 0s infinite normal;
				animation-fill-mode:both;
				font-size:100px;text-align:center;
				width:150px; height:150px; line-height:150px;
			}

			@keyframes anime{
				0%{transform:translate(-300px,0px); opacity:0;}
				50%{transform:translate(0px,0px); opacity:1;}
				100%{transform:translate(300px,0px); opacity:0;}
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">🍎</div>
	</body>

</html>

`;
});

$id("temp6-4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>6-4</title>
		<style>
			.box{
				border:1px solid gray; 					/*枠線*/
				width:200px;										/*コンテンツ横幅*/
				height:200px; 									/*コンテンツ高さ*/
				padding:0px;										/*内側余白*/
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#box1{
				animation:anime 3s ease-in-out 0s infinite normal;
				animation-fill-mode:both;
				font-size:100px;text-align:center;
				width:150px; height:150px; line-height:150px;
			}

			@keyframes anime{
				0%{transform:scale(1,1);}
				60%{transform:scale(1.4,1.4);}
				100%{transform:scale(1,1);}
			}
		</style>
	</head>

	<body>
		<div class="box" id="box1">💓</div>
	</body>

</html>

`;
});


//7.

$id("temp7-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>7-1</title>
		<style>
			.box{
				border:1px solid gray;
				width:100px; height:100px;
			}

			#parent{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
			}

			#child{

			}
		</style>
	</head>

	<body>
		<div class="box" id="parent">
			<div class="box" id="child">🎃</div>
		</div>
	</body>

</html>
`;
});

$id("temp7-1-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>7-1</title>
		<style>
			.box{
				border:1px solid gray;
				width:100px; height:100px;
			}

			#parent{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
				transform-style:preserve-3d;
				perspective:105px;
			}

			#child{
				transform:rotateY(30deg);
				font-size:80px;
				line-height:100px;
				text-align: center;
			}
		</style>
	</head>

	<body>
		<div class="box" id="parent">
			<div class="box" id="child">🎃</div>
		</div>
	</body>

</html>

`;
});

$id("temp7-2-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>7-2-1</title>
		<style>
			div{
				border:1px solid gray;
				width:100px; height:100px;
			}

			#parent{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
				transform-style:preserve-3d;
				perspective:105px;

			}

			#child{
				animation:mystory 5s ease-in-out 0s infinite normal;
				font-size:80px;
				line-height:100px;
				text-align: center;
			}

			@keyframes mystory{
				0%{transform:rotateX(0deg) rotateY(0deg);}
				100%{transform:rotateX(360deg) rotateY(360deg);}
			}

		</style>
	</head>

	<body>
		<div id="parent">
			<div id="child">🎃</div>
		</div>
	</body>

</html>

`;
});

$id("temp7-2-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>7-2-2</title>
		<style>
			div{
				border:1px solid gray;
				width:100px; height:100px;
			}

			#parent{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
				transform-style:preserve-3d;
				perspective:105px;
			}

			#child{
				animation:mystory 5s ease-in-out 0s infinite normal;
				font-size:80px;
				line-height:100px;
				text-align: center;
			}

			@keyframes mystory{
				0%{transform:rotateY(40deg) scaleX(1) scaleY(0.5);}
				50%{transform:rotateY(40deg) scaleX(0.5) scaleY(1);}
				100%{transform:rotateY(40deg) scaleX(1) scaleY(0.5);}
			}

		</style>
	</head>

	<body>
		<div id="parent">
			<div id="child">🎃</div>
		</div>
	</body>

</html>

`;
});

$id("temp7-2-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>7-2-3</title>
		<style>
			div{
				border:1px solid gray;
				width:100px; height:100px;
			}

			#parent{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
				transform-style:preserve-3d;
				perspective:105px;
			}

			#child{
				animation:mystory 5s ease-in-out 0s infinite normal;
				font-size:80px;
				line-height:100px;
				text-align: center;
			}

			@keyframes mystory{
				0%{transform:rotateY(40deg) translateX(-100px);}
				100%{transform:rotateY(40deg) translateX(200px);}
			}

		</style>
	</head>

	<body>
		<div id="parent">
			<div id="child">🎃</div>
		</div>
	</body>

</html>
`;
});


$id("temp7-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>7-3</title>
		<style>

			.parent{
				transform-style:preserve-3d;perspective:200px;
				position:relative;
				border:1px solid gray;
				height:300px;width:400px;margin:100px auto; 
				/*overflow:hidden;		はみ出しを消す*/
			}

			.child{
				position:absolute;margin:auto;
				top:0;left:0;right:0;bottom:0;
				width:50px;height:50px;
				animation:
					rotate 3s linear 0s infinite both,
					translate 6s linear 0s infinite both,
					scale 6s linear 0s infinite both,
					css 6s linear 0s infinite both;
			}

 			@keyframes rotate {
				100%{rotate:y 360deg;}
 			}
 			
			@keyframes translate {
				0%{translate:-200px 0px 0px;}
				50%{translate:0px 0px 100px;}
				100%{translate:200px 0px 0px;}
			}

			@keyframes scale {
				0%,100%{scale:1 1;}
				50%{scale:4 4;}
			}

			@keyframes css {
				0%,100%{opacity:0;}
				10%,90%{opacity:1;}
			}
	
			#id1{animation-delay:0s;background-color:pink;}
			#id2{animation-delay:2s;background-color:skyblue;}
			#id3{animation-delay:4s;background-color:lime;}
		</style>
	</head>
	<body>
		<h1>三次元のアニメーション(改)</h1>
		<div class="parent">
			<div class="child" id="id1">id1</div>
			<div class="child" id="id2">id2</div>
			<div class="child" id="id3">id3</div>
		</div>
	</body>
</html>
`;
});


//8.

$id("temp8-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>8-1</title>
		<style>
			*{margin:0px;padding:0px;}

			#box1{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
				font-size:20px;
				width:200px;height:200px;line-height:200px;
				text-align:center;border:1px solid gray;
			}
		</style>
	</head>

	<body>
		<script>
			const box1 = document.getElementById("box1");

 			function btn1(){
				
			}
		</script>
	</body>

</html>
`;
});

$id("temp8-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>8-2</title>
		<style>
			*{margin:0px;padding:0px;}

			#box1{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
				font-size:20px;
				width:200px;height:200px;line-height:200px;
				text-align:center;border:1px solid gray;
			}
		</style>
	</head>

	<body>
		<div id="box1" onclick="btn1();">いい天気!</div>
		<script>
			const box1 = document.getElementById("box1");

 			function btn1(){

			}
		</script>
	</body>

</html>
`;
});

$id("temp8-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>8-3</title>
		<style>
			*{margin:0px;padding:0px;}

			#box1{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
				font-size:20px;
				width:200px;height:200px;line-height:200px;
				text-align:center;border:1px solid gray;
			}
		</style>
	</head>

	<body>
		<div id="box1" onclick="btn1();">いい天気!</div>
		<script>
			const box1 = document.getElementById("box1");

 			function btn1(){
    		box1.style.color = "red";
			}
		</script>
	</body>

</html>
`;
});
$id("temp8-4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>8-4</title>
		<style>
			*{margin:0px;padding:0px;}

			#box1{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
				font-size:20px;
				width:200px;height:200px;line-height:200px;
				text-align:center;border:1px solid gray;
			}

			#box1{transition:all 1s linear;}
		</style>
	</head>

	<body>
		<div id="box1" onclick="btn1();">いい天気!</div>
		<script>
			const box1 = document.getElementById("box1");

 			function btn1(){
    		box1.style.color = "red";
			}
		</script>
	</body>

</html>
`;
});
$id("temp8-5").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>8-5</title>
		<style>
			*{margin:0px;padding:0px;}

			#box1{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
				font-size:20px;
				width:200px;height:200px;line-height:200px;
				text-align:center;border:1px solid gray;

			}

			#box1{transition:all 1s linear;}
		</style>
	</head>

	<body>
		<div id="box1" onclick="btn1();">いい天気!</div>
		<script>
			const box1 = document.getElementById("box1");

 			function btn1(){
    		box1.style.color = "red";
				box1.style.width = "500px";
 				box1.style.height = "300px";
			}
		</script>
	</body>

</html>
`;
});
$id("temp8-6").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>8-6</title>
		<style>
			*{margin:0px;padding:0px;}

			#box1{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;
				font-size:20px;
				width:200px;height:200px;line-height:200px;
				text-align:center;border:1px solid gray;
			}

			#box1{transition:all 1s linear;}
		</style>
	</head>

	<body>
		<div id="box1" onclick="btn1();">いい天気!</div>
		<script>
			const box1 = document.getElementById("box1");

 			function btn1(){
    		box1.style.color = "red";
				box1.style.width = "500px";
 				box1.style.height = "300px";
				box1.style.backgroundColor = "green";
			}
		</script>
	</body>

</html>
`;
});
$id("temp8-7").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>8-7</title>
		<style>
			*{margin:0px;padding:0px;}
			#box1{
				position:absolute;
				top:0px;right:0px;bottom:0px;left:0px;
				margin:auto;				
				font-size:20px;
				width:200px;height:200px;line-height:200px;
				text-align:center;border:1px solid gray;

			}

			#box1{transition:all 1s linear;}
		</style>
	</head>

	<body>
		<div id="box1" onclick="btn1();">いい天気!</div>
		<script>
			const box1 = document.getElementById("box1");

 			function btn1(){
    		box1.style.color = "red";
				box1.style.width = "500px";
 				box1.style.height = "300px";
				box1.style.backgroundColor = "green";
				box1.style.transform = "rotate(30deg)";
			}
		</script>
	</body>
	
</html>
`;
});
