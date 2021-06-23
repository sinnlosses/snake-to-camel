/**
 * �X�l�[�N�P�[�X����L�������P�[�X�֕ϊ�����
 */

// �萔�̐錾
var TYPE_PAIR = 6;
var TYPE_GROUP = 7;

// �ϐ��̐錾
var SelFrom = GetSelectLineFrom();        // �I���J�n�s�擾
var SelTo = GetSelectLineTo();            // �I���ŏI�s�擾

// �����s�I������Ă���ꍇ
if (SelFrom != SelTo) {
    Editor.Jump(SelFrom, 0);
    Editor.BeginSelect();                     // �I���J�n
    Editor.Jump(SelTo, 0);
    Editor.GoLineEnd_Sel();                   // �s�̍Ō�Ɉړ�
}

// �I��͈͂̃e�L�X�g���擾
var strSelectedText = Editor.GetSelectedString();

var WSHShell = new ActiveXObject("WScript.Shell");

// ���C������
var createText = Main(strSelectedText);

// ���ʂ��G�f�B�^�o��
Editor.InsText(createText);

/**
 * �X�l�[�N�P�[�X����L�������P�[�X�֕ϊ�����
 * @param strSelectedText �I�𕶎���
 */
function Main(strSelectedText) {

    // �ϊ����ʕ�����
    var strConvertText = strSelectedText;

    // �������ɕϊ�
    strConvertText = strConvertText.toLowerCase();
    // �ϊ����ʕ�����
    var result = "";

    // �s���Ƃ̃f�[�^���擾
    var arySelectedText = strConvertText.split("\n");
    // �s��
    var row = arySelectedText.length;

    // �I���s�����������J��Ԃ�
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
