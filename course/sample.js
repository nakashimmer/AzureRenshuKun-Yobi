//2.

$id("temp2-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>2-1</title>
	</head>
	<body>
	</body>
</html>`;
});

$id("temp2-2-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>2-2-1</title>
	</head>
	<body>
		<p><audio src="media/myAudio.mp3" controls></audio></p>
	</body>
</html>`;
});


$id("temp2-2-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>2-2-2</title>
	</head>
	<body>
		<p><audio src="media/myAudio.mp3" controls></audio></p>
		<p><video src="media/myVideo.mp4" controls playsinline></video></p>
	</body>
</html>`;
});

$id("temp2-2-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>2-2-3</title>
	</head>
	<body>
		<p><audio src="media/myAudio.mp3" controls></audio></p>
		<p><video src="media/myVideo.mp4" controls playsinline></video></p>
		<p><button onclick='alert("押しましたね")'>ボタン</button></p>
	</body>
</html>`;
});

$id("temp2-2-4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>2-2-4</title>
	</head>
	<body>
		<p><audio src="media/myAudio.mp3" controls></audio></p>
		<p><video src="media/myVideo.mp4" controls playsinline></video></p>
		<p><button onclick='alert("押しましたね")'>ボタン</button></p>
		<p><input type="text"></p>
		<p><input type="password"></p>
		<p><input type="range"></p>
		<p><input type="date"></p>
		<p><input type="color"></p>
		<p><textarea></textarea></p>
	</body>
</html>`;
});

$id("temp3-0").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>3</title>
		<style>
			div {

			}
		</style>
	</head>
	<body>
		
	</body>
</html>`;
});

$id("temp3-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>3-1</title>
		<style>
			div {
				border: 1px solid red;
				width: 200px;
				height: 200px;
				margin: 50px auto;
			}
		</style>
	</head>
	<body>
		<div id="box1"></div>
	</body>
</html>`;
});

$id("temp4-0").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>4</title>
	</head>
	<body>
		
	</body>
</html>`;
});

$id("temp4-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>4-1</title>
	</head>
	<body>
		<p id="output1">出力場所</p>
		<script>
			const output1 = document.getElementById("output1");

		</script>
	</body>
</html>`;
});

$id("temp5-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>5-1</title>
	</head>
	<body>
		<p id="output1">出力場所</p>
		<script>
			const output1 = document.getElementById("output1");
			output1.innerHTML = "こんにちは！";
		</script>
	</body>
</html>`;
});

$id("temp5-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>5-2</title>
	</head>
	<body>
		<button onclick="btn1();">ボタン1</button>
		<p id="output1">出力場所</p>
		<script>
			const output1 = document.getElementById("output1");
			function btn1() {
				output1.innerHTML = "こんにちは！";
			}
		</script>
	</body>
</html>`;
});

$id("temp5-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>5-3</title>
	</head>
	<body>
		<button onclick="btn1();">ボタン1</button>
		<p id="output1">出力場所</p>
		<script>
			const output1 = document.getElementById("output1");
			function btn1() {
				let n1 = 5;
				n1 = 3;
				output1.innerHTML = n1;
			}
		</script>
	</body>
</html>`;
});


$id("temp5-4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>5-4</title>
	</head>
	<body>
		<button onclick="btn1();">ボタン1</button>
		<p id="output1">出力場所</p>
		<script>
			const output1 = document.getElementById("output1");
			function btn1() {
				const n2 = 3.14;
				output1.innerHTML = n2;
			}
		</script>
	</body>
</html>`;
});

$id("temp5-5").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>5-5</title>
	</head>
	<body>
		<button onclick="btn1();">ボタン1</button>
		<p id="output1">出力場所</p>
		<script>
			const output1 = document.getElementById("output1");
			function btn1() {
				const week = new Array("日", "月", "火", "水", "木", "金", "土");
				output1.innerHTML = week[1];
			}
		</script>
	</body>
</html>`;
});

