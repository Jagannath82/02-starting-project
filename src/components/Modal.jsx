import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom"
import Button from "./Button";
const Modal = forwardRef(function Modal({children}, ref){
    const modal = useRef();
    useImperativeHandle(ref, () => {
        return{
            open(){
                modal.current.showModal();
            }
        };
    });
    return createPortal(<dialog ref={modal} className="backdrop:bg-stone-800/90 p-2 rounded-sm">
        {children}
        <form className="mt-2 text-right">
            <Button>Close</Button>
        </form>
    </dialog>, document.getElementById("modal-root"));
});
export default Modal;