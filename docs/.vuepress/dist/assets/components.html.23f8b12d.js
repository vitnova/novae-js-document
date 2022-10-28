import{_ as e,o as a,c as n,a as t}from"./app.89bfc664.js";const p={},o=t(`<h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h1><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><p>  与真实DOM对应的虚拟DOM模板组件。</p><ul><li><p>创建方式</p><p>您可通过<code>new Component(...)</code>、<code>Novae.createComponent(...)</code>以及通过JSX语法（需使用本框架实现JSX的babel插件）等方式进行创建，我们更建议您采用后两种方式进行创建。</p></li><li><p>参数列表</p><ul><li><p>未创建真实DOM</p><ol><li><code>tagName</code> (string): 标签名</li><li><code>attributes</code> (Object): 属性</li><li><code>...child</code> (Array&lt;Component | CustomComponent&gt; | ...Component | ...CustomComponent | ...string): 可以为基础组件或自定义组件的数组、也可以为基础组件或自定义组件组成的序列接在参数列表之后，也可以为字符串类型，将直接转换为标签名为Text的组件；以上所有组件都将成为该组件的子节点。</li></ol></li><li><p>由真实DOM创建</p><ol><li><code>dom</code> (HTMLElement | Text): 真实DOM</li><li><code>parent</code> (string | HTMLElement | Component | CustomComponent): 由CSS选择器确定的父节点、真实DOM以及虚拟DOM其中的一项</li></ol></li><li><p>由CSS选择器创建</p><ol><li><code>props</code> (Object): <code>props.selector</code>为原生DOM的CSS选择器字符串</li></ol></li></ul></li></ul><h3 id="tagname" tabindex="-1"><a class="header-anchor" href="#tagname" aria-hidden="true">#</a> tagName</h3><p>  组件标签名。</p><ul><li><p>类型</p><p>string</p></li></ul><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> attributes</h3><p>  组件属性。</p><ul><li><p>类型</p><p>Object</p></li></ul><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h3><p>  纯文本组件文本内容。</p><ul><li><p>类型</p><p>string</p></li></ul><h3 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> children</h3><p>  当前组件的子节点。</p><ul><li><p>类型</p><p>Array&lt;Component | CustomComponent&gt;</p></li></ul><h3 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> dom</h3><p>  组件对应的真实DOM。</p><ul><li><p>类型</p><p>HTMLElement | Text</p></li></ul><h3 id="hasdom" tabindex="-1"><a class="header-anchor" href="#hasdom" aria-hidden="true">#</a> hasDOM</h3><p>  判断组件是否已挂载</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>(boolean): <code>true</code>为已挂载，<code>false</code>为未挂载</p></li></ul><h2 id="customcomponent" tabindex="-1"><a class="header-anchor" href="#customcomponent" aria-hidden="true">#</a> CustomComponent</h2><p>  开发者自定义的模板组件，只会渲染其<a href="#template">template</a>方法所生成的内容，当前组件不会出现在DOM树之中。</p><ul><li><p>参数列表</p><ol><li><code>attributes</code> (Object): 属性</li><li><code>...child</code> (...Component | ...CustomComponent): 子组件</li></ol></li></ul><h3 id="attributes-1" tabindex="-1"><a class="header-anchor" href="#attributes-1" aria-hidden="true">#</a> attributes</h3><p>  自定义组件的属性</p><ul><li><p>类型</p><p>Object</p></li></ul><h3 id="children-1" tabindex="-1"><a class="header-anchor" href="#children-1" aria-hidden="true">#</a> children</h3><p>  当前组件的子节点，可采用<code>this.children</code>的方式在模板中调用。</p><ul><li><p>类型</p><p>Array&lt;Component | CustomComponent&gt;</p></li></ul><h3 id="component-1" tabindex="-1"><a class="header-anchor" href="#component-1" aria-hidden="true">#</a> component</h3><p>  当前组件实际渲染的模板组件，由<a href="#template">template</a>方法生成。</p><ul><li><p>类型</p><p>Component | CustomComponent</p></li></ul><h3 id="dom-1" tabindex="-1"><a class="header-anchor" href="#dom-1" aria-hidden="true">#</a> dom</h3><p>  组件对应的真实DOM。</p><ul><li><p>类型</p><p>HTMLElement | Text</p></li></ul><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><p>  自定义组件中和模板绑定的数据，数据变量名即为属性名，可采用<code>this.属性名</code>，在模板中直接调用。</p><ul><li><p>类型</p><p>Object</p></li></ul><h3 id="template" tabindex="-1"><a class="header-anchor" href="#template" aria-hidden="true">#</a> template</h3><p>  自定义组件获取模板的方法，创建新的模板类后需要进行覆写。</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>(Component | CustomComponent): 实际渲染的模板组件</p></li><li><p>默认值</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>请通过<span class="token constant">JSX</span>或工厂方法等方式，使用模板样式重写当前组件的template方法<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例子</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">TestComponent</span> <span class="token keyword">extends</span> <span class="token class-name">CustomComponent</span> <span class="token punctuation">{</span>
	<span class="token function">template</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 使用了JSX语法</span>
		<span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>测试<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gettemplate" tabindex="-1"><a class="header-anchor" href="#gettemplate" aria-hidden="true">#</a> getTemplate</h3><p>  得到当前组件通过<a href="#template">template</a>方法新创建的模板组件。</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>(Component | CustomComponent): 实际渲染时产生的模板组件</p></li><li><p>备注</p><ol><li>此方法不会将新创建的模板组件与当前自定义组件绑定。</li></ol></li></ul><h3 id="getcomponent" tabindex="-1"><a class="header-anchor" href="#getcomponent" aria-hidden="true">#</a> getComponent</h3><p>  得到当前组件真正渲染时产生的模板组件。</p><ul><li><p>参数列表</p><ol><li><code>create = true</code> (boolean): 为<code>true</code>时若当前自定义组件没有生成渲染时需要的模板组件，则创建后与当前组件绑定；为<code>false</code>时若不存在渲染的模板组件，也不创建</li></ol></li><li><p>返回值</p><p>(Component | CustomComponent | undefined): 实际渲染的模板组件</p></li></ul><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3><p>  渲染自定义模板组件，也就是将<a href="#template">template</a>方法所生成的组件进行渲染。</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>(Component | CustomComponent): 新渲染的模板组件</p></li><li><p>备注</p><ol><li>执行本函数的必要前提为已通过<code>Novae.render</code>方法或虚拟路由等方式挂载至真实的DOM树中，即本方法只做一个更新操作。</li></ol></li></ul><h3 id="beforecreate" tabindex="-1"><a class="header-anchor" href="#beforecreate" aria-hidden="true">#</a> beforeCreate</h3><p>  在自定义组件创建前的回调函数，此时组件内的成员变量为空。</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>空</p></li><li><p>例子</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">TestComponent</span> <span class="token keyword">extends</span> <span class="token class-name">CustomComponent</span> <span class="token punctuation">{</span>
	<span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 执行您的业务逻辑</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="created" tabindex="-1"><a class="header-anchor" href="#created" aria-hidden="true">#</a> created</h3><p>  自定义组件创建后的回调函数，此时组件内的成员变量<code>attributes</code>、<code>data</code>、<code>children</code>已创建完毕。</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>空</p></li></ul><h3 id="beforemount" tabindex="-1"><a class="header-anchor" href="#beforemount" aria-hidden="true">#</a> beforeMount</h3><p>  自定义组件挂载前的回调函数，此时组件内的成员变量<code>attributes</code>、<code>children</code>、<code>data</code>、旧<code>component</code>均可访问。</p><ul><li><p>参数列表</p><ol><li><code>patches</code> (Patch): 组件挂载至DOM树中所需的变更步骤序列</li></ol></li><li><p>返回值</p><p>空</p></li></ul><h3 id="mounted" tabindex="-1"><a class="header-anchor" href="#mounted" aria-hidden="true">#</a> mounted</h3><p>  自定义组件挂载后的回调函数，此时组件内的成员变量<code>attributes</code>、<code>children</code>、<code>data</code>、新<code>component</code>均可访问。</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>空</p></li></ul><h3 id="beforeupdate" tabindex="-1"><a class="header-anchor" href="#beforeupdate" aria-hidden="true">#</a> beforeUpdate</h3><p>  自定义组件更新前的回调函数，此时组件内的成员变量<code>attributes</code>、<code>children</code>、<code>data</code>、旧<code>component</code>均可访问。</p><ul><li><p>参数列表</p><ol><li><code>patches</code> (Patch): 组件挂载至DOM树中所需的变更步骤序列</li></ol></li><li><p>返回值</p><p>空</p></li></ul><h3 id="updated" tabindex="-1"><a class="header-anchor" href="#updated" aria-hidden="true">#</a> updated</h3><p>  自定义组件更新后的回调函数，此时组件内的成员变量<code>attributes</code>、<code>children</code>、<code>data</code>、旧<code>component</code>均可访问。</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>空</p></li></ul><h3 id="beforedispose" tabindex="-1"><a class="header-anchor" href="#beforedispose" aria-hidden="true">#</a> beforeDispose</h3><p>  自定义组件销毁前的回调函数。</p><ul><li><p>参数列表</p><ol><li><code>patches</code> (Patch): 新组件挂载至DOM树中所需的变更步骤序列</li></ol></li><li><p>返回值</p><p>空</p></li></ul><h3 id="disposed" tabindex="-1"><a class="header-anchor" href="#disposed" aria-hidden="true">#</a> disposed</h3><p>  自定义组件销毁后的回调函数。</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>空</p></li></ul><h2 id="statelesscomponent" tabindex="-1"><a class="header-anchor" href="#statelesscomponent" aria-hidden="true">#</a> StatelessComponent</h2><p>  无状态组件，该组件继承于<a href="#CustomComponent">CustomComponent</a>类。</p><h3 id="render-1" tabindex="-1"><a class="header-anchor" href="#render-1" aria-hidden="true">#</a> render</h3><p>  自定义组件销毁后的回调函数。</p><ul><li><p>参数列表</p><p>空</p></li><li><p>返回值</p><p>(Component | CustomComponent | <code>false</code>): 新渲染的模板组件，<code>false</code>表示该组件已经渲染过，故不再渲染</p></li></ul><h2 id="manualstatefulcomponent" tabindex="-1"><a class="header-anchor" href="#manualstatefulcomponent" aria-hidden="true">#</a> ManualStatefulComponent</h2><p>  单向绑定数据的有状态组件，该组件继承于<a href="#CustomComponent">CustomComponent</a>类。</p><h3 id="render-2" tabindex="-1"><a class="header-anchor" href="#render-2" aria-hidden="true">#</a> render</h3><p>  更新组件内容方法。</p><ul><li><p>参数列表</p><ol><li><code>data</code> (Object): 与模板绑定的数据中变更项，属性名为数据变量名，属性值为对应的变量内容</li></ol></li><li><p>返回值</p><p>(Component | CustomComponent): 新渲染的模板组件</p></li></ul><h2 id="autostatefulcomponent" tabindex="-1"><a class="header-anchor" href="#autostatefulcomponent" aria-hidden="true">#</a> AutoStatefulComponent</h2><p>  双向绑定数据的有状态组件，该组件继承于<a href="#CustomComponent">CustomComponent</a>类，直接修改与模板绑定的数据值即可更新界面。</p>`,92),l=[o];function i(d,s){return a(),n("div",null,l)}const c=e(p,[["render",i],["__file","components.html.vue"]]);export{c as default};
