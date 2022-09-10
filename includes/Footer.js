import moment from 'moment';
import { TbBrandNextjs, TbBrandReactNative, TbBrandVercel } from 'react-icons/tb';
import { ExL } from '/components'

export default function Footer(){
    return(
    <footer className="text-gray-400 text-sm text-center py-10 px-2">
        <p>bulit with&nbsp;
          <a href="https://github.com/facebook/react" title="React" target="_blank"><TbBrandReactNative/></a>&nbsp;
          <a href="https://nextjs.org/" title="Next.js" target="_blank"><TbBrandNextjs/></a>&nbsp;
          <a href="https://vercel.com/" title="Vercel" target="_blank"><TbBrandVercel/></a></p>
        <p>Made with <span className="text-red-600">♥</span> by Eltrac, inspired by <ExL link="https://spencerwoo.com/"><span className="text-sm">Spencer Woo</span></ExL></p>
        <p><a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a> &copy; {moment().format('YYYY')} Eltrac</p>
    </footer>
  )
}