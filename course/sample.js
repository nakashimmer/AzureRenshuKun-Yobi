//1.
$id("temp1-2_start").addEventListener("click", function () {
	$id("editor").value
		= `<★>
<html>
	<head>
		<meta ★>
		<title>1-2_start</title>
		<meta ★>
		<style>
			/*CSSのエリア*/
		</style>
	</head>
	<body>
		<!-- コンテンツ -->

		<★>
			//JavaScriptのエリア

		</★>
	</body>
</html>
`;
});

$id("temp1-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>1-2</title>
		<meta name="viewport" content="width=device-width">
		<style>
			/*CSSのエリア*/
		</style>
	</head>
	<body>
		<!-- コンテンツ -->

		<script>
			//JavaScriptのエリア

		</script>
	</body>
</html>
`;
});

//2.
$id("temp2-2_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>2-2_start</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<★>
		<script>
			//★
			//★
		</script>
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
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<p id="output1">出力</p>
		<script>
			const output1 = document.getElementById("output1");
			output1.innerHTML = "書き換えました！";
		</script>
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
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<button onclick="change1();">ボタン１</button>
		<p id="output1">出力</p>
		<script>
			const output1 = document.getElementById("output1");
			function change1(){	
				output1.innerHTML = "書き換えました！";
			}
		</script>
	</body>
</html>
`;
});

$id("temp2-4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>2-4</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<input type="text" id="input1">
		<button onclick="change1();">ボタン１</button>
		<p id="output1">出力</p>
		<script>
			const input1 = document.getElementById("input1");
			const output1 = document.getElementById("output1");
			function change1(){
				output1.innerHTML = input1.value;
			}
		</script>
	</body>
</html>
`;
});

$id("temp2-5-1_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>2-5-1_start</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<p id="output1">出力</p>
		<button onclick="btn1();">ボタン1</button>
		<script>
			const output1=document.getElementById("output1");
			//★
			//★
			function btn1(){	
				output1.innerHTML = ★;
			}
		</script>
	</body>
</html>
`;
});

$id("temp2-5-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>2-5-1</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<p id="output1">出力</p>
		<button onclick="btn1();">ボタン1</button>
		<script>
			const output1=document.getElementById("output1");
			let n1 = 5;
			let n2 = 3;
			function btn1(){	
				output1.innerHTML = n1+n2;
			}
		</script>
	</body>
</html>
`;
});

$id("temp2-5-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>2-5-2</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<p id="output1">出力</p>
		<button onclick="btn1();">ボタン1</button>
		<script>
			const output1=document.getElementById("output1");
			let n1 = "Hello ";
			let n2 = "HTML";
			function btn1(){
				output1.innerHTML = n1+n2;
			}
		</script>
	</body>
</html>
`;
});

$id("temp2-6_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>2-6_start</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<input type="text" id="input1">
		<button onclick="btn1();">ボタン1</button>
		<p id="output1">出力</p>
		<script>
			const input1 = document.getElementById("input1");
			const output1 = document.getElementById("output1");
		
			//★	//正解の値
		
			function btn1(){
				let n1 = Number(input1.value);
				//★
					output1.innerHTML = "正解";
				//★
					output1.innerHTML = "残念";
				//★
			}
		</script>
	</body>
</html>
`;
});

$id("temp2-6").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>2-6</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<input type="text" id="input1">
		<button onclick="btn1();">ボタン1</button>
		<p id="output1">出力</p>
		<script>
			const input1 = document.getElementById("input1");
			const output1 = document.getElementById("output1");
		
			let correct1 = 50;	//正解の値
		
			function btn1(){
				let n1 = Number(input1.value);
				if(n1 === correct1){
					output1.innerHTML = "正解";
				}else{
					output1.innerHTML = "残念";
				}
			}
		</script>
	</body>
</html>
`;
});

//3.

$id("temp3-1_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>3-1_start</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<p id="date1">日付loading...</p>
		<script>
			const date1 = document.getElementById("date1");
		
			//★
		
			date1.innerHTML = ★;
			//y+"年"+m+"月"+d+"日"+h+"時"+i+"分"+s+"秒"
		</script>
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
		<title>3-1-1</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<p id="date1">日付loading...</p>
		<script>
			const date1 = document.getElementById("date1");
		
			const now = new Date();
			let y = now.getFullYear();								//年
			let m = now.getMonth()+1;									//月
			let d = now.getDate();										//日
			let w = now.getDay();											//曜日
			let h = now.getHours();										//時
			let i = now.getMinutes();									//分
			let s = now.getSeconds();									//秒	
		
			date1.innerHTML = y+"年"+m+"月"+d+"日"+h+"時"+i+"分"+s+"秒"
		</script>
	</body>
</html>
`;
});

$id("temp3-1-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>3-1-2</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<p id="date1">日付loading...</p>
		<script>
			const date1 = document.getElementById("date1");
		
			setInterval(myclock,1000);

			function myclock(){
				const now = new Date();
				let y = now.getFullYear();								//年
				let m = now.getMonth()+1;									//月
				let d = now.getDate();										//日
				let w = now.getDay();											//曜日
				let h = now.getHours();										//時
				let i = now.getMinutes();									//分
				let s = now.getSeconds();									//秒
			
				date1.innerHTML = y+"年"+m+"月"+d+"日"+h+"時"+i+"分"+s+"秒";
			}
				</script>
	</body>
</html>
`;
});

