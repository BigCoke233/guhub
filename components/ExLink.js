import { FiExternalLink } from "react-icons/fi";

export default function ExL({ link, children }) {
    return <a href={link} className="exl
    text-slate-600 border-b border-gray-300 mx-0.5
    transition duration-300 hover:text-slate-800
    " target="_blank"><span className="text-gray-300"><FiExternalLink/></span>{children}</a>
}