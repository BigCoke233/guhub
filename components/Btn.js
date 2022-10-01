export default function Btn({ link, children }) {
    return <a href={link} className="btn
    px-3 py-2 border-2 border-slate-600 inline-block leading-5 shadow-sm mr-2 select-none
    hover:bg-slate-600 hover:text-white hover:shadow-md transition duration-300
    " target="_blank">{children}</a>
}