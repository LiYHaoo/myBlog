(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{202:function(t,a,s){t.exports=s.p+"assets/img/p1-1.98c4d2fa.png"},203:function(t,a,s){t.exports=s.p+"assets/img/p1-2.c724b3b3.png"},204:function(t,a,s){t.exports=s.p+"assets/img/p1-3.212d2fce.png"},205:function(t,a,s){t.exports=s.p+"assets/img/p1-4.8c5f6216.png"},206:function(t,a,s){t.exports=s.p+"assets/img/p1-5.b268fd91.png"},214:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"内存空间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内存空间"}},[t._v("#")]),t._v(" 内存空间")]),t._v(" "),n("h4",{attrs:{id:"一、栈数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、栈数据结构"}},[t._v("#")]),t._v(" 一、栈数据结构")]),t._v(" "),n("p",[t._v("与c/c++不同，JavaScript中并没有严格意义上区分栈内存与堆内存。因此我们就可以简单除暴的理解为JavaScript的所有数据都保存在堆内存中。但是在某些场景，我们仍然需要基于堆栈数据结构的思维来实现一些功能，比如JavaScript的执行上下文。执行上下文的执行顺序借用了栈数据结构的存取方式（函数调用栈）。因此理解栈数据结构的原理与特点十分重要。")]),t._v(" "),n("p",[t._v("要简单理解栈的存取方式，我们可以通过类比乒乓球盒子来分析。\n"),n("img",{attrs:{src:s(202),alt:"p1"}})]),t._v(" "),n("p",[t._v("这种乒乓球的存放方式与栈中存取数据的方式如出一辙。处于盒子中最顶层的乒乓球5，它一定是最后放进去，但可以最先被使用。而我们想要使用底层的乒乓球1，就必须将上面的4个乒乓球取出来，让乒乓球1处于盒子顶层。这就是栈空间"),n("strong",[t._v("先进后出，后进先出")]),t._v("的特点 。图中已经详细的表明了栈空间的存储原理。")]),t._v(" "),n("h4",{attrs:{id:"二、堆数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、堆数据结构"}},[t._v("#")]),t._v(" 二、堆数据结构")]),t._v(" "),n("p",[t._v("堆数据结构是一种树状结构。它的存取数据的方式，则与书架和书非常相似。")]),t._v(" "),n("p",[t._v("书虽然也整齐的存放在书架上，但是我们只要知道书的名字，我们就可以很方便的取出我们想要的书，而不用想从乒乓球盒子里取乒乓球一样，非得将上面的所有乒乓球拿出来才能取到中间的某一个乒乓球。好比在JSON格式的数据中，我们存储的"),n("code",[t._v("key-value")]),t._v("是可以无序的，因此顺序的不同并不影响我们的使用，我们只需要关心书的名字。")]),t._v(" "),n("h4",{attrs:{id:"三、队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、队列"}},[t._v("#")]),t._v(" 三、队列")]),t._v(" "),n("p",[t._v("在JavaScript中，理解队列数据结构的目的主要是清晰的明白事件循环（Event loop）的机制到底是怎么回事。")]),t._v(" "),n("p",[t._v("队列是中**先进先出（FIFO）**的数据结构。正如排队安检一样，排在队伍前面的人一定是最先过安检的人。用一下的图示可以清楚的理解队列的原理。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(203),alt:"p2"}})]),t._v(" "),n("h4",{attrs:{id:"四、变量对象与基础数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、变量对象与基础数据类型"}},[t._v("#")]),t._v(" 四、变量对象与基础数据类型")]),t._v(" "),n("p",[t._v("JavaScript的执行上下文生成之后，会创建一个叫做变量对象的特殊对象，JavaScript的基础数据类型往往都会保存在变量对象中。")]),t._v(" "),n("blockquote",[n("p",[t._v("严格意义上来说，变量对象也是存放于堆内存中，但是由于变量对象的特殊职能，我们在理解时仍然需要将其堆内存区分开来")])]),t._v(" "),n("p",[t._v("基础数据类型都是一些简单的数据段，JavaScript中有5种基础数据类型，分别是"),n("code",[t._v("Undefined Null Boolean Number String")]),t._v("。基础数据类型都是按值访问，因为我们可以直接操作保存在变量中的实际的值。")]),t._v(" "),n("blockquote",[n("p",[t._v("ES6中新加入了一种基础数据类型Symbol，可以先不用考虑它")])]),t._v(" "),n("h4",{attrs:{id:"五、引用数据类型与堆内存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、引用数据类型与堆内存"}},[t._v("#")]),t._v(" 五、引用数据类型与堆内存")]),t._v(" "),n("p",[t._v("与其他语言不同，JS的引用数据类型，比如数组Array，它们值的大小是不固定的。引用数据类型的值是保存在堆内存中的对象。JavaScript不允许直接访问堆内存中的位置，因此我们不能直接操作对象的堆内存空间。在操作对象时，实际上是在对操作对象的引用而不是实际的对象。因此，引用类型的值都是按引用访问的。这里的引用，我们可以理解为保存在变量中的一个地址，该地址与堆内存的实际值相关联。")]),t._v(" "),n("p",[t._v("为了更好的搞懂变量对象与堆内存，我们可以结合一下例子与图解进行理解。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is str'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量对象")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量b存在变量对象中，{m: 20} 作为对象存放在堆内存中")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量c存在变量对象中，[1, 2, 3] 作为对象存放在堆内存中")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(204),alt:"p2"}})]),t._v(" "),n("p",[t._v("因此当我们要访问堆内存中的引用数据类型时，实际上我们首先是从变量对象中获取了该对象的地址应用（或者地址指针），然后再从堆内存中取得我们需要的数据。")]),t._v(" "),n("p",[t._v("在前端面试中我们常常会遇到这样一个类似的题目")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo01.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这时a的值是多少")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo02.js ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这时m.a的值是多少")]),t._v("\n")])])]),n("p",[t._v("在变量对象中的数据发生复制行为时，系统会自动为新的变量分配一个新值。复制之后，a和b虽然值都等于20，但是他们其实已经是相互独立互不影响的值了。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(205),alt:"p4"}})]),t._v(" "),n("p",[t._v("在demo2中，我们通过"),n("code",[t._v("var n = m")]),t._v("执行一次复制引用类型的操作。应用类型的复制同样也会为新的变量自动 分配一个新的值保存在变量对象中，但不同的是，这个新的值，仅仅只是应用类型的一个地址指针。当地址指针相同时，尽管他们相互独立，但是在变量中访问到的具体对象实际上是同一个。如图所示")]),t._v(" "),n("p",[n("img",{attrs:{src:s(206),alt:"p5"}})]),t._v(" "),n("h4",{attrs:{id:"六、内存空间管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、内存空间管理"}},[t._v("#")]),t._v(" 六、内存空间管理")]),t._v(" "),n("p",[t._v("因为JavaScript具有自动垃圾收集机制，所以在开发时好像不用关心内存的使用问题，内存的分配与回收都全部实现了自动管理。但是根据我自己的开发经验，了解内存机制有助于自己清晰的认识到自己写的代码在执行过程中发生过什么，从而写出性能更加优秀的代码。")]),t._v(" "),n("p",[t._v("JavaScript的内存生命周期")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 分配你所需的内存\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 使用分配到的内存（读、写）\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 不需要时将其释放、归还\n")])])]),n("p",[t._v("为了便于理解，我们使用一个简单的例子来解释这个周期。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在内存中给数值变量分配空间")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用内存")]),t._v("\na "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用完毕之后，释放内存空间")]),t._v("\n\n")])])]),n("p",[t._v("第一步和第二步我们都很好理解，JavaScript在定义变量时就完成了内存分配。第三步释放内存空间则是我们需要重点理解的一个点。")]),t._v(" "),n("p",[t._v("JavaScript有自动垃圾收集机制，那么这个自动垃圾收集机制的原理是什么呢？其实很简单，就是找出那些不再继续使用的值，然后释放其占用的内存。垃圾收集器会每隔固定的时间段就执行一次释放操作。")]),t._v(" "),n("p",[t._v("在JavaScript中，最常用的是通过"),n("strong",[t._v("标记清除")]),t._v("的算法来找到哪些对象是不再继续使用的，因此"),n("code",[t._v("a = null")]),t._v("其实仅仅只是做了一个释放引用的操作，让 a 原本对应的值失去引用，脱离执行环境，这个值会在下一次垃圾收集器执行操作时被找到并释放。而在适当的时候解除引用，是为页面获得更好性能的一个重要方式。")]),t._v(" "),n("blockquote",[n("p",[t._v("在局部作用域中，当函数执行完毕，局部变量也就没有存在的必要了，因此垃圾收集器很容易做出判断并回收。但是全局变量什么时候需要自动释放内存空间则很难判断，因此在我们的开发中，需要尽量避免使用全局变量。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);