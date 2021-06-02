// const div = dom.create("div")
// console.log(div)
 const div = dom.create("<div>newDiv</div>")
 console.log(div )

 //dom.after(test,div)
 dom.before(test,div)

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test,div3)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test,'title','Hi,I am Frank')
const title = dom.attr(test,'title')//用函数获取test节点的title属性并赋值给变量title
console.log(`title:${title}`)

dom.text(test,`你好,这是新的内容`)
dom.text(test)

dom.style(test,{border: `1px solid red`,color:`blue`})
console.log(dom.style(test,`border`))//第二个参数为字符串则是读它的值
dom.style(test,`border`,`1px solid black`)//写

dom.class.add(test,`red`)
dom.class.add(test,`blue`)
dom.class.remove(test,`red`)
console.log(dom.class.contains(test,`blue`))

const fn = ()=>{
    console.log(`点击了`)
}
dom.on(test,`click`,fn)
dom.off(test,`click`,fn)

const testDiv = dom.find(`#test`)[0]//默认在document里找test
const test2 = dom.find(`#test2`)[0]
console.log(dom.find(`.red`,test2)[0])//在范围里面找第二个参数
console.log(testDiv)

console.log(dom.parent(test))

console.log(dom.siblings(dom.find(`#e2`)[0]))

console.log(dom.next(dom.find(`#e2`)[0]))
console.log(dom.previous(dom.find(`#e2`)[0]))

const t = dom.find(`#travel`)[0]
dom.each(dom.children(t),(n)=>dom.style(n,`color`,`red`))//用n占位置

console.log(dom.index(e2))