//将下面数组分别按从大到小以及从小到大进行排序后在console中输出
var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
console.log(arr.sort(function(a, b) {
    return a - b;
}));
console.log(arr.sort(function(a, b) {
    return b - a;
}));

//将下面数组分别按字母顺序a-z及z-a进行排序，在console中输出
var arr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
arr.sort(compare);
console.log(arr);

function compare(a, b) {
    if (a > b ) {           // 按某种排序标准进行比较, a 小于 b
      return -1;
    }
    if (a < b ) {
      return 1;
    }
    // a must be equal to b
    return 0;
}

//（使用映射改善排序）将下面的二维数组，按照每个元素中第二个数从大到小的顺序进行排序输出，输出结果应该为：
var arr = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
var mapped = arr.map(function(el, i) {
    return { index: i, value: el};
})
console.log(mapped);
mapped.sort(function(a, b) {
    return a.value[1] - b.value[1];
})

var result = mapped.map(function(el) {
    return arr[el.index];
});

console.log(result);

//将下面数组分别按元素对象的value值从小到大进行排序后输出
var arr = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];

var mapped = arr.map(function(el, i) {
    return { index: i, value : el};
});
console.log(mapped);
mapped.sort(function(a, b) {
    return a.value - b.value;
});
var result = mapped.map(function(el) {
    return arr[el.index];
});

console.log(result);
