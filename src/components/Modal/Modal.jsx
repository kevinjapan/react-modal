import React, { useEffect } from 'react'



const Modal = props => {


    // to do : disable this - only js i am adding explicitly - test w/ ipad.
    //          if it is the issue - try alternative or remove.

    // disable body scroll
    useEffect(() => {
        // if(props.show) document.body.classList.add('modal_is_active')
        // return () => {
        //     document.body.classList.remove('modal_is_active')
        // }
    },[])

    return (
        props.show && (
            <div className="modal_overlay" onClick={()=>props.close_modal()}>
                <div className="modal px-10 py-3" onClick={e => e.stopPropagation()}>
                    {props.children}
                </div>
            </div>
        )
    )
}

export default Modal