import moment from 'moment';
import Script from 'next/script';
import { TbBrandNextjs, TbBrandReactNative, TbBrandVercel } from 'react-icons/tb'

export default function Footer(){
    return(
    <footer className="text-gray-400 text-sm text-center py-10 px-1 bg-slate-50">

        <p><TbBrandReactNative/>/<TbBrandNextjs/> <TbBrandVercel/></p>
        <p>Powered by NextJS, Hosted by Vercel, Built with <span className="text-red-600">♥</span> by Eltrac</p>
        <p><a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a> &copy; {moment().format('YYYY')} Eltrac</p>

        <Script
        src="global.js"
        strategy="lazyOnload"
        />
    </footer>
  )
}