$id("temp1").addEventListener("click", function () {
	$id("editor").value
		= `<script>
	document.write(1+2);
		
</script>`;
});

$id("temp2").addEventListener("click", function () {
	$id("editor").value
		= `<canvas id="canvas1" width="300" height="300" style="border:1px solid gray"></canvas>
<script>
	const canvas = document.getElementById("canvas1");
	const tools = canvas.getContext("2d"); //道具箱
	//---------------------------------------
	tools.beginPath(); 					// 描画開始
	tools.moveTo(90, 120);			// 始点
	tools.lineTo(150, 170);			// 通過点
	tools.lineTo(210, 120);			// 終点
	tools.lineWidth = 5;				// 線の太さ
	tools.strokeStyle = "pink";	// 線の色
	tools.lineCap="round";			// 線の端
	tools.stroke();							// 描画
	//---------------------------------------
</script>`;
});


