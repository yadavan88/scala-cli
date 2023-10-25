"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[285],{9705:function(e,a,n){n.d(a,{m:function(){return s},v:function(){return l}});var t=n(7294),i=n(2004);function l(e){var a=e.children;return t.createElement("div",{className:"runnable-command"},a)}function s(e){var a=e.url;return t.createElement(i.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:a})}},7690:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return m}});var t=n(3117),i=n(102),l=(n(7294),n(3905)),s=n(9705),o=["components"],r={title:"Markdown \u26a1\ufe0f",sidebar_position:60},p=void 0,d={unversionedId:"guides/markdown",id:"guides/markdown",title:"Markdown \u26a1\ufe0f",description:"Markdown support is an experimental feature.",source:"@site/docs/guides/markdown.md",sourceDirName:"guides",slug:"/guides/markdown",permalink:"/docs/guides/markdown",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/markdown.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Markdown \u26a1\ufe0f",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Repositories and HTTP Proxies \u26a1\ufe0f",permalink:"/docs/guides/repositories"},next:{title:"Introduction",permalink:"/docs/cookbooks/intro"}},c={},m=[{value:"Markdown inputs",id:"markdown-inputs",level:2},{value:"On-disk markdown sources",id:"on-disk-markdown-sources",level:3},{value:"Zipped archives",id:"zipped-archives",level:3},{value:"Remote inputs",id:"remote-inputs",level:3},{value:"URLs",id:"urls",level:4},{value:"Github Gist",id:"github-gist",level:4},{value:"Piped Markdown code",id:"piped-markdown-code",level:3},{value:"Markdown code as a command line snippet",id:"markdown-code-as-a-command-line-snippet",level:3},{value:"Markdown code blocks",id:"markdown-code-blocks",level:2},{value:"Plain <code>scala</code> snippets",id:"plain-scala-snippets",level:3},{value:"<code>scala raw</code> snippets",id:"scala-raw-snippets",level:3},{value:"<code>scala test</code> snippets",id:"scala-test-snippets",level:3},{value:"<code>reset</code> scope for <code>scala</code> snippets",id:"reset-scope-for-scala-snippets",level:3},{value:"<code>shebang</code> header and Markdown code blocks",id:"shebang-header-and-markdown-code-blocks",level:2},{value:"<code>using</code> directives and Markdown code blocks",id:"using-directives-and-markdown-code-blocks",level:2},{value:"Referring to code from Markdown",id:"referring-to-code-from-markdown",level:2},{value:"Plain <code>scala</code> code blocks",id:"plain-scala-code-blocks",level:3},{value:"<code>scala raw</code> and <code>scala test</code> code blocks",id:"scala-raw-and-scala-test-code-blocks",level:3}],k={toc:m};function u(e){var a=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Markdown support is an experimental feature."),(0,l.kt)("p",{parentName:"admonition"},"Please bear in mind that non-ideal user experience should be expected.\nIf you encounter any bugs or have feedback to share, make sure to reach out to the maintenance team\non ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/VirtusLab/scala-cli"},"GitHub"),".")),(0,l.kt)("p",null,"Scala CLI can compile, run, test, and package markdown (",(0,l.kt)("inlineCode",{parentName:"p"},".md"),") sources."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This feature is a work in progress and should currently be treated as experimental.\nMarkdown sources are ignored by default unless passed explicitly as inputs.\nYou can enable including non-explicit ",(0,l.kt)("inlineCode",{parentName:"p"},".md")," inputs by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"--enable-markdown")," option.")),(0,l.kt)("h2",{id:"markdown-inputs"},"Markdown inputs"),(0,l.kt)("h3",{id:"on-disk-markdown-sources"},"On-disk markdown sources"),(0,l.kt)("p",null,"You can pass local ",(0,l.kt)("inlineCode",{parentName:"p"},".md")," inputs by passing their path to Scala CLI (as you would for any other kind of input)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=dir/hello.md",title:"dir/hello.md"},'# Simple snippet\n```scala\nprintln("Hello")\n```\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power dir/hello.md\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".md")," sources inside of directories are ignored by default, unless the ",(0,l.kt)("inlineCode",{parentName:"p"},"--enable-markdown")," option is passed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power dir --enable-markdown\n")),(0,l.kt)("h3",{id:"zipped-archives"},"Zipped archives"),(0,l.kt)("p",null,"Scala CLI can run ",(0,l.kt)("inlineCode",{parentName:"p"},".md")," sources inside a ",(0,l.kt)("inlineCode",{parentName:"p"},".zip")," archive.\nSame as with directories,  ",(0,l.kt)("inlineCode",{parentName:"p"},".md")," sources inside zipped archives are ignored by default, unless\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"--enable-markdown")," option is passed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli --power archive-with-markdown.zip --enable-markdown\n")),(0,l.kt)("h3",{id:"remote-inputs"},"Remote inputs"),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Running unverified code from the Internet can be very handy for ",(0,l.kt)("em",{parentName:"p"},"trusted")," sources, but it can also be really dangerous,\nsince Scala CLI does not provide any sandboxing at this moment."),(0,l.kt)("p",{parentName:"admonition"},"Make sure that you trust the code that you are about to run.")),(0,l.kt)("h4",{id:"urls"},"URLs"),(0,l.kt)("p",null,"You can also pass a URL pointing to a ",(0,l.kt)("inlineCode",{parentName:"p"},".md")," file to run it with Scala CLI."),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power https://gist.githubusercontent.com/Gedochao/6415211eeb8ca4d8d6db123f83f0f839/raw/4c5ce7593e19f1390555221e0d076f4b02f4b4fd/example.md\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,l.kt)("h4",{id:"github-gist"},"Github Gist"),(0,l.kt)("p",null,"Scala CLI accepts GitHub Gist URLs.\nThe gist is technically treated as a zipped archive (which it is downloaded as), so it is necessary to pass\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"--enable-markdown")," option alongside the gist URL to run any contained Markdown sources."),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power https://gist.github.com/Gedochao/6415211eeb8ca4d8d6db123f83f0f839 --enable-markdown\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,l.kt)("p",null,"You can find more information on running GitHub Gists in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/cookbooks/gists"},"gists cookbook"),"."),(0,l.kt)("h3",{id:"piped-markdown-code"},"Piped Markdown code"),(0,l.kt)("p",null,"Instead of passing paths to your Markdown sources, you can also pipe your code via standard input:"),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo '# Example Snippet\n```scala\nprintln(\"Hello\")\n```' | scala-cli --power _.md\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,l.kt)("p",null,"You can find more information on piped sources in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/piping"},"piping guide"),"."),(0,l.kt)("h3",{id:"markdown-code-as-a-command-line-snippet"},"Markdown code as a command line snippet"),(0,l.kt)("p",null,"It is also possible to pass Markdown code as a snippet directly from the command line."),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power run --markdown-snippet '# Markdown snippet\nwith a code block\n```scala\nprintln(\"Hello\")\n```'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,l.kt)("p",null,"You can find more information on command line snippets in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/snippets"},"snippets guide"),"."),(0,l.kt)("h2",{id:"markdown-code-blocks"},"Markdown code blocks"),(0,l.kt)("h3",{id:"plain-scala-snippets"},"Plain ",(0,l.kt)("inlineCode",{parentName:"h3"},"scala")," snippets"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=Example.md",title:"Example.md"},'# Example\n\nThis is a simple example of an `.md` file with a Scala snippet.\n\n```scala\nval message = "Hello from Markdown"\nprintln(message)\n```\n')),(0,l.kt)("p",null,"Plain ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," snippets are treated similarly to ",(0,l.kt)("inlineCode",{parentName:"p"},".sc")," scripts in that any kind of statement is accepted at the\ntop-level."),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power run Example.md\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Markdown\n"))),(0,l.kt)("p",null,"Similarly to ",(0,l.kt)("inlineCode",{parentName:"p"},".sc")," scripts, when multiple ",(0,l.kt)("inlineCode",{parentName:"p"},".md")," files with plain ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," snippets are being run, each of them will have\nits own main class, that can be run."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=Main1.md",title:"Main1.md"},'# Main class 1\n```scala\nprintln("1")\n```\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=Main2.md",title:"Main2.md"},'# Main class 2\n```scala\nprintln("2")\n```\n')),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"fail",fail:!0},"scala-cli --power Main1.md Main2.md\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"[error]  Found several main classes: Main1_md, Main2_md\n"))),(0,l.kt)("p",null,"When multiple such sources are passed as inputs, the main class has to be passed explicitly with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--main-class"),"\noption."),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power Main1.md Main2.md --main-class Main1_md\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"1\n"))),(0,l.kt)("p",null,"You can always check what main classes are available in the context with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--list-main-classes")," option."),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power Main1.md Main2.md --list-main-classes\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Main1_md Main2_md\n"))),(0,l.kt)("h3",{id:"scala-raw-snippets"},(0,l.kt)("inlineCode",{parentName:"h3"},"scala raw")," snippets"),(0,l.kt)("p",null,"You can mark a ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," code block with the ",(0,l.kt)("inlineCode",{parentName:"p"},"raw")," keyword, indicating that this snippet should not be wrapped as a script\nand should instead be treated as is. This is the equivalent of code in a ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," file. For a ",(0,l.kt)("inlineCode",{parentName:"p"},"raw")," snippet to be\nrunnable a main class has to be included."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=RawExample.md",title:"RawExample.md"},'# `raw` example\n\nThis is a simple example of an `.md` file with a raw Scala snippet.\n\n```scala raw\nobject Main extends App {\n  val message = "Hello from Markdown"\n  println(message) \n}\n```\n')),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power RawExample.md\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Markdown\n"))),(0,l.kt)("h3",{id:"scala-test-snippets"},(0,l.kt)("inlineCode",{parentName:"h3"},"scala test")," snippets"),(0,l.kt)("p",null,"It is possible to run tests from ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," code blocks marked as ",(0,l.kt)("inlineCode",{parentName:"p"},"test"),". This is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"raw")," snippets in that the\ncode is not wrapped and is treated as is."),(0,l.kt)("p",null,"You can run ",(0,l.kt)("inlineCode",{parentName:"p"},"scala test")," code blocks with the ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," sub-command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=TestExample.md",title:"TestExample.md"},'# `test` example\nThis is a simple example of an `.md` file with a test Scala snippet.\n\n```scala test\n//> using dep org.scalameta::munit:0.7.29\nclass Test extends munit.FunSuite {\n  test("example test") {\n    assert(true)\n  }\n}\n```\n')),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power test TestExample.md\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Test:\n  + example test\n"))),(0,l.kt)("h3",{id:"reset-scope-for-scala-snippets"},(0,l.kt)("inlineCode",{parentName:"h3"},"reset")," scope for ",(0,l.kt)("inlineCode",{parentName:"h3"},"scala")," snippets"),(0,l.kt)("p",null,"When multiple plain ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," snippets are used in a single ",(0,l.kt)("inlineCode",{parentName:"p"},".md")," file, by default they are actually treated as a single\nscript. They share context and when run, are executed one after another, as if they were all in a single ",(0,l.kt)("inlineCode",{parentName:"p"},".sc")," file."),(0,l.kt)("p",null,"If you want a snippet to use a fresh context instead, you can rely on the ",(0,l.kt)("inlineCode",{parentName:"p"},"reset")," keyword. This allows you to start a\nfresh scope for the marked snippet (and any coming after it)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=ResetExample.md",title:"ResetExample.md"},'# `reset` scope\nThis is an example of an `.md` file with multiple `scala` snippets with separate scopes\n\n## Scope 1\n```scala\nval message = "Hello"\n```\n\n## Still scope 1, since `reset` wasn\'t used yet\n```scala\nprintln(message)\n```\n\n## Scope 2\n```scala reset\nval message = "world"\nprintln(message)\n```\n\n## Scope 3\n```scala reset\nval message = "!"\nprintln(message)\n```\n')),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power ResetExample.md\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello\nworld\n!\n"))),(0,l.kt)("h2",{id:"shebang-header-and-markdown-code-blocks"},(0,l.kt)("inlineCode",{parentName:"h2"},"shebang")," header and Markdown code blocks"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"shebang")," line in ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," code blocks inside a markdown input are always ignored.\nYou can use them (i.e. to give an example of their usage), but they do not change how the code is handled."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},'## Self executable Scala script\n```scala\n#!/usr/bin/env -S scala-cli shebang\nprintln("Hello world")\n```\n')),(0,l.kt)("h2",{id:"using-directives-and-markdown-code-blocks"},(0,l.kt)("inlineCode",{parentName:"h2"},"using")," directives and Markdown code blocks"),(0,l.kt)("p",null,"It is possible to define ",(0,l.kt)("inlineCode",{parentName:"p"},"using")," directives at the beginning of a ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," code block inside a markdown input.\nThis is supported for all ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," code block flavours."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"compile title=UsingDirectives.md",compile:!0,title:"UsingDirectives.md"},'# Using directives in `.md` inputs\n\n## `scala raw` example\n```scala raw\n//> using dep com.lihaoyi::pprint:0.8.0\nobject Printer {\n  def printHello(): Unit = pprint.pprintln("Hello")\n}\n```\n\n## Plain `scala` example\n```scala\n//> using dep com.lihaoyi::os-lib:0.8.1\nprintln(os.pwd)\n```\n\n## `scala test` example\n```scala test\n//> using dep org.scalameta::munit:1.0.0-M7\n\nclass Test extends munit.FunSuite {\n  test("foo") {\n    assert(true)\n    println("Hello from tests")\n  }\n}\n```\n## Relying on directives from other snippets\nDirectives from other snippets apply to the whole context.\nAs a result, nothing really stops you from using a dependency\nfrom an earlier code block.\n```scala\nPrinter.printHello()\npprint.pprintln("world")\n```\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"scala")," snippets inside of a Markdown input are not isolated. Each ",(0,l.kt)("inlineCode",{parentName:"p"},"using")," directive applies to the whole project's\ncontext. A directive defined in a later snippet within the same source may override another defined in an earlier one."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=OverriddenDirective.md",title:"OverriddenDirective.md"},"## 1\n\n```scala\n//> using scala 2.12.17\nprintln(util.Properties.versionNumberString)\n```\n\n## 2\n\n```scala\n//> using scala 2.13.10\nprintln(util.Properties.versionNumberString)\n```\n")),(0,l.kt)("p",{parentName:"admonition"},"In this example, the directive from the second ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," snippet will override the previous one and Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.10")," will\nbe used for both."),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power OverriddenDirective.md\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Compiling project (Scala 2.13.10, JVM)\nCompiled project (Scala 2.13.10, JVM)\n2.13.10\n2.13.10\n")))),(0,l.kt)("h2",{id:"referring-to-code-from-markdown"},"Referring to code from Markdown"),(0,l.kt)("h3",{id:"plain-scala-code-blocks"},"Plain ",(0,l.kt)("inlineCode",{parentName:"h3"},"scala")," code blocks"),(0,l.kt)("p",null,"Referring to code from plain ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," snippets in markdown requires using their package name.\nSimilarly to scripts, the package is inferred based on the relative path to the source file in your project."),(0,l.kt)("p",null,"You also have to point to the Scope under which the code is located.\nScopes are numbered according to their order in a given ",(0,l.kt)("inlineCode",{parentName:"p"},".md")," file (starting from 0 for the first plain ",(0,l.kt)("inlineCode",{parentName:"p"},"scala"),"\nsnippet): ",(0,l.kt)("inlineCode",{parentName:"p"},"Scope{scopeNumber}"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"snippetNumber")," is omitted for the first script code block (0). In other words,\nthe first scope is just ",(0,l.kt)("inlineCode",{parentName:"p"},"Scope"),", the second is ",(0,l.kt)("inlineCode",{parentName:"p"},"Scope1"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"Scope2")," and so on."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=src/markdown/Example.md",title:"src/markdown/Example.md"},'## Scope 0\n```scala\ndef hello: String = "Hello"\n```\n\n## Still scope 0, since `reset` wasn\'t used yet\n```scala\ndef space: String = " "\n```\n\n## Scope 1\n```scala reset\ndef world: String = "world"\n```\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Main.scala",title:"Main.scala"},'object Main extends App {\n  val hello = markdown.Example_md.Scope.hello\n  val space = markdown.Example_md.Scope.space\n  val world = markdown.Example_md.Scope1.world\n  println(s"$hello$space$world")\n}\n')),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power src Main.scala --enable-markdown --main-class Main\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello world\n"))),(0,l.kt)("h3",{id:"scala-raw-and-scala-test-code-blocks"},(0,l.kt)("inlineCode",{parentName:"h3"},"scala raw")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"scala test")," code blocks"),(0,l.kt)("p",null,"You can refer to code from ",(0,l.kt)("inlineCode",{parentName:"p"},"scala raw")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"scala test")," snippets as if they were the contents of a ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=RawSnippetToReferTo.md",title:"RawSnippetToReferTo.md"},'# `raw` snippet\n```scala raw\nobject Something {\n  def message: String = "Hello"\n}\n```\n')),(0,l.kt)(s.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power RawSnippetToReferTo.md -e 'println(Something.message)'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))))}u.isMDXComponent=!0}}]);