import{_ as s,r as e,o as t,c,a as n,d as o,b as p,e as i}from"./app-b96eb66f.js";const l={},r=i(`<h1 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h1><p>在javaScript中的变量作用域分为全局变量和局部变量；通过javaScript的作用域链，函数内部可以直接读取全局变量，但是函数外面无法读取函数内部的变量。</p><p><strong>闭包就是能够读取其他函数内部变量的函数。</strong></p><p>在函数A内部再定义一个函数B，读取外部函数A的变量，最后再把内部的函数B返回出去，即可在函数A外面读取函数A内部的变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> aaa <span class="token operator">=</span> <span class="token string">&#39;A aaa&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aaa<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token constant">B</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// A aaa</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="闭包的作用" tabindex="-1"><a class="header-anchor" href="#闭包的作用" aria-hidden="true">#</a> 闭包的作用</h2><h4 id="读取函数内部的变量" tabindex="-1"><a class="header-anchor" href="#读取函数内部的变量" aria-hidden="true">#</a> 读取函数内部的变量</h4><h4 id="让变量保持在内存中-不被gc掉" tabindex="-1"><a class="header-anchor" href="#让变量保持在内存中-不被gc掉" aria-hidden="true">#</a> 让变量保持在内存中，不被GC掉</h4><h2 id="使用闭包的注意点" tabindex="-1"><a class="header-anchor" href="#使用闭包的注意点" aria-hidden="true">#</a> 使用闭包的注意点</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。</p></div>`,11),u={href:"https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const a=e("ExternalLinkIcon");return t(),c("div",null,[r,n("p",null,[n("a",u,[o("学习Javascript闭包（Closure） - 阮一峰的网络日志"),p(a)])])])}const m=s(l,[["render",d],["__file","4-闭包.html.vue"]]);export{m as default};
