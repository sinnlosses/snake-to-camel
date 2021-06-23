"use strict";
/**
 * 本処理を実行する.
 */
function execute() {
    const inputText = getDocumentId("inputTextarea").value;
    let outputTextarea = document.getElementById("outputTextarea");
    outputTextarea.value = snakeToCamel(inputText);
}
/**
 * 指定したIDを持つエレメントを返す.
 * @param id エレメントID
 */
function getDocumentId(id) {
    return document.getElementById(id);
}
/**
 * スネークケースからキャメルケースへ変換する
 * @param strSelectedText 選択文字列
 */
function snakeToCamel(strSelectedText) {
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
            }
            else {
                strTmp = strTmp + aryWork[j].substr(0, 1).toUpperCase() + aryWork[j].substr(1);
            }
        }
        if (j + 1 < row) {
            result = result + strTmp + "\n";
        }
        else {
            result = result + strTmp;
        }
    }
    return result;
}