//4.
$id("temp4-1_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>4-1_start</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<p id="n">数学オブジェクト</p>
		<script>
			const n = document.getElementById("n");
		
			//★
		
			n.innerHTML = ★;													//n2,n3… 他の変数に変更する
		</script>
	</body>
</html>
`;
});

$id("temp4-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>4-1</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<p id="n">数学オブジェクト</p>
		<script>
			const n = document.getElementById("n");
		
			let n1 = Math.floor(3.14);								//切捨
			// let n1 = Math.round(3.14);								//四捨五入
			// let n1 = Math.ceil(3.14);									//切上
			// let n1 = Math.pow(2,2);										//累乗
			// const n1 = Math.PI;												//円周率
			// let n1 = Math.random();										//乱数
		
			n.innerHTML =n1;													//n2,n3… 他の変数に変更する
		</script>
	</body>
</html>
`;
});


$id("temp4-3_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>4-3_start</title>
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<h1>数当てゲーム</h1>
		<p>0から9までの整数を入力：<input type="text" id="input1"></p>
		<p><button onclick="btn1();">ボタン1</button></p>
		<p id="result">結果</p>
		<script>
			
			//★
			
		</script>
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
		<meta name="viewport" content="width=device-width">
		<style>
		</style>
	</head>
	<body>
		<h1>数当てゲーム</h1>
		<p>0から9までの整数を入力：<input type="text" id="input1"></p>
		<p><button onclick="btn1();">ボタン1</button></p>
		<p id="result">結果</p>
		<script>
			const input1 = document.getElementById("input1");
			const result = document.getElementById("result");
		
			let n = Math.floor(Math.random()*10);
		
			function btn1(){
				let n1 = Number(input1.value);
				let judge;
				if(n1 === n){
					judge = "Good";
				}else{
					judge = "NG";
				}
		
				result.innerHTML = judge;
			}
		</script>
	</body>
</html>
`;
});


//5. 
$id("temp5-1_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>5-1_start</title>
		<meta name="viewport" content="width=device-width">
		<style> 
		</style>
	</head>
	<body>
		<h1>オーディオ</h1>
		<p><audio id="audio1" src="media/audio.mp3"></audio></p>
		<p>
			<button onclick="//★">再生</button>
			<button onclick="//★">停止</button>
			<button onclick="//★">最初から</button>
			<button onclick="//★">音を小さく</button>
			<button onclick="//★">音を大きく</button>
			<button onclick="//★">早く</button>
			<button onclick="//★">ゆっくり</button>
		</p>
		<script>
			//★
		</script>
	</body>
</html>
`;
});

$id("temp5-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>5-1</title>
		<meta name="viewport" content="width=device-width">
		<style> 
		</style>
	</head>
	<body>
		<h1>オーディオ</h1>
		<p><audio id="audio1" src="media/audio.mp3"></audio></p>
		<p>
			<button onclick="audio1.play();">再生</button>
			<button onclick="audio1.pause();">停止</button>
			<button onclick="audio1.currentTime = 0;">最初から</	button>
			<button onclick="audio1.volume -= 0.2;">音を小さく</button>
			<button onclick="audio1.volume += 0.2;">音を大きく</button>
			<button onclick="audio1.playbackRate += 0.5;">早く</button>
			<button onclick="audio1.playbackRate -= 0.5;">ゆっくり</button>
		</p>
		<script>
			const audio1 = document.getElementById("audio1");
		</script>
	</body>
</html>
`;
});

$id("temp5-2_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>5-2_start</title>
		<meta name="viewport" content="width=device-width">
		<style> 
		</style>
	</head>
	<body>
		<h1>ビデオ</h1>
		<p><video id="video1" src="media/video.m4v" width="320"></video></p>
		<p>
			<button onclick="//★">再生</button>
			<button onclick="//★">一旦停止 </button>
			<button onclick="//★">最初から</button>
			<button onclick="//★">音を小さく</button>
			<button onclick="//★">音を大きく</button>
			<button onclick="//★">早く</button>	
			<button onclick="//★">ゆっくり</button>
		</p>
		<script>
			//★
		</script>
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
		<meta name="viewport" content="width=device-width">
		<style> 
		</style>
	</head>
	<body>
		<h1>ビデオ</h1>
		<p><video id="video1" src="media/video.m4v" width="320"></video></p>
		<p>
			<button onclick="video1.play();">再生</button>
			<button onclick="video1.pause();">一旦停止 </button>
			<button onclick="video1.currentTime = 0;">最初から</button>
			<button onclick="video1.volume -= 0.2;">音を小さく</button>
			<button onclick="video1.volume += 0.2;">音を大きく</button>
			<button onclick="video1.playbackRate += 0.5;">早く</button>	
			<button onclick="video1.playbackRate -= 0.5;">ゆっくり</button>
		</p>
		<script>
			const video1 = document.getElementById("video1");
		</script>
	</body>
</html>
`;
});


