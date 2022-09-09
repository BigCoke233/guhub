import { FiExternalLink } from "react-icons/fi";

export default function ExL({ link, children }) {
    return <a href={link} className="
    text-indigo-400 border-b border-gray-100 mx-0.5
    transition duration-300 hover:text-indigo-500
    " target="_blank"><span className="text-gray-300"><FiExternalLink/></span>{children}</a>
}