$id("temp5-6").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>5-6</title>
	</head>
	<body>
		<button onclick="btn1();">ボタン1</button>
		<p id="output1">出力場所</p>
		<script>
			const output1 = document.getElementById("output1");
			function btn1() {
				let n1 = 5;
				let n2 = 3;
				let n3 = n1 + n2;
				output1.innerHTML = n3;
			}
		</script>
	</body>
</html>`;
});


$id("temp5-7").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>5-7</title>
	</head>
	<body>
		<button onclick="btn1();">ボタン1</button>
		<p id="output1">出力場所</p>
		<script>
			const output1 = document.getElementById("output1");
			function btn1() {
				let str1 = "Pen";
				let str2 = "Pineapple";
				let str3 = str1 + str2;
				output1.innerHTML = str3;
			}
		</script>
	</body>
</html>`;
});

$id("temp6-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>6</title>
	</head>
	<body>
		<input type="text" id="input1">
		<button onclick="btn1();">ボタン１</button>
		<p id="output1">出力場所</p>
		<script>
			const input1 = document.getElementById("input1");
			const output1 = document.getElementById("output1");
			function btn1() {
				output1.innerHTML = input1.value;
			}
		</script>
	</body>
</html>`;
});

$id("temp6-2-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>6-2-1</title>
	</head>
	<body>
		<input type="text" id="input1">
		<button onclick="btn1();">ボタン１</button>
		<p id="output1">出力場所</p>
		<script>
			const input1 = document.getElementById("input1");
			const output1 = document.getElementById("output1");
			let n1 = 50;
			function btn1() {
				if (Number(input1.value) === n1) {
					output1.innerHTML = "正解";
				} else {
					output1.innerHTML = "残念";
				}
			}
		</script>
	</body>
</html>`;
});

$id("temp6-2-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>6-2-2</title>
	</head>
	<body>
		<input type="text" id="input1">
		<button onclick="btn1();">ボタン１</button>
		<p id="output1">出力場所</p>
		<script>
			const input1 = document.getElementById("input1");
			const output1 = document.getElementById("output1");
			let n1 = 50;
			function btn1() {
				let n2 = Number(input1.value);
				if (n1 < n2) {
					output1.innerHTML = "多いです";
				} else if (n1 > n2) {
					output1.innerHTML = "少ないです";
				} else {
					output1.innerHTML = "正解";
				}
			}
		</script>
	</body>
</html>`;
});


$id("temp7-0").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>7</title>
	</head>
	<body>
	
	</body>
</html>`;
});

$id("temp7").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>7</title>
	</head>
	<body>
		<h1>計算機</h1>
		<p>n1:<input id="input1" type="text"></p>
		<p>n2:<input id="input2" type="text"></p>
		<p>
			<button onclick="btn(1);">＋</button>
			<button onclick="btn(2);">−</button>
			<button onclick="btn(3);">×</button>
			<button onclick="btn(4);">÷</button>
		</p>
		<p id="output1">結果を表示</p>
		<script>
			const input1 = document.getElementById("input1");
			const input2 = document.getElementById("input2");
			const output1 = document.getElementById("output1");
			function btn(i) {
				let n1 = Number(input1.value);
				let n2 = Number(input2.value);
				let n3;
				if (i === 1) {
					n3 = n1 + n2;
				} else if (i === 2) {
					n3 = n1 - n2;
				} else if (i === 3) {
					n3 = n1 * n2;
				} else {
					n3 = n1 / n2;
				}
				output1.innerHTML = n3;
			}
		</script>
	</body>
</html>`;
});


$id("temp8-0").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>8</title>
	</head>
	<body>
		<p id="output1">日付情報</p>
		<script>
			const output1 = document.getElementById("output1");

		</script>
	</body>
</html>`;
});

