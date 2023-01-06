import{_ as e,o as a,c as s,a as n}from"./app.6ea318e9.js";const C=JSON.parse('{"title":"Django","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[{"level":3,"title":"Create Project","slug":"create-project","link":"#create-project","children":[]},{"level":3,"title":"Create App","slug":"create-app","link":"#create-app","children":[]},{"level":3,"title":"Run development Server","slug":"run-development-server","link":"#run-development-server","children":[]},{"level":3,"title":"Create a model","slug":"create-a-model","link":"#create-a-model","children":[]},{"level":3,"title":"The Django template engine","slug":"the-django-template-engine","link":"#the-django-template-engine","children":[]}]}],"relativePath":"python/web/django.md"}'),t={name:"python/web/django.md"},o=n(`<h1 id="django" tabindex="-1">Django <a class="header-anchor" href="#django" aria-hidden="true">#</a></h1><p>Django is a free and open-source, web framework that follows the model–template–views (MTV) architectural pattern.</p><ul><li><a href="https://docs.djangoproject.com/" target="_blank" rel="noreferrer">Documentation</a></li></ul><p>In a model-template-views pattern as used in Django, the <a href="https://docs.djangoproject.com/en/4.1/topics/db/" target="_blank" rel="noreferrer">model</a> is used to interact with a database, the <a href="https://docs.djangoproject.com/en/4.1/topics/templates/" target="_blank" rel="noreferrer">templates</a> are used to define the rendered HTML, and the <a href="https://docs.djangoproject.com/en/4.1/topics/http/views/" target="_blank" rel="noreferrer">views</a> are used as a glue between them, doing the processing. Other useful tools are <a href="https://docs.djangoproject.com/en/4.1/topics/forms/" target="_blank" rel="noreferrer">forms</a>, that define a way to quickly validate data coming from the outside, and the <a href="https://docs.djangoproject.com/en/4.1/ref/contrib/admin/" target="_blank" rel="noreferrer">admin site</a> that allows to easily browse the data contained in the models once configured.</p><p>Django can also be used as a backend REST server, usually with the help of <a href="https://www.django-rest-framework.org/" target="_blank" rel="noreferrer">Django REST framework</a> that provides tools to easily define a REST API without much more code than the models (if the API is simple).</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><h3 id="create-project" tabindex="-1">Create Project <a class="header-anchor" href="#create-project" aria-hidden="true">#</a></h3><p>To create a <code>mysite</code> project, run :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">django-admin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">startproject</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysite</span></span>
<span class="line"></span></code></pre></div><p>This command will create the following directory structure :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysite/</span></span>
<span class="line"><span style="color:#A6ACCD;">    manage.py</span></span>
<span class="line"><span style="color:#A6ACCD;">    mysite/</span></span>
<span class="line"><span style="color:#A6ACCD;">        __init__.py</span></span>
<span class="line"><span style="color:#A6ACCD;">        settings.py</span></span>
<span class="line"><span style="color:#A6ACCD;">        urls.py</span></span>
<span class="line"><span style="color:#A6ACCD;">        asgi.py</span></span>
<span class="line"><span style="color:#A6ACCD;">        wsgi.py</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="create-app" tabindex="-1">Create App <a class="header-anchor" href="#create-app" aria-hidden="true">#</a></h3><p>To create a <code>polls</code> app, run in the <code>mysite</code> folder :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/manage.py</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">startapp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">polls</span></span>
<span class="line"></span></code></pre></div><p>This command will create the following directory structure :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">polls/</span></span>
<span class="line"><span style="color:#A6ACCD;">    __init__.py</span></span>
<span class="line"><span style="color:#A6ACCD;">    admin.py</span></span>
<span class="line"><span style="color:#A6ACCD;">    apps.py</span></span>
<span class="line"><span style="color:#A6ACCD;">    migrations/</span></span>
<span class="line"><span style="color:#A6ACCD;">        __init__.py</span></span>
<span class="line"><span style="color:#A6ACCD;">    models.py</span></span>
<span class="line"><span style="color:#A6ACCD;">    tests.py</span></span>
<span class="line"><span style="color:#A6ACCD;">    urls.py</span></span>
<span class="line"><span style="color:#A6ACCD;">    views.py</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="run-development-server" tabindex="-1">Run development Server <a class="header-anchor" href="#run-development-server" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/manage.py</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">runserver</span></span>
<span class="line"></span></code></pre></div><p>This launches a development server at <code>http://localhost:8000/</code> by default.</p><p>A useful tool for development is the <a href="https://django-debug-toolbar.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">Django debug toolbar</a> that allows to easily see what route, view and SQL was used for requests. It adds a sidebar to every HTML page that includes a <code>&lt;/body&gt;</code> tag.</p><p>To get debug information about pages without a closing <code>&lt;/body&gt;</code> tag, you can use the history tab in the toolbar of another page running on the same development server.</p><h3 id="create-a-model" tabindex="-1">Create a model <a class="header-anchor" href="#create-a-model" aria-hidden="true">#</a></h3><p>Every model class corresponds to a table in your database. A primary key is created automatically, named <code>id</code> and of type <code>BigIntegerField</code>. It is used for relations created with <code>ForeignKey</code>, <code>OneToOneField</code> and <code>ManyToManyField</code>.</p><p>A simple model looks like this:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> django</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> models</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Book</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">models</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Model</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># define the fields here</span></span>
<span class="line"><span style="color:#A6ACCD;">    title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CharField</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">max_length</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    page_count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PositiveIntegerField</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    price </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DecimalField</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">max_digits</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">decimal_places</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">null</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">    personal_comment </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> models</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">TextField</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">blank</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"></span></code></pre></div><p><code>DecimalField</code> are nice to get exact fractional values that cannot be represented by floating point numbers. They are fixed point numbers and require the decimal place to be fixed in place.</p><p>The <code>null</code> parameter is <code>False</code> by default. To allow the value to be a SQL <code>NULL</code>, aka python&#39;s <code>None</code>, you need to add <code>null=True</code> to the field definition.</p><p>For textual fields, the <code>blank</code> parameter allows the value to be the empty string, it is <code>False</code> by default. It is not recommended to use both <code>null=True</code> and <code>blank=True</code> on a field as there are then two representation of &quot;empty&quot; for that field, which makes it harder to query for empty values.</p><p><strong>After editing any model</strong> you need to create the migration files by running:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/manage.py</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">makemigrations</span></span>
<span class="line"></span></code></pre></div><p>You then need to apply all created migrations to the database by running the following command:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/manage.py</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">migrate</span></span>
<span class="line"></span></code></pre></div><h3 id="the-django-template-engine" tabindex="-1">The Django template engine <a class="header-anchor" href="#the-django-template-engine" aria-hidden="true">#</a></h3><p>Django has its own template engine that is very similar to Jinja. See the Jinja cheatsheet for more info about the template syntax.</p><p>Some features from Jinja are not available, notably the ability to remove whitespace before and after jinja tags with the <code>-</code> prefix/suffix. It is possible to use the Jinja engine instead of the Django engine by changing <a href="https://docs.djangoproject.com/en/4.1/ref/settings/#templates" target="_blank" rel="noreferrer">the template configuration</a> in the settings.</p>`,35),l=[o];function p(r,c,i,d,h,y){return a(),s("div",null,l)}const m=e(t,[["render",p]]);export{C as __pageData,m as default};
