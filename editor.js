function $id(id){return document.getElementById(id);}

var content = localStorage.getItem("codeData");
var js_name = localStorage.getItem("js_name");
if (content) { 
	$id("editor").value = content;
	$id("name").value=js_name;
}

$id("clrbtn").addEventListener("click", function () {
	localStorage.clear();
	editor.value = "";
});

$(function () {
	$("textarea").on('keydown', function (e) {
		// tabキー押下時の対応
		if (e.which == 9 || e.keyCode == 9) {
			e.preventDefault();
			var pos = this.selectionStart;
			var text = $(this).val();
			// tabの挿入
			$(this).val(text.substr(0, pos) + '\t' + text.substr(pos, text.length));
			// カーソルの場所を移動
			this.setSelectionRange(pos+1, pos+1);
		}
	});
});

for (let i = 1; i <= 5000 / 30; i++) {
	$id("no").innerHTML += "<div>" + i + ":</div>";
}	


//データ保存
$id("editor").addEventListener("mousemove",saveLS);
$id("list").addEventListener("mousemove",saveLS);
$id("submit").addEventListener("mousemove",saveLS);
$id("btn").addEventListener("mousemove",saveLS);
function saveLS(){
	localStorage.setItem("codeData",$id("editor").value);
	localStorage.setItem("js_name",$id("name").value);
	$id("w3cta").value = $id("editor").value;
	console.log("hozon");
};
////////////////

//閲覧ボタン
var w;
$id("btn").addEventListener("click",function(){
	var editor = $id("editor");
	editor = editor.value;
	if (typeof w === 'object') { w.close();} //JS対策
	w = window.open("", "sample");
	var doc = w.document;
	doc.open();
	doc.write(editor);
	doc.close();
});

//ダウンロード
function dl() {
	var content = $id("editor").value;
	var blob = new Blob([ content ],{"type":"text/plain"});
	$id("download").href = window.URL.createObjectURL(blob);
}

