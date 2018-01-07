/////////////////////////////////////////////////////////
/////////////封装右边图层控制控件代码----开始/////////////
/////////////////////////////////////////////////////////
var gui = {};

gui.showModelInfo = function(d) {
    $('#dlgModelInfo').modal('show');
    $('#dlgModelInfo .modal-title').text('模型名称：' + d.name);
    $('#dlgModelInfo #m-fid').text(d.fid);
    $('#dlgModelInfo #m-type').text(d.type);
    $('#dlgModelInfo #m-gid').text(d.gid);
    $('#dlgModelInfo #m-x').text(d.x);
    $('#dlgModelInfo #m-y').text(d.y);
};

gui.showLabelInfo = function(d) {
    $('#dlgLabellInfo').modal('show');
    $('#dlgLabellInfo .modal-title').text('label名称：' + d.name);
    $('#dlgLabellInfo #l-fid').text(d.fid);
    $('#dlgLabellInfo #l-gid').text(d.gid);
    $('#dlgLabellInfo #l-x').text(d.x);
    $('#dlgLabellInfo #l-y').text(d.y);
};

gui.showPOIInfo = function(d) {
    $('#dlgPOIInfo').modal('show');
    $('#dlgPOIInfo .modal-title').text('poi名称：' + d.name);
    $('#dlgPOIInfo #p-fid').text(d.fid);
    $('#dlgPOIInfo #p-gid').text(d.gid);
    $('#dlgPOIInfo #p-x').text(d.x);
    $('#dlgPOIInfo #p-y').text(d.y);
};

gui.showClickInfo = function(d) {
    $('#dlgModelInfo').modal('show');
    $('#dlgModelInfo .modal-title').text('拾取对象类型：' + d.name);
    $('#dlgModelInfo #m-info').text(d.x + '，' + d.y);
}

gui.showPickupInfo = function(d) {
    $('#dlgModelInfo').modal('show');
    $('#dlgModelInfo .modal-title').text('已拾取一个' + d.name + '标注');
    $('#dlgModelInfo #m-info').text(d.id);
}

gui.showZoom = function(flag) {
    if (flag) {
        $('.fm-control-zoom').show();
    } else {
        $('.fm-control-zoom').hide();
    }
}

/////////////////////////////////////////////////////////
/////////////封装右边图层控制控件代码----结束////////////
/////////////////////////////////////////////////////////