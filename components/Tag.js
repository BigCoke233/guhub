export default function Tag({ color, children }){
    var classList = "inline-block text-white text-sm py-0.5 px-1.5 rounded-sm select-none mr-1 bg-"+color;
    return <span className={classList}>{children}</span>
}