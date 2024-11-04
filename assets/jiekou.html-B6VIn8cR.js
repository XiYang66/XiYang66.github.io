import{_ as n,c as a,a as e,o as p}from"./app-5u2AVv_J.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h2 id="初步演示" tabindex="-1"><a class="header-anchor" href="#初步演示"><span>初步演示</span></a></h2><p>接口（interfaces）是一种约束，定义对象的类型</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line">  <span class="token comment">//定义一个接口</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">Iperson</span><span class="token punctuation">{</span></span>
<span class="line">    firstName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">    lastName<span class="token operator">:</span><span class="token builtin">string</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">showFullName</span><span class="token punctuation">(</span>person<span class="token operator">:</span>Iperson<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> person<span class="token punctuation">.</span>firstName<span class="token operator">+</span><span class="token string">&#39;-&#39;</span><span class="token operator">+</span>person<span class="token punctuation">.</span>lastName</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">const</span> person<span class="token operator">=</span><span class="token punctuation">{</span></span>
<span class="line">    firstName<span class="token operator">:</span><span class="token string">&#39;东方&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    lastName<span class="token operator">:</span><span class="token string">&#39;不败&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">showFullName</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义的这个Iperson这个接口类型，必须符合接口中定义的东西以及参数数量，名字，必须严格安装他的格式去描述参数</p>`,4)]))}const c=n(t,[["render",l],["__file","jiekou.html.vue"]]),r=JSON.parse('{"path":"/blogs/TypeScript/jiekou.html","title":"接口","lang":"en-US","frontmatter":{"title":"接口","date":"2022-9-8","autoSort":10,"tags":["TypeScript"],"categories":["TypeScript"]},"headers":[{"level":2,"title":"初步演示","slug":"初步演示","link":"#初步演示","children":[]}],"git":{"createdTime":1728696783000,"updatedTime":1728696783000,"contributors":[{"name":"刘政杨","email":"314781333@qq.com","commits":1}]},"filePathRelative":"blogs/TypeScript/接口.md"}');export{c as comp,r as data};
