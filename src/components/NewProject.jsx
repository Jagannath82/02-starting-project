import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();
    function handleSave(){
        const enterTitle = title.current.value;
        const enterDescription = description.current.value;
        const enterDueDate = dueDate.current.value;
        if(enterTitle === '' || enterDescription === '' || enterDueDate === ''){
            modal.current.open();
            return;
        }
        onAdd({
            title: enterTitle,
            description: enterDescription,
            dueDate: enterDueDate
        })
    }

    return <>
        <Modal ref={modal}>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-400 mb-4">Oops..Looks like you have entered a worng input</p>
        </Modal>
        <div className="w-[35rem] mt-16">
        <menu className="flex gap-4 justify-end items-center my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="py-2 px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-600">Save</button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" textArea />
            <Input type="date" ref={dueDate} label="Due Date" />
        </div>
    </div>
    </>
}