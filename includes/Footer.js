import moment from 'moment';

export default function Footer(){
    return(
    <footer className="text-gray-400 text-sm mt-5">
        <p>Proudly powered by Next.js & Tailwind.css</p>
        <p>&copy; {moment().format('YYYY')} Eltrac, all rights reserved.</p>
    </footer>
  )
}