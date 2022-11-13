import moment from 'moment';
import { TbBrandNextjs, TbBrandReactNative, TbBrandVercel, TbBrandTailwind } from 'react-icons/tb';
import { ExL } from '/components'

export default function Footer(){
    return(
    <footer className="mb-10 mt-6 text-sm text-gray-500">
        <p>bulit with&nbsp;
          <a href="https://github.com/facebook/react" title="React" target="_blank"><TbBrandReactNative/></a>&nbsp;
          <a href="https://nextjs.org/" title="Next.js" target="_blank"><TbBrandNextjs/></a>&nbsp;
          <a href="https://vercel.com/" title="Vercel" target="_blank"><TbBrandVercel/></a>&nbsp;
          <a href="https://tailwindcss.com/" title="Tailwind" target="_blank"><TbBrandTailwind/></a></p>
        <p><a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a> &copy; 2019-{moment().format('YYYY')} Eltrac</p>
    </footer>
  )
}