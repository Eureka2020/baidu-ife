//1.对象转为数组
var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}

function objToArr(obj) {
    var arr = [];
    for(x in obj) {
        var a = [];
        a.push(x);
        for(y in obj[x]) {
            a.push(obj[x][y]);
        }
        arr.push(a);
    }
    console.log(arr);
}

objToArr(scoreObject); 

// var scoreArray = [
//     ["Tony", 95, 79, 68],
//     ……
// ];

//2.如上有一个用来存储多级菜单数据的数组，编写一个函数，将其转为如下的对象
var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

var menuObject = null;


