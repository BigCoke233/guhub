export default function Btn({ link, children }) {
    return <a href={link} className="
    px-3 py-2 border border-gray-200 bg-gray-50 rounded-md inline-block leading-5 shadow-sm mr-2 select-none
    hover:bg-gray-100 hover:shadow transition duration-300
    " target="_blank">{children}</a>
}