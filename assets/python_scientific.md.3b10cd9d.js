import{_ as s,o as a,c as n,a as l}from"./app.8f35f3db.js";const C=JSON.parse('{"title":"Scientific Stack","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[{"level":3,"title":"Figure Plotting","slug":"figure-plotting","link":"#figure-plotting","children":[]}]}],"relativePath":"python/scientific.md"}'),p={name:"python/scientific.md"},o=l(`<h1 id="scientific-stack" tabindex="-1">Scientific Stack <a class="header-anchor" href="#scientific-stack" aria-hidden="true">#</a></h1><ul><li><a href="https://numpy.org/doc/stable/" target="_blank" rel="noreferrer">Documentation</a></li></ul><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><h3 id="figure-plotting" tabindex="-1">Figure Plotting <a class="header-anchor" href="#figure-plotting" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> numpy </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> np</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> matplotlib</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">pyplot</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> plt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">arange</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">/</span><span style="color:#82AAFF;">fs</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sin</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">np</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">pi</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">t</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 3Hz sine wave</span></span>
<span class="line"><span style="color:#A6ACCD;">plt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">plot</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">t</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> s</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">plt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">xlabel</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">t [s]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">plt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ylabel</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x(t)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,F,i,D,y){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};