//6.

$id("temp6-1_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>6-1_start</title>
		<meta name="viewport" content="width=device-width">
		<style>
			#canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="300" height="300"></canvas></p>
		<script>
			const canvas = document.getElementById("canvas");
			//★
		
			// ここに図形の描画のコードを記述します。
		
		</script>
	</body>
</html>
`;
});

$id("temp6-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>6-1</title>
		<meta name="viewport" content="width=device-width">
		<style>
			#canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="300" height="300"></canvas></p>
		<script>
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
		
			// ここに図形の描画のコードを記述します。
		
		</script>
	</body>
</html>
`;
});

$id("temp6-2-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>6-2-1</title>
		<meta name="viewport" content="width=device-width">
		<style>
			#canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="300" height="300"></canvas></p>
		<script>
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
		
			// ここに図形の描画のコードを記述します。
			ctx.fillStyle = "red";								//塗色
			ctx.fillRect(0,0,100,100);						//矩形(x,y,幅,高さ)
		</script>
	</body>
</html>
`;
});

$id("temp6-2-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>6-2-2</title>
		<meta name="viewport" content="width=device-width">
		<style>
			#canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="300" height="300"></canvas></p>
		<script>
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
		
			// ここに図形の描画のコードを記述します。
			ctx.fillStyle = "red";								//塗色
			ctx.fillRect(0,0,100,100);						//矩形(x,y,幅,高さ)

			ctx.beginPath();											//パス開始
			ctx.moveTo(150,0);										//開始点の(x,y)座標
			ctx.lineTo(100,100);									//頂点の(x,y)座標
			ctx.lineTo(200,100); 									//頂点の(x,y)座標
			ctx.closePath(); 										//パス終了
			ctx.fillStyle = "green";
			ctx.fill();													//塗る
		</script>
	</body>
</html>
`;
});

$id("temp6-2-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>6-2-3</title>
		<meta name="viewport" content="width=device-width">
		<style>
			#canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="300" height="300"></canvas></p>
		<script>
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
		
			// ここに図形の描画のコードを記述します。
			ctx.fillStyle = "red";								//塗色
			ctx.fillRect(0,0,100,100);						//矩形(x,y,幅,高さ)

			ctx.beginPath();											//パス開始
			ctx.moveTo(150,0);										//開始点の(x,y)座標
			ctx.lineTo(100,100);									//頂点の(x,y)座標
			ctx.lineTo(200,100); 									//頂点の(x,y)座標
			ctx.closePath(); 										//パス終了
			ctx.fillStyle = "green";
			ctx.fill();													//塗る

			ctx.beginPath();
			ctx.moveTo(200,0);
			ctx.lineTo(300,100);
			ctx.lineWidth = 1;										//線の幅
			ctx.strokeStyle = "blue";							//線の色
			ctx.stroke();												//線を引く
		</script>
	</body>
</html>
`;
});

$id("temp6-2-4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>6-2-4</title>
		<meta name="viewport" content="width=device-width">
		<style>
			#canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="300" height="300"></canvas></p>
		<script>
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
		
			// ここに図形の描画のコードを記述します。
			ctx.fillStyle = "red";								//塗色
			ctx.fillRect(0,0,100,100);						//矩形(x,y,幅,高さ)

			ctx.beginPath();											//パス開始
			ctx.moveTo(150,0);										//開始点の(x,y)座標
			ctx.lineTo(100,100);									//頂点の(x,y)座標
			ctx.lineTo(200,100); 									//頂点の(x,y)座標
			ctx.closePath(); 										//パス終了
			ctx.fillStyle = "green";
			ctx.fill();													//塗る

			ctx.beginPath();
			ctx.moveTo(200,0);
			ctx.lineTo(300,100);
			ctx.lineWidth = 1;										//線の幅
			ctx.strokeStyle = "blue";							//線の色
			ctx.stroke();												//線を引く

			let angle1 = 10/180 * Math.PI ;
			let angle2 = 200/180 * Math.PI ; 
			ctx.beginPath();
			ctx.moveTo(50,150);
			ctx.arc(50, 150, 40, angle1, angle2, false);		//円弧のパス
			ctx.closePath();
			ctx.fillStyle = "skyblue";
			ctx.fill();
		</script>
	</body>
</html>
`;
});

