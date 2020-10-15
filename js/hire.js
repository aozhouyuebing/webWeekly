
window.onload = function () {
    var btn = document.getElementById("btn");
    var btn2 = document.getElementById("btn2");
    btn.onclick = function () {
        alert("发送请求已被接收，请耐心等待相关产品持有者与您沟通！");
        window.location.href = location.href;
    }
    btn2.onclick = function () {
        alert("您的信息已经发送到闲置物品处理中心，请等待他人前来租赁！");
        window.location.href = location.href;
    }
    var oY1 = document.getElementById("year1");
    var oM1 = document.getElementById("month1");
    var oD1 = document.getElementById("day1");
    ini(oY1, oM1, oD1);
    oY1.onchange = function () {
        ref(oY1, oM1, oD1);
    }
    oM1.onchange = function () {
        ref(oY1, oM1, oD1);
    }
    var oY2 = document.getElementById("year2");
    var oM2 = document.getElementById("month2");
    var oD2 = document.getElementById("day2");
    ini(oY2, oM2, oD2);
    oY1.onchange = function () {
        ref(oY2, oM2, oD2);
    }
    oM1.onchange = function () {
        ref(oY2, oM2, oD2);
    }
    var oY = document.getElementById("year");
    var oM = document.getElementById("month");
    var oD = document.getElementById("day");
    ini(oY, oM, oD);
    oY1.onchange = function () {
        ref(oY, oM, oD);
    }
    oM1.onchange = function () {
        ref(oY, oM, oD);
    }
    var oYs = document.getElementById("years");
    var oMs = document.getElementById("months");
    var oDs = document.getElementById("days");
    ini(oYs, oMs, oDs);
    oY1.onchange = function () {
        ref(oYs, oMs, oDs);
    }
    oM1.onchange = function () {
        ref(oYs, oMs, oDs);
    }
}

//任务一：初始化年月日列表框
function ini(y, m, d) {
    for (var i = 2020; i < 2051; i++) {
        y.appendChild(new Option(i));
    }
    for (var i = 1; i < 13; i++) {
        m.appendChild(new Option(i));
    }
    for (var i = 1; i < 32; i++) {
        d.appendChild(new Option(i));
    }
}

//任务二：当年、月列表框内容改变时，刷新日列表框
function ref(y, m, d) {
    var yv = y.value;
    var mv = m.value;
    var dv;
    switch (parseInt(mv)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dv = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dv = 30;
            break;
        case 2:
            if ((yv % 4 == 0 && yv % 100 != 0) || (yv % 400 == 0)) {
                dv = 29;
            } else {
                dv = 28;
            }
            break;
    }
    d.length = 0;//清空日列表
    for (var i = 1; i < dv + 1; i++) {
        d.appendChild(new Option(i));
    }
}
