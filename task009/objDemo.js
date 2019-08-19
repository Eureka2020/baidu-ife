var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

//1.假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    findIdByName1(name, tree);
}

function findIdByName1(name, tree) {
    if(tree.name === name) {
        console.log(tree.id)
    }
 
    if(tree.left !== undefined) {
        findIdByName1(name, tree.left);
    }
 
    if(tree.right !== undefined) {
        findIdByName1(name, tree.right);
    }
}

findIdByName("Carl");

//2.假设id和name均不会重复，根据输入id找到对应的name
var result;
function findNameById(id, tree) {
    if(tree.id === id) {
        result = tree.name;
    }
    if(tree.left !== undefined) {
        result = findNameById(id, tree.left);
    }
    if(tree.right !== undefined) {
        result = findNameById(id, tree.right);
    }
    return result;
}

console.log(findNameById(10, tree));

//3.把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(tree) {
    if(tree !== undefined) {
    console.log(tree.name);
    }

    if(tree.left !== undefined) {
        getListWithDLR(tree.left);
    }

    if(tree.right !== undefined) {
        getListWithDLR(tree.right);
    }
    
}
getListWithDLR(tree);

//4.把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR(tree) {
    if(tree.left !== undefined) {
        getListWithLDR(tree.left);
    }
    if(tree !== undefined) {
        console.log(tree.name);
    }
    if(tree.right !== undefined) {
        getListWithLDR(tree.right);
    }
}
getListWithLDR(tree);

//5.把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD(tree) {
    if(tree.left !== undefined) {
        getListWithLRD(tree.left);
    }
    if(tree.right !== undefined) {
        getListWithLRD(tree.right);
    }
    if(tree !== undefined) {
        console.log(tree.name);
    }
}
getListWithLRD(tree);