$id("temp6-2-5").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>6-2-5</title>
		<meta name="viewport" content="width=device-width">
		<style>
			#canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="300" height="300"></canvas></p>
		<script>
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
		
			// ここに図形の描画のコードを記述します。
			ctx.fillStyle = "red";								//塗色
			ctx.fillRect(0,0,100,100);						//矩形(x,y,幅,高さ)

			ctx.beginPath();											//パス開始
			ctx.moveTo(150,0);										//開始点の(x,y)座標
			ctx.lineTo(100,100);									//頂点の(x,y)座標
			ctx.lineTo(200,100); 									//頂点の(x,y)座標
			ctx.closePath(); 										//パス終了
			ctx.fillStyle = "green";
			ctx.fill();													//塗る

			ctx.beginPath();
			ctx.moveTo(200,0);
			ctx.lineTo(300,100);
			ctx.lineWidth = 1;										//線の幅
			ctx.strokeStyle = "blue";							//線の色
			ctx.stroke();												//線を引く

			let angle1 = 10/180 * Math.PI ;
			let angle2 = 200/180 * Math.PI ; 
			ctx.beginPath();
			ctx.moveTo(50,150);
			ctx.arc(50, 150, 40, angle1, angle2, false);		//円弧のパス
			ctx.closePath();
			ctx.fillStyle = "skyblue";
			ctx.fill();

			ctx.fillStyle = "black";
			ctx.font = "100px serif";								//文字の大きさとフォント
			ctx.fillText("Hello",0,300);						//文字の描画
		</script>
	</body>
</html>
`;
});

$id("temp6-2-6").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>6-2-6</title>
		<meta name="viewport" content="width=device-width">
		<style>
			#canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="300" height="300"></canvas></p>
		<script>
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
		
			// ここに図形の描画のコードを記述します。
			ctx.fillStyle = "red";								//塗色
			ctx.fillRect(0,0,100,100);						//矩形(x,y,幅,高さ)

			ctx.beginPath();											//パス開始
			ctx.moveTo(150,0);										//開始点の(x,y)座標
			ctx.lineTo(100,100);									//頂点の(x,y)座標
			ctx.lineTo(200,100); 									//頂点の(x,y)座標
			ctx.closePath(); 										//パス終了
			ctx.fillStyle = "green";
			ctx.fill();													//塗る

			ctx.beginPath();
			ctx.moveTo(200,0);
			ctx.lineTo(300,100);
			ctx.lineWidth = 1;										//線の幅
			ctx.strokeStyle = "blue";							//線の色
			ctx.stroke();												//線を引く

			let angle1 = 10/180 * Math.PI ;
			let angle2 = 200/180 * Math.PI ; 
			ctx.beginPath();
			ctx.moveTo(50,150);
			ctx.arc(50, 150, 40, angle1, angle2, false);		//円弧のパス
			ctx.closePath();
			ctx.fillStyle = "skyblue";
			ctx.fill();

			ctx.fillStyle = "black";
			ctx.font = "100px serif";								//文字の大きさとフォント
			ctx.fillText("Hello",0,300);						//文字の描画

			var img = new Image();
			img.src = "image.png";
			img.onload = function(){
				ctx.drawImage(img, 100, 100);
			}

		</script>
	</body>
</html>
`;
});

