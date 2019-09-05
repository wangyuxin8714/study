(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{155:function(a,t,r){"use strict";r.r(t);var e=r(0),_=Object(e.a)({},function(){var a=this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"开发流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发流程")]),a._v(" "),r("h2",{attrs:{id:"图解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图解","aria-hidden":"true"}},[a._v("#")]),a._v(" 图解")]),a._v(" "),r("p",[r("img",{attrs:{src:"/study/project.jpg",alt:"项目流程"}})]),a._v(" "),r("h2",{attrs:{id:"需求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#需求","aria-hidden":"true"}},[a._v("#")]),a._v(" 需求")]),a._v(" "),r("h3",{attrs:{id:"评审"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#评审","aria-hidden":"true"}},[a._v("#")]),a._v(" 评审")]),a._v(" "),r("p",[a._v("召集需求涉及到的UI、开发、产品、测试人员整理业务流程，同步信息，明确分工\n明确需求目的，考虑当前需求设计是否可满足目的\n整理流程中如果涉及的其他人员，则召集商讨\n如需求设计上影响现有业务功能，应要求产品重新设计实现方案，然后重新评审")]),a._v(" "),r("h3",{attrs:{id:"注意事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),r("p",[a._v("业务流程同步：评审后重新梳理流程，存在疑问处及时找产品沟通\n周边需求依赖：评审功能与依赖功能并行开发，由于前置需求未完成导致当前需求时间成本被压缩\n埋点需求：提前与产品明确是否需要埋点\n造数据：提前了解测试数据制造的困难程度，预估测试时间---\x3e有些场景下的测试数据非常难造\n并发量：后端机器是否能够承担新需求下的并发量，如果无法承担的话必须给出后续方案\n自测：由于开发人员不予提供线上账号，因此自测也需要一名测试人员做线上回归测试\n兼容范围：pc端需明确要兼容哪些浏览器，移动端需明确android与ios兼容版本以及哪些移动端浏览器")]),a._v(" "),r("h2",{attrs:{id:"开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发")]),a._v(" "),r("h3",{attrs:{id:"评审-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#评审-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 评审")]),a._v(" "),r("h4",{attrs:{id:"原型图评审"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原型图评审","aria-hidden":"true"}},[a._v("#")]),a._v(" 原型图评审")]),a._v(" "),r("p",[a._v("向产品明确原型图在应用中所处位置以及入口的显示条件，确认原型图的正确性")]),a._v(" "),r("h4",{attrs:{id:"设计稿评审"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计稿评审","aria-hidden":"true"}},[a._v("#")]),a._v(" 设计稿评审")]),a._v(" "),r("p",[a._v("观察线上应用设计风格与当前设计稿风格是否一致(色调，字号，行高，对齐方式)是否一致\n观察设计稿中哪些部分需要切图\n判断设计稿中组件是否开发过，避免重复造轮子")]),a._v(" "),r("h4",{attrs:{id:"技术实现评审"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技术实现评审","aria-hidden":"true"}},[a._v("#")]),a._v(" 技术实现评审")]),a._v(" "),r("p",[a._v("如存在不易实现的功能，第一时间与产品沟通其他降级的实现方案")]),a._v(" "),r("h4",{attrs:{id:"排期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#排期","aria-hidden":"true"}},[a._v("#")]),a._v(" 排期")]),a._v(" "),r("p",[a._v("找到相关开发(前端，后端，app)商讨需求实现技术细节，明确产出接口格式时间与接口联调时间")]),a._v(" "),r("h4",{attrs:{id:"代码管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码管理","aria-hidden":"true"}},[a._v("#")]),a._v(" 代码管理")]),a._v(" "),r("p",[a._v("为防止合并代码时过多的代码冲突问题，建议使用分支时遵循以下标准\n每次push前先拉取线上分支代码\n开发新功能或者修复bug时一定要基于线上代码分支创建新分支，每个分支只对应一个jira号或一个待修复的bug问题\n分支名以f_(提交人)"),r("em",[a._v("(jira号)方式命名，对jira进行bug修复时使用f")]),a._v("(提交人)"),r("em",[a._v("fix")]),a._v("(bug内容)_(jira号)\ncommit格式规则：每行message描述一个功能点，message格式为$(操作)：$(描述)，操作一般为add,del,upd分别代表新增、删除、更新三种操作")]),a._v(" "),r("h3",{attrs:{id:"开发与调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发与调试","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发与调试")]),a._v(" "),r("p",[a._v("一般开发时不会从造轮子开始，项目中一般会有组件库供开发人员使用，但也会有一些老旧的项目中组件库版本较低，无法满足需求，\n因此在开发前一定要对项目现有组件进行评估，确认是否需要重新开发组件，确保进度如期进行。")]),a._v(" "),r("h4",{attrs:{id:"pc端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pc端","aria-hidden":"true"}},[a._v("#")]),a._v(" pc端")]),a._v(" "),r("p",[a._v("推荐优雅降级方式开发，先chrome，firefox，然后再针对兼容性较差的如ie等进行兼容处理")]),a._v(" "),r("h4",{attrs:{id:"移动端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#移动端","aria-hidden":"true"}},[a._v("#")]),a._v(" 移动端")]),a._v(" "),r("p",[a._v("移动端页面兼容性相较于pc端较好，但需真机调试，为方便调试移动页面，这里推荐使用spy-debugger来让pc端做代理，具体使用\n请查阅github文档。")]),a._v(" "),r("h2",{attrs:{id:"联调"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联调","aria-hidden":"true"}},[a._v("#")]),a._v(" 联调")]),a._v(" "),r("p",[a._v("和后端对接真实接口")]),a._v(" "),r("h2",{attrs:{id:"自测"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自测","aria-hidden":"true"}},[a._v("#")]),a._v(" 自测")]),a._v(" "),r("p",[a._v("自测环节与环境数据关联很大，需要前后端共同完成，如果自测所需数据涉及范围较广，则需要找齐相关人员协助上线")]),a._v(" "),r("h2",{attrs:{id:"提测"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提测","aria-hidden":"true"}},[a._v("#")]),a._v(" 提测")]),a._v(" "),r("p",[a._v("自测完成后开始进行真实环境测试")]),a._v(" "),r("h2",{attrs:{id:"bug反馈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bug反馈","aria-hidden":"true"}},[a._v("#")]),a._v(" bug反馈")]),a._v(" "),r("h2",{attrs:{id:"部署上线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署上线","aria-hidden":"true"}},[a._v("#")]),a._v(" 部署上线")]),a._v(" "),r("h2",{attrs:{id:"开发规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发规范","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发规范")]),a._v(" "),r("ul",[r("li",[a._v("命名规范（文件命名，变量，函数，class， id）   驼峰， - _  约定法")]),a._v(" "),r("li",[a._v("目录规范（目录如何建立） 划分目录结构   约定法")]),a._v(" "),r("li",[a._v("版本规范（）  挑选稳定版本 记录版本号  如果版本升级，需要总结版本差异")]),a._v(" "),r("li",[a._v("编码规范（注释，.... 语法）    eslint语法   JSDoc注释")]),a._v(" "),r("li",[a._v("适配规则（pc，移动）   分辨率调整")]),a._v(" "),r("li",[a._v("接口规范（成功，失败，状态码，安全）  和后端约定")])]),a._v(" "),r("h2",{attrs:{id:"项目搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" 项目搭建")]),a._v(" "),r("ul",[r("li",[a._v("vue-cli脚手架搭建  --  自定义项目用到的需求")]),a._v(" "),r("li",[a._v("选择ui框架")]),a._v(" "),r("li",[a._v("抽离公共逻辑，划分功能组件")]),a._v(" "),r("li",[a._v("目录构建")]),a._v(" "),r("li",[a._v("路由规划")]),a._v(" "),r("li",[a._v("ajax请求配置")]),a._v(" "),r("li",[a._v("mock生成")]),a._v(" "),r("li",[a._v("架构文档")]),a._v(" "),r("li",[a._v("方案整理（用到哪些技术，用到哪些特性）")])]),a._v(" "),r("h2",{attrs:{id:"代码管理-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码管理-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 代码管理")]),a._v(" "),r("ul",[r("li",[a._v("git & svn")]),a._v(" "),r("li",[a._v("分支管理")]),a._v(" "),r("li",[a._v("任务划分")]),a._v(" "),r("li",[a._v("功能排期")])]),a._v(" "),r("h1",{attrs:{id:"目的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目的","aria-hidden":"true"}},[a._v("#")]),a._v(" 目的")]),a._v(" "),r("p",[a._v("整理和规划，提升开发效率")])])}],!1,null,null,null);t.default=_.exports}}]);