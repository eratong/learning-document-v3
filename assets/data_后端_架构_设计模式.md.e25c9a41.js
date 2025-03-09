import{_ as s,o as a,c as n,X as l}from"./chunks/framework.9bc23fa4.js";const p="/learning-document-v3/assets/image-20220711151355608.41e28d57.png",h=JSON.parse('{"title":"设计模式","description":"","frontmatter":{},"headers":[],"relativePath":"data/后端/架构/设计模式.md","filePath":"data/后端/架构/设计模式.md","lastUpdated":1720420715000}'),o={name:"data/后端/架构/设计模式.md"},e=l('<h1 id="设计模式" tabindex="-1">设计模式 <a class="header-anchor" href="#设计模式" aria-label="Permalink to &quot;设计模式&quot;">​</a></h1><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><p>创建型模式(5种)：工厂方法模式、抽象工厂模式、生成器模式、(建造者模式)、原型模式、单例模式。</p><p>结构型模式(7种)：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。</p><p>行为型模式(11种)：策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。</p><p><img src="'+p+`" alt="image"></p><h2 id="创建型模式" tabindex="-1">创建型模式 <a class="header-anchor" href="#创建型模式" aria-label="Permalink to &quot;创建型模式&quot;">​</a></h2><h3 id="工厂方法模式" tabindex="-1">工厂方法模式** <a class="header-anchor" href="#工厂方法模式" aria-label="Permalink to &quot;工厂方法模式**&quot;">​</a></h3><p>工厂模式关注单个对象的创建，适用于单个对象的创建</p><h3 id="抽象工厂模式" tabindex="-1">抽象工厂模式** <a class="header-anchor" href="#抽象工厂模式" aria-label="Permalink to &quot;抽象工厂模式**&quot;">​</a></h3><p>抽象工厂模式关注多个相关对象的创建，抽象工厂模式适用于一组相关对象的创建</p><h3 id="生成器模式" tabindex="-1">生成器模式 <a class="header-anchor" href="#生成器模式" aria-label="Permalink to &quot;生成器模式&quot;">​</a></h3><p>分步骤创建复杂对象，该模式允许你使用相同的创建代码生成不同类型和形式的对象</p><h3 id="建造者模式" tabindex="-1">建造者模式 <a class="header-anchor" href="#建造者模式" aria-label="Permalink to &quot;建造者模式&quot;">​</a></h3><p>和生成器模式差不多</p><h3 id="原型模式" tabindex="-1">原型模式 <a class="header-anchor" href="#原型模式" aria-label="Permalink to &quot;原型模式&quot;">​</a></h3><p>原型模式是一种创建型设计模式， 使你能够复制已有对象， 而又无需使代码依赖它们所属的类。</p><h3 id="单例模式" tabindex="-1">单例模式** <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式**&quot;">​</a></h3><h4 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h4><p>需要频繁的进行创建和销毁的对象、创建对象时耗时过多或耗费资源过多(即:重量级对象)，但又经常用到的对象、工具类对象、频繁访问数据库或文件的对象(比如数据源、session工厂等)<br> 频繁获取的配置文件啥的</p><h4 id="创建过程" tabindex="-1">创建过程 <a class="header-anchor" href="#创建过程" aria-label="Permalink to &quot;创建过程&quot;">​</a></h4><p>1、创建实例<br> 2、构造器私有化（外部不能使用构造器创建对象）<br> 3、返回实例的方法</p><h4 id="饿汉式" tabindex="-1">饿汉式 <a class="header-anchor" href="#饿汉式" aria-label="Permalink to &quot;饿汉式&quot;">​</a></h4><p>线程安全，调用效率高，但是不能延时加载</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tong</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Tong</span><span style="color:#A6ACCD;"> instance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> Tong</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tong</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Tong</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getInstance</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> instance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="懒汉式" tabindex="-1">懒汉式 <a class="header-anchor" href="#懒汉式" aria-label="Permalink to &quot;懒汉式&quot;">​</a></h4><p>线程安全，调用效率不高，但是能延时加载</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tong</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Tong</span><span style="color:#A6ACCD;"> tong</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tong</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">synchronized</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Tong</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tong</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">tong </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            tong</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tong</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> tong</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="双重检查式" tabindex="-1">双重检查式 <a class="header-anchor" href="#双重检查式" aria-label="Permalink to &quot;双重检查式&quot;">​</a></h4><p>DCL也就是双重锁判断机制（由于JVM底层模型原因，偶尔会出问题，不建议使用）</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tong</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Tong</span><span style="color:#A6ACCD;"> tong</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tong</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Tong</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getInstance</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">tong</span><span style="color:#89DDFF;">==null){</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#C792EA;">synchronized</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Tong</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">tong</span><span style="color:#89DDFF;">==null){</span></span>
<span class="line"><span style="color:#A6ACCD;">                  tong</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tong</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> tong</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>上面的也不好，发生cpu指令重排序的话，还是会有点问题，但是发生概率不怎么高<br> volatile版本</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">volatile</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Helper</span><span style="color:#A6ACCD;"> helper </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Foo</span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Helper</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getHelper</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">helper </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">synchronized</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(this)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">helper </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;">//（jvm new对象的过程 申请内存-&gt;变量初始化-&gt;赋值给helper）</span></span>
<span class="line"><span style="color:#A6ACCD;">                    helper </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Helper</span><span style="color:#89DDFF;">();</span><span style="color:#676E95;font-style:italic;">//指令重排序 上面的顺序乱了，可能会导致对象值不准，volatile可以防止指令重排序</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> helper</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h4 id="静态内部类实现模式" tabindex="-1">静态内部类实现模式 <a class="header-anchor" href="#静态内部类实现模式" aria-label="Permalink to &quot;静态内部类实现模式&quot;">​</a></h4><p>线程安全，调用效率高，可以延时加载</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tong</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TongInstance</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Tong</span><span style="color:#A6ACCD;"> tongInstance</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tong</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tong</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Tong</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getInstance</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> TongInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tongInstance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="结构型模式" tabindex="-1">结构型模式 <a class="header-anchor" href="#结构型模式" aria-label="Permalink to &quot;结构型模式&quot;">​</a></h2><h3 id="适配器模式" tabindex="-1">适配器模式** <a class="header-anchor" href="#适配器模式" aria-label="Permalink to &quot;适配器模式**&quot;">​</a></h3><p>能使接口不兼容的对象能够相互合作</p><h3 id="桥接模式" tabindex="-1">桥接模式 <a class="header-anchor" href="#桥接模式" aria-label="Permalink to &quot;桥接模式&quot;">​</a></h3><p>可将一个大类或一系列紧密相关的类拆分为抽象和实现两个独立的层次结构， 从而能在开发时分别使用。</p><h3 id="组合模式" tabindex="-1">组合模式 <a class="header-anchor" href="#组合模式" aria-label="Permalink to &quot;组合模式&quot;">​</a></h3><p>可以使用它将对象组合成树状结构， 并且能像使用独立对象一样使用它们。</p><h3 id="装饰器模式" tabindex="-1">装饰器模式 <a class="header-anchor" href="#装饰器模式" aria-label="Permalink to &quot;装饰器模式&quot;">​</a></h3><p>通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为。</p><h3 id="代理模式" tabindex="-1">代理模式 <a class="header-anchor" href="#代理模式" aria-label="Permalink to &quot;代理模式&quot;">​</a></h3><p>让你能够提供对象的替代品或其占位符。 代理控制着对于原对象的访问， 并允许在将请求提交给对象前后进行一些处理。</p><h3 id="外观模式" tabindex="-1">外观模式 <a class="header-anchor" href="#外观模式" aria-label="Permalink to &quot;外观模式&quot;">​</a></h3><p>能为程序库、 框架或其他复杂类提供一个简单的接口。</p><h3 id="享元模式" tabindex="-1">享元模式 <a class="header-anchor" href="#享元模式" aria-label="Permalink to &quot;享元模式&quot;">​</a></h3><p>它摒弃了在每个对象中保存所有数据的方式， 通过共享多个对象所共有的相同状态， 让你能在有限的内存容量中载入更多对象。</p><h2 id="行为型模式" tabindex="-1">行为型模式 <a class="header-anchor" href="#行为型模式" aria-label="Permalink to &quot;行为型模式&quot;">​</a></h2><h3 id="策略模式" tabindex="-1">策略模式** <a class="header-anchor" href="#策略模式" aria-label="Permalink to &quot;策略模式**&quot;">​</a></h3><p>它能让你定义一系列算法， 并将每种算法分别放入独立的类中， 以使算法的对象能够相互替换。 比如 购物时各种不同优惠策略的场景</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 策略模式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1、定义策略接口    </span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CouponStrategy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCouponType</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2、定义策略实现类 </span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Service</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ManJianCouponStrategy</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CouponStrategy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCouponType</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">manJian</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3、定义上下文 Context 管理所有策略 切换策略</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Service</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ZheKouCouponStrategy</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CouponStrategy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCouponType</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zhekou</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4、使用 传给上下文当前选择的策略</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CouponContext</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">CouponStrategy</span><span style="color:#A6ACCD;"> couponStrategy</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setCouponStrategy</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">CouponStrategy</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">couponStrategy</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">couponStrategy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> couponStrategy</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">chooseCoupon</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> couponStrategy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCouponType</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TestMain</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">CouponContext</span><span style="color:#A6ACCD;"> couponContext </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CouponContext</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> userLevel </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">userLevel</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                couponContext</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCouponStrategy</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ZheKouCouponStrategy</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                couponContext</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCouponStrategy</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ManJianCouponStrategy</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> couponContext</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">chooseCoupon</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="模板方法模式" tabindex="-1">模板方法模式** <a class="header-anchor" href="#模板方法模式" aria-label="Permalink to &quot;模板方法模式**&quot;">​</a></h3><h3 id="观察者模式" tabindex="-1">观察者模式** <a class="header-anchor" href="#观察者模式" aria-label="Permalink to &quot;观察者模式**&quot;">​</a></h3><h3 id="迭代子模式" tabindex="-1">迭代子模式 <a class="header-anchor" href="#迭代子模式" aria-label="Permalink to &quot;迭代子模式&quot;">​</a></h3><h3 id="责任链模式" tabindex="-1">责任链模式 <a class="header-anchor" href="#责任链模式" aria-label="Permalink to &quot;责任链模式&quot;">​</a></h3><h4 id="使用场景-1" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景-1" aria-label="Permalink to &quot;使用场景&quot;">​</a></h4><p>① oa各个层级审批<br> ② 对请求进行各个层级拦截处理,例如认证、 授权与验证</p><h3 id="命令模式" tabindex="-1">命令模式 <a class="header-anchor" href="#命令模式" aria-label="Permalink to &quot;命令模式&quot;">​</a></h3><h3 id="备忘录模式" tabindex="-1">备忘录模式 <a class="header-anchor" href="#备忘录模式" aria-label="Permalink to &quot;备忘录模式&quot;">​</a></h3><h3 id="状态模式" tabindex="-1">状态模式 <a class="header-anchor" href="#状态模式" aria-label="Permalink to &quot;状态模式&quot;">​</a></h3><h3 id="访问者模式" tabindex="-1">访问者模式 <a class="header-anchor" href="#访问者模式" aria-label="Permalink to &quot;访问者模式&quot;">​</a></h3><h3 id="中介者模式" tabindex="-1">中介者模式 <a class="header-anchor" href="#中介者模式" aria-label="Permalink to &quot;中介者模式&quot;">​</a></h3><h3 id="解释器模式" tabindex="-1">解释器模式 <a class="header-anchor" href="#解释器模式" aria-label="Permalink to &quot;解释器模式&quot;">​</a></h3><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p><a href="https://refactoringguru.cn/" target="_blank" rel="noreferrer">https://refactoringguru.cn/</a></p><p><a href="https://www.runoob.com/design-pattern/design-pattern-tutorial.html" target="_blank" rel="noreferrer">https://www.runoob.com/design-pattern/design-pattern-tutorial.html</a></p><p><a href="https://blog.csdn.net/wlddhj/article/details/131071730" target="_blank" rel="noreferrer">https://blog.csdn.net/wlddhj/article/details/131071730</a></p><p>开闭原则<br> 在面向对象编程领域中，规定“软件中的对象（类，模块，函数等等）应该对于扩展是开放的，但是对于修改是封闭的”，这意味着一个实体是允许在不改变它的源代码的前提下变更它的行为</p><p>迪米特法则</p><p>Spring 框架中用到了哪些设计模式？</p><blockquote><p>工厂设计模式 : Spring使用工厂模式通过 BeanFactory、ApplicationContext 创建 bean 对象。<br> 代理设计模式 : Spring AOP 功能的实现。<br> 单例设计模式 : Spring 中的 Bean 默认都是单例的。<br> 模板方法模式 : Spring 中 jdbcTemplate、hibernateTemplate 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。<br> 包装器设计模式 : 我们的项目需要连接多个数据库，而且不同的客户在每次访问中根据需要会去访问不同的数据库。这种模式让我们可以根据客户的需求能够动态切换不同的数据源。<br> 观察者模式: Spring 事件驱动模型就是观察者模式很经典的一个应用。<br> 适配器模式 :Spring AOP 的增强或通知(Advice)使用到了适配器模式、spring MVC 中也是用到了适配器模式适配Controller。</p></blockquote>`,75),t=[e];function c(r,y,C,A,D,i){return a(),n("div",null,t)}const u=s(o,[["render",c]]);export{h as __pageData,u as default};
