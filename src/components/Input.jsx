import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textArea, ...props }, ref ) {
    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold text-stone-500 uppercase">{label}</label>
        {textArea ? <textarea ref={ref} className="w-full border-b-2 p-1 border-stone-300 rounded-sm bg-stone-200 text-stone-600" {...props}></textarea> : 
        <input ref={ref} className="w-full border-b-2 p-1 border-stone-300 rounded-sm bg-stone-200 text-stone-600" {...props} />}
    </p>
});

export default Input;