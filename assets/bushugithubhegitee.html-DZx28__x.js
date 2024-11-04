import{_ as t,c as p,b as n,d as a,e as l,a as i,o as r,r as o}from"./app-5u2AVv_J.js";const d={},u={href:"https://imgtu.com/i/jZDUPK",target:"_blank",rel:"noopener noreferrer"},c={href:"https://imgtu.com/i/jZDcIP",target:"_blank",rel:"noopener noreferrer"},g={href:"https://imgtu.com/i/jZsNcD",target:"_blank",rel:"noopener noreferrer"},m={href:"https://imgtu.com/i/jZ67XF",target:"_blank",rel:"noopener noreferrer"};function b(v,s){const e=o("ExternalLinkIcon");return r(),p("div",null,[s[18]||(s[18]=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言"},[n("span",null,"前言")])],-1)),s[19]||(s[19]=n("p",null,"本人因为英语水平不好，对github不太了解导致就一个上传github部署博客上线卡啦好几天。 这里一步一步对博客进行配置",-1)),s[20]||(s[20]=n("h2",{id:"第一步在配置密钥",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第一步在配置密钥"},[n("span",null,"第一步在配置密钥")])],-1)),n("p",null,[s[2]||(s[2]=a("1.在github设置中配置密钥")),s[3]||(s[3]=n("br",null,null,-1)),s[4]||(s[4]=n("img",{src:"https://s1.ax1x.com/2022/06/28/jZDkuj.png",alt:"密钥"},null,-1)),s[5]||(s[5]=n("br",null,null,-1)),s[6]||(s[6]=a(" 2.新建密钥")),s[7]||(s[7]=n("br",null,null,-1)),n("a",u,[s[0]||(s[0]=n("img",{src:"https://s1.ax1x.com/2022/06/28/jZDUPK.md.png",alt:"jZDUPK.md.png"},null,-1)),l(e)]),s[8]||(s[8]=n("br",null,null,-1)),s[9]||(s[9]=a(" 3.先空着一会输入密钥")),s[10]||(s[10]=n("br",null,null,-1)),n("a",c,[s[1]||(s[1]=n("img",{src:"https://s1.ax1x.com/2022/06/28/jZDcIP.md.png",alt:"jZDcIP.md.png"},null,-1)),l(e)]),s[11]||(s[11]=n("br",null,null,-1)),s[12]||(s[12]=a(" 4.在小黑本中输入")),s[13]||(s[13]=n("br",null,null,-1))]),s[21]||(s[21]=i(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">ssh<span class="token operator">-</span>keygen <span class="token operator">-</span>t rsa <span class="token operator">-</span><span class="token constant">C</span> <span class="token string">&quot;邮箱&quot;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以看到一个代码小图片，那就说明成功了 <img src="https://s1.ax1x.com/2022/06/28/jZsVhV.png" alt="dd"> 接下来输入</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">cat <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa<span class="token punctuation">.</span>pub</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,3)),n("p",null,[s[15]||(s[15]=a("复制出来的编码粘贴到咱们github的密钥key中保存即可 ")),n("a",g,[s[14]||(s[14]=n("img",{src:"https://s1.ax1x.com/2022/06/28/jZsNcD.md.png",alt:"jZsNcD.md.png"},null,-1)),l(e)])]),s[22]||(s[22]=n("h2",{id:"第二步-创建一个github仓库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第二步-创建一个github仓库"},[n("span",null,"第二步 创建一个github仓库")])],-1)),s[23]||(s[23]=n("p",null,[a("仓库名为:用户名.github.io"),n("br"),n("img",{src:"https://s1.ax1x.com/2022/06/28/jZ6VQU.png",alt:"d"}),n("br")],-1)),n("p",null,[n("a",m,[s[16]||(s[16]=n("img",{src:"https://s1.ax1x.com/2022/06/28/jZ67XF.md.png",alt:"jZ67XF.md.png"},null,-1)),l(e)]),s[17]||(s[17]=n("br",null,null,-1))]),s[24]||(s[24]=i(`<blockquote><p>因为我创建过啦，所以提醒报错</p></blockquote><h2 id="第三步-配置自动脚本" tabindex="-1"><a class="header-anchor" href="#第三步-配置自动脚本"><span>第三步 配置自动脚本</span></a></h2><p>我们打包好的项目会生成在一个public(或者别的名字)这个文件就是我们打好的包上传服务器就可以跑起来。上传github或git配合脚本上传我们只需要一串代码就可以更新我们的博客</p><p>1.在根目录下创建deploy.sh脚本文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token hashbang comment">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"># 确保脚本抛出遇到的错误</span>
<span class="line">set <span class="token operator">-</span>e</span>
<span class="line"></span>
<span class="line"># 生成静态文件</span>
<span class="line">npm run build</span>
<span class="line"></span>
<span class="line"># 进入生成的文件夹</span>
<span class="line">cd <span class="token keyword">public</span></span>
<span class="line"></span>
<span class="line"># git命令</span>
<span class="line">git init</span>
<span class="line">git add <span class="token operator">-</span><span class="token constant">A</span></span>
<span class="line">git commit <span class="token operator">-</span>m <span class="token string">&#39;上传博客&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 上传 这里自行更换自己的用户名和仓库名字</span>
<span class="line">git push <span class="token operator">-</span>f git@github<span class="token punctuation">.</span>com<span class="token operator">:</span>XiYang66<span class="token operator">/</span>xiyang66<span class="token punctuation">.</span>github<span class="token punctuation">.</span>io<span class="token punctuation">.</span>git master<span class="token operator">:</span>gh<span class="token operator">-</span>pages</span>
<span class="line"></span>
<span class="line">cd <span class="token operator">-</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在package.json中scripts加入此配置</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"> <span class="token string-property property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;start deploy.sh&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3.启动</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"> npm run deploy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>github刷新看效果</p></blockquote>`,10))])}const k=t(d,[["render",b],["__file","bushugithubhegitee.html.vue"]]),j=JSON.parse('{"path":"/blogs/reco1.0bokedajian/bushugithubhegitee.html","title":"部署github","lang":"en-US","frontmatter":{"title":"部署github","date":"2022-6-28","tags":["博客搭建"],"categories":["reco1.0博客搭建"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"第一步在配置密钥","slug":"第一步在配置密钥","link":"#第一步在配置密钥","children":[]},{"level":2,"title":"第二步 创建一个github仓库","slug":"第二步-创建一个github仓库","link":"#第二步-创建一个github仓库","children":[]},{"level":2,"title":"第三步 配置自动脚本","slug":"第三步-配置自动脚本","link":"#第三步-配置自动脚本","children":[]}],"git":{"createdTime":1728696783000,"updatedTime":1728723483000,"contributors":[{"name":"刘政杨","email":"314781333@qq.com","commits":2}]},"filePathRelative":"blogs/reco1.0博客搭建/部署github和gitee.md"}');export{k as comp,j as data};