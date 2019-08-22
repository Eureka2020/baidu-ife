# 

## 核心流程

发现用户输入->获取用户输入内容->生成提示框提示内容->进行提示

### 1. 发现用户输入

- **选择事件监听用户输入**

- **事件分析**  

  按下键盘-触发keypress和keydown-字符输入-松开键盘-触发keyup，所以keypress和keydown监听内容无法及时反馈最近一次变化；  

  监听内容变化一般用oninput和onchange，区别在于oninput事件在元素值发生变化是立即触发，onchange在元素失去焦点时触发，因此选择**oninput事件**

- **关于事件监听的创建**

  ``` Javascript
  addEventListener('input', function() {});
   ```
   
  ``` Javascript
  addEventListener('input', functionName);
  
  function functionName() {
  }
   ```
  传入匿名函数或者将函数放在外边也可以，但传入的如果不是匿名函数，需要传入是functionName，而不是functionName()
  
### 2. 获取用户输入(包括trim处理)

- **半角空格和全角空格的处理**

  ``` Javascript
  str.charAt(i) !== " " && str.charCodeAt(i) !== 12288
  ```
  
  前者判断半角空格，后者判断全角空格
  
 - **str.slice(index, index)返回的是长度为0的空字符串**
 
 - **trim()删除字符串两边的空格**
 
  ``` Javascript
          function trim(str) {
            var start = 0;
            var end = 0;
            // trim处理
            var tar = true;
            for(var i = 0; i < str.length; i++) {
                if(str.charAt(i) !== " " && str.charCodeAt(i) !== 12288) {
                    start = i;
                    tar = false;
                    break;
                }
            }

            for(var j = str.length - 1; j >= 0; j--) {
                if(str.charAt(j) !== " " && str.charCodeAt(i) !== 12288) {
                    end = j;
                    break;
                }
            }
            //需要另外考虑全是空格'    '的情况
            if(tar) {
                return '';
            }

            return str.slice(start, end+1);
        }  
  ```
  
    trim()时要考虑特殊情况'   '，其特点是两个for循环都没执行，考虑加入一个变量tar进行区分；
    只要进行了for循环，就将tar设置为false，这样可以实现'   '和'  a   '的区分。
    
### 3. 生成提示框的内容

- **生成提示框内容**
  
  Step1. 判断input中有无@，如有@，需要将input变成@前的字符
  
  Step2. 遍历postfixlist，把用户输入和每一个postfix进行结合成每一个li
  

- **将提示框内容添加到ul中**

  **注意：在生成提示内容时，对于特殊字符应该进行转义编码，然后在把鼠标点击的提示框内容转回输入框时进行解码。**
  
  ``` Javascript
        //用浏览器内部转换器实现str转码
        function enCode(str){ 
            var temp = document.createElement ("div");
            (temp.textContent != undefined) ? temp.textContent = str : temp.innerText = str;
            var output = temp.innerHTML;
            temp = null;
            return output;
        }

       //用浏览器内部转换器实现str解码
        function deCode(str) {
           var temp = document.createElement("div");
           temp.innerHTML = str;
           var output = (temp.textContent != undefined) ? temp.textContent : temp.innerText;
           temp = null;
           return output;  
        }
  ```

### 4.由输入的内容控制email-sug-wrapper的状态，输入不为空格才进行后缀生成







 
