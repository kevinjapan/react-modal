import React from 'react'



const DeleteProjectForm = props => {

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries());
        props.onSubmit(formJson)
    }

    return (
        <form onSubmit={handleSubmit} className="">

            <h5 className="text-xl mb-5">Delete Project</h5>

            <p>Are you sure you wish to delete this Project?</p>

            <input name="project_slug" type="hidden" value="" />

            <div className="flex justify-center mt-7 mb-0">
                <button className="border rounded m-2 hover:bg-blue-100 p-1 px-2">apply</button>
                <button className="border rounded m-2 hover:bg-blue-100 p-1 px-2" onClick={()=>props.close_modal()}>cancel</button>
            </div>
            
        </form>
    )
}


export default DeleteProjectForm