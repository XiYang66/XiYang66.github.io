import{_ as s,c as a,a as e,o as p}from"./app-5u2AVv_J.js";const t={};function l(o,n){return p(),a("div",null,n[0]||(n[0]=[e(`<p>JavaScript 的类型分为两种：基础数据类型和对象类型</p><h2 id="基础数据类型" tabindex="-1"><a class="header-anchor" href="#基础数据类型"><span>基础数据类型</span></a></h2><blockquote><p>原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 ES10 中的新类型 BigInt。</p></blockquote><h3 id="布尔值" tabindex="-1"><a class="header-anchor" href="#布尔值"><span>布尔值</span></a></h3><p>布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">  <span class="token keyword">let</span> <span class="token literal-property property">isDone</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="数值" tabindex="-1"><a class="header-anchor" href="#数值"><span>数值</span></a></h3><p>使用 number 定义数值类型：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> <span class="token literal-property property">decLiteral</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">hexLiteral</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ES6 中的二进制表示法</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">binaryLiteral</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ES6 中的八进制表示法</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">octalLiteral</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">notANumber</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">infinityNumber</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">var</span> decLiteral <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> hexLiteral <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ES6 中的二进制表示法</span></span>
<span class="line"><span class="token keyword">var</span> binaryLiteral <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ES6 中的八进制表示法</span></span>
<span class="line"><span class="token keyword">var</span> octalLiteral <span class="token operator">=</span> <span class="token number">484</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> notANumber <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> infinityNumber <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。</p><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h3><p>使用 string 定义字符串类型：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> <span class="token literal-property property">myName</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 模板字符串</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">sentence</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span>
<span class="line">I&#39;ll be </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old next month.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 模板字符串</span></span>
<span class="line"><span class="token keyword">var</span> sentence <span class="token operator">=</span> <span class="token string">&quot;Hello, my name is &quot;</span> <span class="token operator">+</span> myName <span class="token operator">+</span> &quot;<span class="token punctuation">.</span></span>
<span class="line"><span class="token constant">I</span>&#39;ll be <span class="token string">&quot; + (myAge + 1) + &quot;</span> years old next month<span class="token punctuation">.</span>&quot;<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 \` 用来定义 ES6 中的模板字符串，\${expr} 用来在模板字符串中嵌入表达式。</p><h3 id="void" tabindex="-1"><a class="header-anchor" href="#void"><span>void</span></a></h3><p>JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">alertName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;My name is Tom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> <span class="token literal-property property">unusable</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined"><span>Null 和 Undefined</span></a></h3><p>在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> <span class="token literal-property property">u</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 这样不会报错</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">num</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 这样也不会报错</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">u</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">num</span><span class="token operator">:</span> number <span class="token operator">=</span> u<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而 void 类型的变量不能赋值给 number 类型的变量：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> <span class="token literal-property property">u</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">num</span><span class="token operator">:</span> number <span class="token operator">=</span> u<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Type &#39;void&#39; is not assignable to type &#39;number&#39;.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><p>在 TypeScript 中，数组类型有多种定义方式，比较灵活。</p><h4 id="「类型-方括号」表示法" tabindex="-1"><a class="header-anchor" href="#「类型-方括号」表示法"><span>「类型 + 方括号」表示法</span></a></h4><p>最简单的方法是使用「类型 + 方括号」来表示数组：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> <span class="token literal-property property">fibonacci</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>数组的项中不允许出现其他的类型：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> <span class="token literal-property property">fibonacci</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Type &#39;string&#39; is not assignable to type &#39;number&#39;.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> <span class="token literal-property property">fibonacci</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">fibonacci<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Argument of type &#39;&quot;8&quot;&#39; is not assignable to parameter of type &#39;number&#39;.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="元祖" tabindex="-1"><a class="header-anchor" href="#元祖"><span>元祖</span></a></h4><p>在定义数组的时候，类型和数据的个数一开始就限定了</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> <span class="token literal-property property">arr3</span><span class="token operator">:</span><span class="token punctuation">[</span>string<span class="token punctuation">,</span>number<span class="token punctuation">,</span>boolean<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;阿巴&#39;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>元祖类型使用的时候，数据的类型位置和数据个数，应和定义元祖的的时候数据类型以及位置应该是一致的</p><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举"><span>枚举</span></a></h3><p>枚举(enum)类型用于取值在限定一定范围内的场景，比如一点只有24小时，一周只能有7天</p><h4 id="简单例子" tabindex="-1"><a class="header-anchor" href="#简单例子"><span>简单例子</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">enum</span> Days<span class="token punctuation">{</span></span>
<span class="line">  Sun<span class="token punctuation">,</span> Mon<span class="token punctuation">,</span> Tue<span class="token punctuation">,</span> Wed<span class="token punctuation">,</span> Thu<span class="token punctuation">,</span> Fri<span class="token punctuation">,</span> Sat</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&quot;Tue&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&quot;Sat&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;Mon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="手动赋值" tabindex="-1"><a class="header-anchor" href="#手动赋值"><span>手动赋值</span></a></h4><p>我们也可以给枚举项手动赋值：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">enum</span> Days <span class="token punctuation">{</span>Sun <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span> Mon <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Tue<span class="token punctuation">,</span> Wed<span class="token punctuation">,</span> Thu<span class="token punctuation">,</span> Fri<span class="token punctuation">,</span> Sat<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&quot;Tue&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Days<span class="token punctuation">[</span><span class="token string">&quot;Sat&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，未手动赋值的枚举项会接着上一个枚举项递增。</p><h3 id="any" tabindex="-1"><a class="header-anchor" href="#any"><span>any</span></a></h3><p>万物皆可any，可以定义任何数据类型，用于，不确定数据的个数，类型</p><h3 id="object" tabindex="-1"><a class="header-anchor" href="#object"><span>object</span></a></h3><p>定义一个函数，参数是object类型，返回值也是object类型</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">  <span class="token keyword">function</span> <span class="token function">getObj</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span>object</span><span class="token punctuation">)</span><span class="token operator">:</span>object<span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;路飞&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">21</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型"><span>联合类型</span></a></h3><p>表示取值可以为多种类的其中一种</p><blockquote><p>例如：定义一个函数参数可以为数字也可以为字符串</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">str</span><span class="token operator">:</span>string<span class="token operator">|</span>number</span><span class="token punctuation">)</span><span class="token operator">:</span>string<span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言"><span>类型断言</span></a></h3><p>告诉编译器编译的代码是什么类型的，可以用尖括号&lt;&gt;或者as表示该变量时什么类型</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"> <span class="token keyword">function</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">str</span><span class="token operator">:</span>string<span class="token operator">|</span>number</span><span class="token punctuation">)</span><span class="token operator">:</span>string<span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span>length</span>
<span class="line">  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,67)]))}const i=s(t,[["render",l],["__file","shujuleixing.html.vue"]]),r=JSON.parse('{"path":"/blogs/TypeScript/shujuleixing.html","title":"数据类型","lang":"en-US","frontmatter":{"title":"数据类型","date":"2022-9-8","autoSort":19,"tags":["TypeScript"],"categories":["TypeScript"]},"headers":[{"level":2,"title":"基础数据类型","slug":"基础数据类型","link":"#基础数据类型","children":[{"level":3,"title":"布尔值","slug":"布尔值","link":"#布尔值","children":[]},{"level":3,"title":"数值","slug":"数值","link":"#数值","children":[]},{"level":3,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":3,"title":"void","slug":"void","link":"#void","children":[]},{"level":3,"title":"Null 和 Undefined","slug":"null-和-undefined","link":"#null-和-undefined","children":[]},{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"枚举","slug":"枚举","link":"#枚举","children":[]},{"level":3,"title":"any","slug":"any","link":"#any","children":[]},{"level":3,"title":"object","slug":"object","link":"#object","children":[]},{"level":3,"title":"联合类型","slug":"联合类型","link":"#联合类型","children":[]},{"level":3,"title":"类型断言","slug":"类型断言","link":"#类型断言","children":[]}]}],"git":{"createdTime":1728696783000,"updatedTime":1728696783000,"contributors":[{"name":"刘政杨","email":"314781333@qq.com","commits":1}]},"filePathRelative":"blogs/TypeScript/数据类型.md"}');export{i as comp,r as data};
