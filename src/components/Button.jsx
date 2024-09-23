export default function Button({children, ...props}){
    return <button className="py-2 px-4 text-stone-400 bg-stone-700 rounded-md hover:bg-stone-600" {...props}>{children}</button>
}