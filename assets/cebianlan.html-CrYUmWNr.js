import{_ as p,c as l,b as a,d as n,e as t,a as i,o as c,r as o}from"./app-5u2AVv_J.js";const r={},d={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"};function u(m,s){const e=o("ExternalLinkIcon");return c(),l("div",null,[a("p",null,[s[1]||(s[1]=n("侧边栏的配置有很多方式，详细配置可根据")),a("a",d,[s[0]||(s[0]=n("官方")),t(e)]),s[2]||(s[2]=n("参考,这里简单供大家参考一下我的侧边栏配置。（😰😰😰本人在配置的侧边栏磨蹭半天）"))]),s[3]||(s[3]=i(`<h2 id="对于markdown文件放置位置" tabindex="-1"><a class="header-anchor" href="#对于markdown文件放置位置"><span>对于markdown文件放置位置</span></a></h2><p>文件摆放的位置可以任意放置。但必须保证在根目录下或者可以访问的位置，对于名字没有限制可中文也可英文<br><img src="https://s1.ax1x.com/2022/06/29/jmRvaF.png" alt="dd"><br></p><p>文件中必须有permalink该项属性，他代表博客文件的访问路径 <img src="https://s1.ax1x.com/2022/06/29/jmW1qf.png" alt="dd"></p><h2 id="config设置" tabindex="-1"><a class="header-anchor" href="#config设置"><span>config设置</span></a></h2><p>在themeConfig主题中配置nav导航栏<br><img src="https://s1.ax1x.com/2022/06/29/jmWhsx.png" alt="dd"><br></p><blockquote><p>效果如下<br></p></blockquote><p><img src="https://s1.ax1x.com/2022/06/29/jmWvOP.png" alt="dd"><br></p><p>在themeConfig主题中配置sidebar侧边栏<br></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"> <span class="token literal-property property">sidebar</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;/docs/theme-reco/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;them-reco&#39;</span><span class="token punctuation">,</span><span class="token comment">//标题</span></span>
<span class="line">          <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否展开折叠</span></span>
<span class="line">          <span class="token comment">//中必须为文件名字 </span></span>
<span class="line">          <span class="token comment">// &#39;&#39; 表示默认文件README.md  可以理解为文档首页</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;theme&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;plugin&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;api&#39;</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;/docs/博客/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;博客&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否展开折叠</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;部署&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;插件的使用&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;侧边栏&#39;</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span> </span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动侧边栏" tabindex="-1"><a class="header-anchor" href="#自动侧边栏"><span>自动侧边栏</span></a></h2><p>懒人福音，不用折腾，减少频繁操作配置</p><div class="language-javacript line-numbers-mode" data-highlighter="prismjs" data-ext="javacript" data-title="javacript"><pre class="language-javacript"><code><span class="line">  npm i vuepress-plugin-auto-sidebar</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在plugin中配置</p><div class="language-javacript line-numbers-mode" data-highlighter="prismjs" data-ext="javacript" data-title="javacript"><pre class="language-javacript"><code><span class="line">[</span>
<span class="line">  &quot;vuepress-plugin-auto-sidebar&quot;,</span>
<span class="line">  {</span>
<span class="line">    collapse: {</span>
<span class="line">      open: false,</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">],</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意！！！ 如果文件名字是中文名字需要在md文件中配置permalink(跳转路径) 英文名称可以忽略</p></blockquote>`,15))])}const k=p(r,[["render",u],["__file","cebianlan.html.vue"]]),b=JSON.parse('{"path":"/blogs/reco1.0bokedajian/cebianlan.html","title":"侧边栏","lang":"en-US","frontmatter":{"title":"侧边栏","date":"2022-06-29T00:00:00.000Z","tags":["博客搭建"],"categories":["reco1.0博客搭建"]},"headers":[{"level":2,"title":"对于markdown文件放置位置","slug":"对于markdown文件放置位置","link":"#对于markdown文件放置位置","children":[]},{"level":2,"title":"config设置","slug":"config设置","link":"#config设置","children":[]},{"level":2,"title":"自动侧边栏","slug":"自动侧边栏","link":"#自动侧边栏","children":[]}],"git":{"createdTime":1728696783000,"updatedTime":1728723483000,"contributors":[{"name":"刘政杨","email":"314781333@qq.com","commits":2}]},"filePathRelative":"blogs/reco1.0博客搭建/侧边栏.md"}');export{k as comp,b as data};