$id("temp8-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>8-1</title>
	</head>
	<body>
		<p id="output1">日付情報</p>
		<script>
			const output1 = document.getElementById("output1");
			const now = new Date();
			output1.innerHTML = now;
		</script>
	</body>
</html>`;
});

$id("temp8-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>8-2</title>
	</head>
	<body>
		<p id="output1">日付情報</p>
		<script>
			const output1 = document.getElementById("output1");
			const now = new Date();
			let y = now.getFullYear();
			let m = now.getMonth() + 1;
			let d = now.getDate();
			let w = now.getDay();
			let h = now.getHours();
			let i = now.getMinutes();
			let s = now.getSeconds();
			const week = new Array("日", "月", "火", "水", "木", "金", "土");
			output1.innerHTML = y + "年" + m + "月" + d + "日" + week[w] + "曜日" + h + "時" + i + "分" + s + "秒";
		</script>
	</body>
</html>`;
});

$id("temp8-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>8-3</title>
	</head>
	<body>
		<p id="output1">日付情報</p>
		<script>
			const output1 = document.getElementById("output1");
			setInterval(clock, 1000);
			function clock() {
				const now = new Date();
				let y = now.getFullYear();
				let m = now.getMonth() + 1;
				let d = now.getDate();
				let w = now.getDay();
				let h = now.getHours();
				let i = now.getMinutes();
				let s = now.getSeconds();
				const week = new Array("日", "月", "火", "水", "木", "金", "土");
				output1.innerHTML = y + "年" + m + "月" + d + "日" + week[w] + "曜日" + h + "時" + i + "分" + s + "秒";
			}
		</script>
	</body>
</html>`;
});


$id("temp8-4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>8-4</title>
	</head>
	<body>
		<h1>きょうはなんの日？</h1>
		<p>今日は<span id="output1">〇〇</span>です。</p>
		<script>
			const output1 = document.getElementById("output1");
			const now = new Date();
			let m = now.getMonth() + 1;
			let d = now.getDate();
			m = 1; d = 1; //チェック用
			let nani;
			if (m === 1 && d === 1) {
				nani = "正月";
			} else if (m === 12 && d === 24) {
				nani = "クリスマス";
			} else if (m === 12 && d === 31) {
				nani = "大晦日";
			} else {
				nani = "なんでもない日バンザイ！";
			}
			output1.innerHTML = nani;
		</script>
		</script>
	</body>
</html>`;
});

$id("temp9-0").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>9</title>
	</head>
	<body>
		<p id="output1"></p>
		<script>
			const output1 = document.getElementById("output1");

		</script>
	</body>
</html>`;
});


$id("temp9-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>9-1</title>
	</head>
	<body>
		<p id="output1"></p>
		<script>
			const output1 = document.getElementById("output1");
			let n1 = 3.14;
			
			output1.innerHTML = n1;
		</script>
	</body>
</html>`;
});

$id("temp9-1-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>9-1-1</title>
	</head>
	<body>
		<p id="output1"></p>
		<script>
			const output1 = document.getElementById("output1");
			let n1 = 3.14;
			n1 = Math.floor(n1);
			output1.innerHTML = n1;
		</script>
	</body>
</html>`;
});


$id("temp9-1-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>9-1-2</title>
	</head>
	<body>
		<p id="output1"></p>
		<script>
			const output1 = document.getElementById("output1");
			let n1 = 3.14;
			n1 = Math.round(n1);
			output1.innerHTML = n1;
		</script>
	</body>
</html>`;
});

$id("temp9-1-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>9-1-3</title>
	</head>
	<body>
		<p id="output1"></p>
		<script>
			const output1 = document.getElementById("output1");
			let n1 = 3.14;
			n1 = Math.ceil(n1);
			output1.innerHTML = n1;
		</script>
	</body>
</html>`;
});

$id("temp9-1-4").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>9-1-4</title>
	</head>
	<body>
		<p id="output1"></p>
		<script>
			const output1 = document.getElementById("output1");
			let n1 = Math.pow(2, 3);
			output1.innerHTML = n1;
		</script>
	</body>
</html>`;
});


