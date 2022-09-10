export default function Tag({ color, children, link }){
    var classList = "inline-block text-sm py-0.5 px-1.5 rounded-sm select-none mr-1 transition-color duration-300";
    if(color!=null){
        classList = classList+' text-white bg-'+color
    }
    else if(link!=null){
        classList = classList+' text-black font-semibold bg-slate-100 hover:bg-slate-200'
    }
    else{
        classList = classList+' bg-slate-100 text-black'
    }

    if(link!=null){
        return <a className={classList} href={link} target="_blank">{children}</a>
    }else{
        return <span className={classList}>{children}</span>
    }
}