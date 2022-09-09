import Head from 'next/head';
import { Heading } from '/components';
import { Nav, Footer } from '/includes';

export default function Collections() {
    return (
      <div className="w-full">
        <Head>
          <title>Eltrac</title>
          <link rel="icon" href="/favicon.webp" />
          <meta charSet='utf-8' />
        </Head>
  
        <Nav />
  
        <main className="max-w-3xl mx-auto mt-12 mb-2 py-2 px-4">

          <Heading meta="个人比较喜欢的项目和网站">收藏夹</Heading>

          <section className="content">

            <p className="mt-7 mb-56">该页面还在装修中</p>


          </section>
  
        </main>

        <Footer/>
      </div>
    )
  }
  