$id("temp9-1-5").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>9-1-5</title>
	</head>
	<body>
		<p id="output1"></p>
		<script>
			const output1 = document.getElementById("output1");
			const n1 = Math.PI;
			output1.innerHTML = n1;
		</script>
	</body>
</html>`;
});

$id("temp9-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>9-2</title>
	</head>
	<body>
		<p id="output1"></p>
		<script>
			const output1 = document.getElementById("output1");
			let max = 3;
			let n = Math.floor(Math.random() * max);
			output1.innerHTML = n1;
		</script>
	</body>
</html>`;
});

$id("temp9-3").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>9-3</title>
	</head>
	<body>
		<h1>占いアプリ</h1>
		<p>あなたのきょうの運勢は<span id="output1"></span>です。</p>
		<script>
			const output1 = document.getElementById("output1");
			let result;
			let max = 3;
			let n = Math.floor(Math.random() * max);
			if (n === 0) {
				result = "大吉";
			} else if (n === 1) {
				result = "中吉";
			} else if (n === 2) {
				result = "小吉";
			} else {
				result = "エラー";
			}
			output1.innerHTML = result;
		</script>
	</body>
</html>`;
});


$id("temp10-0").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>10</title>
	</head>
	<body>
	
	</body>
</html>`;
});

$id("temp10").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>10</title>
	</head>
	<body>
		<h1>じゃんけんゲーム</h1>
		<p>
			<button onclick="janken('グー');">ぐー</button>
			<button onclick="janken('チョキ');">ちょき</button>
			<button onclick="janken('パー');">ぱー</button>
		</p>
		<p id="output1">じゃんけん・・・</p>
		<script>
			const output1 = document.getElementById("output1");
			//得点
			let point = 0;
			let judge;
			function janken(player) {
				//PCの手
				let pc = Math.floor(Math.random() * 3);
				if (pc === 0) { pc = "グー"; }
				if (pc === 1) { pc = "チョキ"; }
				if (pc === 2) { pc = "パー"; }
				//判定
				if (player === "グー") {
					if (pc === "チョキ") { judge = "勝ち"; point++; }
					if (pc === "パー") { judge = "負け"; point--; }
					if (pc === "グー") { judge = "あいこ"; }
				}
				if (player === "チョキ") {
					if (pc === "パー") { judge = "勝ち"; point++; }
					if (pc === "グー") { judge = "負け"; point--; }
					if ( pc === "チョキ") { judge = "あいこ"; }
				}
				if (player === "パー") {
					if (pc === "グー") { judge = "勝ち"; point++; }
					if (pc === "チョキ") { judge = "負け"; point--; }
					if (pc === "パー") { judge = "あいこ"; }
				}

				//ページに表示
				output1.innerHTML = "<p>PCは" + pc + "</p><p>あなたは" + player + "</p><p>" + judge + "</p><p>得点" + point + "</p>";
			}
		</script>
	</body>
</html>`;
});


$id("temp11-0").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>11</title>
	</head>
	<body>
		
	</body>
</html>`;
});

$id("temp11-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>11-1</title>
	</head>
	<body>
		<audio id="audio1" src="media/myAudio.mp3"></audio>
		<p>
			<button onclick="audio1.play();">再生</button>
			<button onclick="audio1.pause();">停止</button>
			<button onclick="audio1.currentTime=0;audio1.play();">最初から</button>
			<button onclick="audio1.volume -= 0.2;">音を小さく</button>
			<button onclick="audio1.volume += 0.2;">音を大きく</button>
			<button onclick="audio1.playbackRate += 0.5;">早く</button>
			<button onclick="audio1.playbackRate -= 0.5;">ゆっくり</button>
		</p>
		<script>
			const audio1 = document.getElementById("audio1");
		</script>
	</body>
</html>`;
});

$id("temp11-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>11-2</title>
	</head>
	<body>
		<video id="video1" src="media/myVideo.mp4" loop></video>
		<p>
			<button onclick="video1.play();">再生</button>
			<button onclick="video1.pause();">一旦停止 </button>
			<button onclick="video1.currentTime=0;">最初から</button>
			<button onclick="video1.volume -= 0.2;">音を小さく</button>
			<button onclick="video1.volume += 0.2;">音を大きく</button>
			<button onclick="video1.playbackRate += 0.5;">早く</button>
			<button onclick="video1.playbackRate -= 0.5;">ゆっくり</button>
		</p>
		<script>
			const video1 = document.getElementById("video1");
		</script>
	</body>
</html>`;
});


