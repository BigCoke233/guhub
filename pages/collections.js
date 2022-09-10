import { Heading, ExL, Card, Tag } from '/components';
import { SiPixabay, SiNotion } from 'react-icons/si'
import { BsTranslate, BsEmojiSunglassesFill, BsSpeedometer } from 'react-icons/bs'

function Content({ title, children }) {
  return (
    <section className="content md:flex flex-row flex-nowrap my-6">
      <h2 className="font-bold flex-shrink-0 my-3 md:my-0 text-xl md:text-md">{title}</h2>
      <article className="font-normal md:pl-3 flex-grow">{children}</article>
    </section>
  );
}

export default function Collections() {
    return (
        <main className="max-w-3xl mx-auto mt-12 mb-2 py-2 px-4">

          <Heading meta="个人比较喜欢的项目和网站">收藏夹</Heading>

          <section className="content">

            <Content title="友情链接">
              请到我博客的<ExL link="https://blog.guhub.cn/pals.html">友人</ExL>页面查看友情链接，后续会将友情链接搬到这个页面
            </Content>

            <Content title="我的项目">
              <div className="flex flex-wrap gap-y-2">
                <Card size="small" text="textretty.css" des="前端文字排版方案"
                      link="https://github.com/BigCoke233/textretty.css">
                  ✒️
                </Card>
                <Card size="small" text="toaster.js" des="简洁的弹出提示框"
                      link="https://github.com/BigCoke233/toaster.js">
                  🍞
                </Card>
                <Card size="small" text="Mirecho" des="基于 GitHub 的纯静态博客程序"
                      link="https://github.com/BigCoke233/Mirecho">
                  📚
                </Card>
                <Card size="small" text="Matcha 主题" des="简洁的 Typecho 主题" tag="Typecho"
                      link="https://github.com/BigCoke233/matcha">
                  🍵
                </Card>
                <Card size="small" text="Miracles 主题" des="大气且强大的 Typecho 主题" tag="Typecho"
                      link="https://github.com/BigCoke233/miracles">
                  🎉
                </Card>
                <Card size="small" text="BracketDown 插件" des="Typecho 编辑器语法拓展插件" tag="Typecho"
                      link="https://github.com/BigCoke233/typecho-plugin-BracketDown">
                  📖
                </Card>
                <Card size="small" text="CopyDog 插件" des="Typecho 文字版权声明插件" tag="Typecho"
                      link="https://github.com/BigCoke233/typecho-plugin-CopyDog">
                  🐶
                </Card>
                <Card size="small" text="Adams 主题" des="移植自 Wordpress 同名主题" tag="Typecho"
                      link="https://github.com/BigCoke233/adams">
                  🍀
                </Card>
              </div>
            </Content>

            <Content title="翻译项目">
                <Card size="small" text="小花的时间机器" des="Undertale 在线文档编辑器" tag="网页"
                      link="https://bigcoke233.github.io/FloweysTimeMachine/">
                  🌻
                </Card>
            </Content>

            <Content title="实用工具">
                <p className="leading-8">
                  <Tag link="https://tool.lu/"><SiPixabay/> Pixabay <small className="font-normal">高质量免费图片素材</small></Tag>
                  <Tag link="https://www.deepl.com/translator"><BsTranslate/> DeepL <small className="font-normal">基于 AI 的机器翻译</small></Tag>
                  <Tag link="https://shields.io/">Shields <small className="font-normal">生成 GitHub 徽章</small></Tag>
                  <Tag link="https://emoji.muan.co/#"><BsEmojiSunglassesFill/> Emoji Searcher <small className="font-normal">快速获取 Emoji</small></Tag>
                  <Tag link="https://pagespeed.web.dev/"><BsSpeedometer /> PageSpeed Insight <small className="font-normal">谷歌的网页测速工具</small></Tag>
                  <Tag link="https://tool.lu/">在线工具 <small className="font-normal">tool.lu</small></Tag>
                  <Tag link="https://learn-english.dev/">程序员英语词汇宝典 <small className="font-normal">必备的计算机术语</small></Tag>
                  <Tag link="https://www.notion.so/"><SiNotion/> Notion <small className="font-normal">强大的笔记应用</small></Tag>
                </p>
            </Content>

          </section>
  
        </main>
    )
  }
  