var timer = setInterval(function() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var weekday = getWeekday(d);
    month = check(month);
    day = check(day);
    h = check(h);
    m = check(m);
    s = check(s);
    console.log(year + '年' + month + '月' + day + '日' + weekday + h + ':' + m + ":" + s);
},1000);


//根据日期返回这一天是星期几
function getWeekday(d) {
    var weekday = new Array(7);
    weekday[0] = "星期日";
    weekday[1] = "星期一";
    weekday[2] = "星期二";
    weekday[3] = "星期三";
    weekday[4] = "星期四";
    weekday[5] = "星期五";
    weekday[6] = "星期六";
    return weekday[d.getDay()];
}

//个位数补零
function check(i) {
    if(i < 10) {
        i = '0' + i;
    } 
    return i;
}
var d = new Date();
console.log(d);
