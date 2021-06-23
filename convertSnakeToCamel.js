/**
 * スネークケースからキャメルケースへ変換する
 */

// 定数の宣言
var TYPE_PAIR = 6;
var TYPE_GROUP = 7;

// 変数の宣言
var SelFrom = GetSelectLineFrom();        // 選択開始行取得
var SelTo = GetSelectLineTo();            // 選択最終行取得

// 複数行選択されている場合
if (SelFrom != SelTo) {
    Editor.Jump(SelFrom, 0);
    Editor.BeginSelect();                     // 選択開始
    Editor.Jump(SelTo, 0);
    Editor.GoLineEnd_Sel();                   // 行の最後に移動
}

// 選択範囲のテキストを取得
var strSelectedText = Editor.GetSelectedString();

var WSHShell = new ActiveXObject("WScript.Shell");

// メイン処理
var createText = Main(strSelectedText);

// 結果をエディタ出力
Editor.InsText(createText);

/**
 * スネークケースからキャメルケースへ変換する
 * @param strSelectedText 選択文字列
 */
function Main(strSelectedText) {

    // 変換結果文字列
    var strConvertText = strSelectedText;

    // 小文字に変換
    strConvertText = strConvertText.toLowerCase();
    // 変換結果文字列
    var result = "";

    // 行ごとのデータを取得
    var arySelectedText = strConvertText.split("\n");
    // 行数
    var row = arySelectedText.length;

    // 選択行数分処理を繰り返す
    for (var i = 0; i < row; i++) {

        var aryWork = arySelectedText[i].split("_");
        var strTmp = "";

        for (var j = 0; j < aryWork.length; j++) {
            if (j == 0) {
                strTmp = aryWork[j];
            } else {
                strTmp = strTmp + aryWork[j].substr(0, 1).toUpperCase() + aryWork[j].substr(1);
            }
        }
        if (j + 1 < row) {
            result = result + strTmp + "\n";
        } else {
            result = result + strTmp;
        }
    }

    return result;
}