$id("temp6-3_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>6-3_start</title>
		<meta name="viewport" content="width=device-width">
		<style>
			#canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="600" height="600"></canvas></p>

		<script>
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
		
			const obake = {x:300, y:300, dx:1, dy:1, s:100};
		
			const img = new Image();
			img.src="media/image.png";
		
			//★
		
			function anime(){
		
				//①消去
					//★
		
				//②描画
					//★
		
				//③計算
					//★
					//★
					//★
					//★
			}
		</script>
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
		<meta name="viewport" content="width=device-width">
		<style>
			#canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="600" height="600"></canvas></p>

		<script>
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");
		
			const obake = {x:300, y:300, dx:1, dy:1, s:100};
		
			const img = new Image();
			img.src = "media/image.png";
		
			setInterval(loop, 50);
		
			function loop(){
		
				//①消去
				ctx.clearRect(0, 0, 600, 600);
		
				//②描画
				ctx.drawImage(img, obake.x, obake.y, obake.s, obake.s);
		
				//③計算
				obake.x += obake.dx;
				obake.y += obake.dy;
				if(obake.x<0 || 500<obake.x){obake.dx *= -1;}
				if(obake.y<0 || 500<obake.y){obake.dy *= -1;}
			}
		</script>
	</body>
</html>
`;
});


//7.
$id("temp7-1_start").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>7-1_start</title>
		<meta name="viewport" content="width=320">
		<style> 
			*{margin:0; padding:0;}
			body{text-align:center;}
			canvas{border:1px solid gray;}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="320" height="480"></canvas></p>
		<script>
			const canvas = document.getElementById("canvas"); 
			const ctx = canvas.getContext("2d");

			//変数の設定と初期化
			const target = {x:250, y:100,dir:1};  	// ターゲット（位置と移動方向）
			const player = {x:250, y:400};					// プレイヤー（位置）
			const ball = {x:-10, y:-10};					// ボール（位置） 
			const point = 0;											// 得点

			//★

			function loop(){									//アニメ関数
				//★
				//★
				//★
				//★
				//★

				//移動計算
				//★
				//★
				//壁衝突計算
				//★
				//得点ゲット
				//★
				//★
				//★
			}

			//独自関数
			function myclear(){
				//★
			}

			function mytarget(x,y){
				//★
				//★
			}

			function mypoint(point,x,y){
				//★
				//★
				//★
			}

			function myplayer(x,y){
				//★
				//★
			}
		
			function myball(x,y){
				//★	
				//★
			}

			//シュートするイベント処理(後述)
			canvas.addEventListener(
				"mousedown",
				(e)=>{
					ball.x = player.x;
					ball.y = player.y; 
				}
			);
		
			//マウスで自分キャラを動かすイベント処理(後述)
			canvas.addEventListener(
				"mousemove",
				(e)=>{
					const rect = e.target.getBoundingClientRect();
					player.x = e.clientX-rect.left;
				}
			);
		</script>
	</body>
</html>
`;
});

$id("temp7-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>7-1</title>
		<meta name="viewport" content="width=322">
		<style>
			* {
				margin: 0;
				padding: 0;
			}

			body {
				text-align: center;
			}

			#canvas {
				border: 1px solid gray;
			}
		</style>
	</head>
	<body>
		<p><canvas id="canvas" width="320" height="480"></canvas></p>
		<script>
			const canvas = document.getElementById("canvas");
			const ctx = canvas.getContext("2d");

			//変数の設定と初期化
			const target = { x: 250, y: 100, dir: 1 };  	// ターゲット（位置と移動方向）
			const player = { x: 250, y: 400 };					// プレイヤー（位置）
			const ball = { x: -10, y: -10 };						// ボール（位置） 
			let point = 0;												// 得点

			setInterval(loop, 50);

			function loop() {											//アニメ関数
				ctx.clearRect(0, 0, 320, 480);					//画面をクリア

				ctx.fillStyle = "black";
				ctx.fillRect(target.x - 25, target.y - 25, 50, 10);				//targetを描画

				ctx.fillStyle = "black";
				ctx.font = "20px sans-serif ";
				ctx.fillText(point, target.x, target.y - 30);					//得点表示

				ctx.fillStyle = "blue";
				ctx.fillRect(player.x - 25, player.y - 5, 50, 10);				//playerを描画

				ctx.fillStyle = "red";
				ctx.fillRect(ball.x - 5, ball.y - 5, 10, 10);					//ballを描画

				//移動計算
				target.x += target.dir;
				ball.y -= 5;
				//壁衝突計算
				if ((target.x < 25) || (295 < target.x)) { target.dir *= -1; }
				//得点ゲット
				if ((100 === ball.y) && (Math.abs(target.x - ball.x) < 25)) {
					point++;
				}
			}

			//シュートするイベント処理(後述)
			canvas.addEventListener(
				"mousedown",
				(e) => {
					ball.x = player.x;
					ball.y = player.y;
				}
			);

			//マウスで自分キャラを動かすイベント処理(後述)
			canvas.addEventListener(
				"mousemove",
				(e) => {
					const rect = e.target.getBoundingClientRect();
					player.x = e.clientX - rect.left;
				}
			);
		</script>
	</body>
</html>
`;
});

