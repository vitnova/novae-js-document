import{_ as o,r as c,o as i,c as l,b as n,d as s,e as t,w as e,a as p}from"./app.89bfc664.js";const u={},r=n("h1",{id:"服务器端渲染",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务器端渲染","aria-hidden":"true"},"#"),s(" 服务器端渲染")],-1),d=n("h2",{id:"前端配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前端配置","aria-hidden":"true"},"#"),s(" 前端配置")],-1),k=n("p",null,[s("  首先您需要导出框架入口提供的"),n("code",null,"SSR"),s("实例。")],-1),v=n("code",null,"loadComponents",-1),m=n("code",null,"beforeCreate",-1),b=n("code",null,"created",-1),h=n("code",null,"DebugTool.isInNode",-1),g=p(`<h2 id="后端配置" tabindex="-1"><a class="header-anchor" href="#后端配置" aria-hidden="true">#</a> 后端配置</h2><p>  首先您需要在Node.js环境中引入服务器端渲染功能模块，如下所示。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">SSR</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;novae-js/dist/server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h3><p>  初始化服务器端渲染功能方法。</p><ul><li><p>参数列表</p><ol><li><code>options</code> (Object): 配置项，其中必须传入前述打包好的前端js文件作为<code>browser</code>属性，可采用<code>require</code>方式引入</li></ol></li><li><p>返回值</p><p>空</p></li><li><p>备注</p><ol><li>欲使用服务器端渲染功能，此方法必须被运行。</li></ol></li></ul><h3 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> router</h3><p>  初始化虚拟路由方法。</p>`,8),_=n("p",null,"参数列表",-1),q=n("code",null,"router",-1),f=n("li",null,[n("p",null,"返回值"),n("p",null,"空")],-1),y=p(`<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3><p>  渲染HTML模板的方法。</p><ul><li><p>参数列表</p><ol><li><code>url</code> (string): 虚拟路由路径，一般由Web框架路由提供</li><li><code>templateUrl</code> (string): 打包完毕的HTML模板路径</li><li><code>options = {}</code> (Object): 配置项</li><li><code>onsuccess</code> (Function(string)): 成功渲染模板回调，参数列表第一项为渲染后的HTML模板串，可以直接用以发送响应报文</li><li><code>?onerror</code> (?Function(NovaeError)): 失败渲染模板回调，参数列表的第一项为错误属性</li></ol></li><li><p>返回值</p><p>空</p></li><li><p>options配置</p><p>如您需要在HTML模板中指定位置渲染内容，您首先需要在模板中定义渲染名，以此种方式<code>{{ 渲染名称 }}</code>，然后在<code>options</code>的<code>injects</code>属性中建立属性名为前方渲染名称、属性为渲染组件类的对象，这样框架就会将渲染的内容替换前述的<code>{{ 渲染名称 }}</code>。</p></li><li><p>例子</p></li></ul><p>  以使用<code>express</code>Web框架举例。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">SSR</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;novae-js/dist/server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">,</span>
	  browser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;../../dist/ssr&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	  express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	  app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	  port <span class="token operator">=</span> <span class="token number">233</span><span class="token punctuation">;</span>

<span class="token comment">// 初始化服务器端渲染功能</span>
<span class="token constant">SSR</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">browser</span><span class="token operator">:</span> browser <span class="token comment">// 打包完毕的本框架前端js</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 加载路由</span>
<span class="token constant">SSR</span><span class="token punctuation">.</span><span class="token function">router</span><span class="token punctuation">(</span>browser<span class="token punctuation">.</span>routers<span class="token punctuation">)</span>

<span class="token comment">// 路由优先解析静态资源</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&quot;../../dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 路由处理访问模板</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// 调用本框架的服务器端渲染功能，</span>
	<span class="token comment">// 参数项分别为路由地址、模板路径、配置项、成功/失败渲染回调</span>
	<span class="token constant">SSR</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>originalUrl<span class="token punctuation">,</span> <span class="token string">&quot;../../dist/ssr.html&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
	<span class="token punctuation">(</span><span class="token parameter">out</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
		   <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>content <span class="token operator">===</span> <span class="token string">&quot;Route Not Found&quot;</span><span class="token punctuation">)</span>
			res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span>
			   <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">else</span>
			res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
			   <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 监听端口</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>备注</p><ol><li>使用虚拟路由时，路由对应组件渲染的串会替换HTML模板中<code>{{ novae_ssr_router }}</code>标识符，请在相应HTML模板中预先定义好。</li></ol></li></ul><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><p>  在前端接收到服务器端渲染的内容时，会适时转换为单页应用模式，此过程会将后端使用<code>script</code>语句在<code>window</code>上挂载的<code>NOVAE_SSR_DATA</code>属性进行解析、以及恢复状态，该属性结构如下图所示。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token constant">NOVAE_SSR_DATA</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token string-property property">&quot;router&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&quot;router&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;About&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 路由信息</span>
		<span class="token string-property property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AboutComponent&quot;</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;others&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  完成解析后，您可以在<code>Novae.ssrComponents</code>中获取到实例化后恢复状态的组件，结构如下所示。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;router&quot;</span><span class="token operator">:</span> AboutComponent<span class="token punctuation">,</span> <span class="token comment">// 实例化后的对应组件</span>
	<span class="token string-property property">&quot;others&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 属性名为在服务器配置的render方法中自定义的渲染名，属性为对应组件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  另外从后端恢复状态的模板组件，其<code>beforeCreate</code>与<code>created</code>生命周期回调均在服务器端执行，前端不再重复执行。</p>`,12);function j(x,S){const a=c("RouterLink");return i(),l("div",null,[r,d,k,n("p",null,[s("  并在"),t(a,{to:"/documents/novae.html#init"},{default:e(()=>[s("框架初始化配置项")]),_:1}),s("中加入"),v,s("对象，其中需要定义由服务器端渲染转换为单页应用时，需要被实例化状态的组件类。")]),n("p",null,[s("  如您要在服务端使用虚拟路由，请将路由条目即"),t(a,{to:"/documents/router.html#%E9%85%8D%E7%BD%AE%E9%A1%B9"},{default:e(()=>[s("虚拟路由配置项")]),_:1}),s("构成的数组以自定义的形式导出。")]),n("p",null,[s("  因模板组件的"),m,s("与"),b,s("生命周期回调均在服务器端执行，您可以在对应回调中使用"),t(a,{to:"/documents/utils.html#isinnode"},{default:e(()=>[h]),_:1}),s("方法，判断代码环境，对服务器端采取不同获取数据、以及执行逻辑的策略。并且与模板绑定的数据您可以依旧定义于模板组件的data方法中，服务器端会将状态发送至前端，并进行恢复。")]),g,n("ul",null,[n("li",null,[_,n("ol",null,[n("li",null,[q,s(" (Array): 路由条目，一般由打包完毕的前端js文件导出，开发者自定义导出名，确保导出项为"),t(a,{to:"/documents/router.html#%E9%85%8D%E7%BD%AE%E9%A1%B9"},{default:e(()=>[s("虚拟路由配置项")]),_:1}),s("构成的数组即可")])])]),f]),y])}const A=o(u,[["render",j],["__file","ssr.html.vue"]]);export{A as default};
