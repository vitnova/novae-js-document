import{_ as a,r as d,o as p,c as r,b as e,d as o,e as l,w as i,a as n}from"./app.89bfc664.js";const c={},s=n('<h1 id="全局方法" tabindex="-1"><a class="header-anchor" href="#全局方法" aria-hidden="true">#</a> 全局方法</h1><p>  全局方法指的是从框架中导入到项目中的<code>Novae</code>实例。</p><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h2><p>  初始化框架方法。</p><ul><li><p>参数列表</p><ol><li><code>options = {}</code> (Object): 配置项</li></ol></li><li><p>返回值</p><p>空</p></li></ul><h2 id="createcomponent" tabindex="-1"><a class="header-anchor" href="#createcomponent" aria-hidden="true">#</a> createComponent</h2><p>  创建组件的工厂方法。</p>',7),h=e("p",null,"参数列表",-1),u=e("li",null,[e("p",null,"实例化自定义组件"),e("ol",null,[e("li",null,"(class | Function): 自定义组件的构造函数")])],-1),m=e("p",null,"使用Component创建",-1),_=e("li",null,[e("p",null,"返回值"),e("p",null,"(CustomComponent | Component): 创建的组件")],-1),C=n('<h2 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h2><p>  将<code>vNode</code>组件挂载至<code>parentVnode</code>下。</p><ul><li><p>参数列表</p><ol><li><code>vNode</code> (CustomComponent | Component): 挂载的组件</li><li><code>parentNode = 根元素</code> (CustomComponent | Component | string): 已存在于DOM树中的组件，或真实DOM的CSS选择器字符串；</li></ol></li><li><p>返回值</p><p>(CustomComponent | Component): 挂载的组件，即vNode</p></li></ul><h2 id="addeventlistener" tabindex="-1"><a class="header-anchor" href="#addeventlistener" aria-hidden="true">#</a> addEventListener</h2><p>  监听框架事件方法。</p><ul><li><p>参数列表</p><ol><li><code>name</code> (string): 事件名</li><li><code>fn</code> (Function): 绑定的函数方法</li></ol></li><li><p>返回值</p><p>(boolean): <code>true</code>为成功，<code>false</code>为失败</p></li></ul><h2 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> router</h2>',7),f=n('<ul><li><p>参数列表</p><ol><li><code>options</code> (Object): 路由配置项</li></ol></li><li><p>返回值</p><p>空</p></li></ul><h2 id="getrootdom" tabindex="-1"><a class="header-anchor" href="#getrootdom" aria-hidden="true">#</a> getRootDOM</h2><p>  获取开发者指定的根元素DOM。</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>(HTMLElement): 根元素DOM</p></li></ul><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h2><p>  服务器端渲染实例化的组件项，开发者设定后也可以从该方法获取，以进行实例化或其他用途。</p><ul><li><p>类型</p><p>(Object&lt;string, CustomComponent&gt;): 可实例化的组件项</p></li></ul><h2 id="ssrcomponents" tabindex="-1"><a class="header-anchor" href="#ssrcomponents" aria-hidden="true">#</a> ssrComponents</h2><p>  服务器端渲染实例化的组件项</p><ul><li><p>类型</p><p>(Object&lt;string, CustomComponent&gt;): 从服务器端创建，前端恢复状态的组件项</p></li><li><p>备注</p><ol><li>此项仅在服务器端渲染功能开启的情况下存在，若未开启则为<code>undefined</code>。</li></ol></li></ul>',10);function b(x,v){const t=d("RouterLink");return p(),r("div",null,[s,e("ul",null,[e("li",null,[h,e("ul",null,[u,e("li",null,[m,e("p",null,[o("参数列表同"),l(t,{to:"/documents/utils.html#component"},{default:i(()=>[o("Component")]),_:1})])])])]),_]),C,e("p",null,[o("  初始化虚拟路由，配置方法请见"),l(t,{to:"/documents/router.html#%E9%85%8D%E7%BD%AE%E9%A1%B9"},{default:i(()=>[o("虚拟路由配置")]),_:1}),o("。")]),f])}const N=a(c,[["render",b],["__file","novae.html.vue"]]);export{N as default};
