export default function Tag({ color, children, link }){
    var classList = "tag inline-block text-sm py-0.5 px-1.5 rounded-sm select-none mr-1 transition-color duration-300";
    if(color!=null){
        classList = classList+' text-white bg-'+color
    }
    else if(link!=null){
        classList = classList+' font-semibold border-2 border-slate-600 hover:shadow hover:-translate-y-0.5'
    }
    else{
        classList = classList+' border-2 border-slate-600'
    }

    if(link!=null){
        return <a className={classList} href={link} target="_blank">{children}</a>
    }else{
        return <span className={classList}>{children}</span>
    }
}