$id("temp12-0").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>12</title>
	</head>
	<body>
		<p>key：<input id="input1" type="text"></p>
		<p>value：<input id="input2" type="text"></p>
		<p>
			<button onclick="myset();">保存</button>
			<button onclick="myget();">読出</button>
			<button onclick="myrmv();">削除</button>
			<button onclick="myclr();">全削除</button>
		</p>
		<script>
			const input1 = document.getElementById("input1");
			const input2 = document.getElementById("input2");
			function myset() {
			}
			function myget() {	
			}
			function myrmv() {
			}
			function myclr() {
			}
		</script>
	</body>
</html>`;
});


$id("temp12").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>12-1</title>
	</head>
	<body>
		<p>key：<input id="input1" type="text"></p>
		<p>value：<input id="input2" type="text"></p>
		<p>
			<button onclick="myset();">保存</button>
			<button onclick="myget();">読出</button>
			<button onclick="myrmv();">削除</button>
			<button onclick="myclr();">全削除</button>
		</p>
		<script>
			const input1 = document.getElementById("input1");
			const input2 = document.getElementById("input2");
			function myset() {
				localStorage.setItem(input1.value, input2.value);
			}
			function myget() {
				input2.value = localStorage.getItem(input1.value);
			}
			function myrmv() {
				localStorage.removeItem(input1.value);
			}
			function myclr() {
				localStorage.clear();
			}
		</script>
	</body>
</html>`;
});

$id("temp13-0").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>13</title>
		<style>
			div {
				border: 1px solid gray;
				width: 200px;
				height: 200px;
				margin: 50px auto;
				color: skyblue;
				text-align: center;
				line-height: 200px;
			}
		</style>
	</head>
	<body>
		<div id="box1">CSSを操作</div>
		<script>
			const box1 = document.getElementById("box1");
	
		</script>
	</body>
</html>`;
});

$id("temp13-1").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>13-1</title>
		<style>
			div {
				border: 1px solid gray;
				width: 200px;
				height: 200px;
				margin: 50px auto;
				color: skyblue;
				text-align: center;
				line-height: 200px;
			}
		</style>
	</head>
	<body>
		<div id="box1" onclick="cssChange();">CSSを操作</div>
		<script>
			const box1 = document.getElementById("box1");
			function cssChange() {
				box1.style.width = "300px";
				box1.style.height = "300px";
				box1.style.color = "white";
				box1.style.backgroundColor = "skyblue";
				box1.style.lineHeight = "300px";
			}
		</script>
	</body>
</html>`;
});

$id("temp13-2").addEventListener("click", function () {
	$id("editor").value
		= `<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>13-2</title>
		<style>
			div {
				border: 1px solid gray;
				width: 200px;
				height: 200px;
				margin: 50px auto;
				color: skyblue;
				text-align: center;
				line-height: 200px;
				transition:all 1s linear;
			}
		</style>
	</head>
	<body>
		<div id="box1" onclick="cssChange();">CSSを操作</div>
		<script>
			const box1 = document.getElementById("box1");
			function cssChange(){
				box1.style.width = "300px";
				box1.style.height = "300px";
				box1.style.color = "white";
				box1.style.backgroundColor = "skyblue";
				box1.style.lineHeight = "300px";
			}
		</script>
	</body>
</html>`;
});
