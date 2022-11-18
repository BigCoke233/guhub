import moment from 'moment';
import { TbBrandNextjs, TbBrandReactNative, TbBrandVercel, TbBrandTailwind } from 'react-icons/tb'

export default function Footer(){
    return(
    <footer className="mb-10 mt-6 text-sm text-gray-500">
        <p>bulit with&nbsp;
          <a data-tippy-content="React" href="https://github.com/facebook/react" title="React" target="_blank" className="hover:text-black transition duration-3000"><TbBrandReactNative/></a>&nbsp;
          <a data-tippy-content="Next.js" href="https://nextjs.org/" title="Next.js" target="_blank" className="hover:text-black transition duration-3000"><TbBrandNextjs/></a>&nbsp;
          <a data-tippy-content="Vercel" href="https://vercel.com/" title="Vercel" target="_blank" className="hover:text-black transition duration-3000"><TbBrandVercel/></a>&nbsp;
          <a data-tippy-content="Tailwind.css" href="https://tailwindcss.com/" title="Tailwind" target="_blank" className="hover:text-black transition duration-3000"><TbBrandTailwind/></a></p>
        <p><a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a> &copy; 2019-{moment().format('YYYY')} Eltrac</p>
    </footer>
  )
}