window.dom = {
  //增
  // create(tagName){
  //   return document.createElement(tagName)
  // }
  create(string ){
    const container = document.createElement("template");//template标签可以容纳任意元素
    container.innerHTML = string.trim() ;//字符串两边去空客
    return container.content.firstChild;//第一次打contend字母打错了
  },
  after(node,node2){
    node.parentNode.insertBefore(node2,node.nextSibling)
  },
  before(node,node2){
    node.parentNode.insertBefore(node2,node)
  },
  append(parent,node){
    parent.appendChild(node)
  },
  wrap(node,parent) {
    dom.before(node,parent)
    dom.append(parent,node)
  },
  //删除
  remove(node){
    node.parentNode.removeChild(node)
    return node
  },
  empty(node){
    const {childNodes} = node
    //const childNodes = node.childNodes
    const array = []
    let x = node.firstChild
    while(x){
      array.push(dom.remove(node.firstChild))
      x = node.firstChild
    }
    return array
  },
  //改
  attr(node,name,value){//重载 根据参数不同写不同的代码
    if(arguments.length===3){
      node.setAttribute(name,value)}
    else if (arguments.length===2){
      return node.getAttribute(name)
    }
  },

  text(node,string){//适配
    if(arguments.length===2){ 
      if(`innerText` in node){
        node.innerText = string}//ie
      else{
        node.textContent= string}//chrome
  }else if (arguments.length===1){
      if(`innerText` in node){
        return node.innerText }//ie
      else{
        return node.textContent}//chrome
  }
  
},
  html(node,string){
    if(arguments.length===2){
    node.innerHTML = string
    }else if(arguments.length===1){
      return node.innerHTML}
  },
  style(node,name,value){
    if(arguments.length===3){
      //dom.style.(div,`color`,`red`)
      node.style[name] = value
    }else if(arguments.length===2){
      if(typeof name=== `string`){
        //dom.style(div.`color`)
        return node.style[name]
      }else if(name instanceof Object){
        //dom.style(div,{color:`red`})
        const object = name
        for(let key in object){
          //key:border/color
          //node.style.color = ...
          //node.style.border = ...
          node.style[key] = object[key]
        }
      }
    }
    
  },
  class: {
    add(node,className){
      node.classList.add(className)
    },
    remove(node,className){
      node.classList.remove(className)
    },
    contains(node,className){
      return node.classList.contains(className)
    }
  },
  on(node,eventName,fn){
    node.addEventListener(eventName,fn)
  },
  off(node,eventName,fn) {
    node.removeEventListener(eventName,fn)    
  },
//查
  find(selector,scope){
    return  (scope||document).querySelectorAll(selector)//返回数组
  },
  parent(node){
    return node.parentNode
  },
  children(node){
    return node.children
  },
  siblings(node){
    return Array.from(node.parentNode.children).filter(n=>n!==node)
  },
  next(node){
    let x = node.nextSibling 
    while(x&&x.nodeType===3){
      x=x.nextSibling
    }
    return x
  },
  previous(node){
    let x = node.previousSibling 
    while(x&&x.nodeType===3){
      x=x.previousSibling
    }
    return x
  },
  each(nodeList,fn){
    for(let i=0;i<nodeList.length;i++){
      fn.call(null,nodeList[i])
    }
  },
  index(node){
    const list=dom.children(node.parentNode)
    let i
    for(i=0;i<list.length;i++){
      if(list[i]===node){
        break
      }
    }
    return i
  }

   

};

 