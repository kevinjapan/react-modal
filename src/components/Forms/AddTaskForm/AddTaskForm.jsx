import React, { useState } from 'react'
import { validate_string,validate_int } from '../../Utility/Validation/uiValidation'



const AddTaskForm = props => {

    const [title_feedback,setTitleFeedback] = useState('')
    const [author_id_feedback,setAuthorIdFeedback] = useState('')
    const [outline_feedback,setOutlineFeedback] = useState('')

    const handleSubmit = e => {
        
        setTitleFeedback('')
        setAuthorIdFeedback('')
        setOutlineFeedback('')

        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries());

        let validated = true

        if(!validate_string(formJson['title'],{'min_length':6,'max_length':120},setTitleFeedback)) {
            validated = false
        }
        if(!validate_int(formJson['author_id'],{},setAuthorIdFeedback)) {
            validated = false
        }
        if(!validate_string(formJson['outline'],{'min_length':10,'max_length':500},setOutlineFeedback)) {
            validated = false
        }
        if(validated) props.onSubmit(formJson)
    }

    return (
        <form onSubmit={handleSubmit}>

            <h5 className="text-xl mb-5">Add Task</h5>

            <div className="flex justify-between">
                <label htmlFor="title" className="text-slate-400">Title</label>  
                <input name="title" 
                    className="border mx-3 px-2"
                    placeholder=""/>
            </div>
            <div className={`h-5 mt-1 mb-3 text-slate-400 text-sm text-right ${title_feedback ? 'light_highlight' : ''}`}>
                <span className={`${title_feedback ? 'rounded px-1 bg-yellow-100' : ''}`}>{title_feedback}</span>
            </div>

            <div className="flex justify-between">
                <label htmlFor="author_id" className="text-slate-400">Author Id</label>
                <input name="author_id" 
                    className="border mx-3 px-2"
                    placeholder=""/>
            </div>
            <div className={`h-5 mt-1 mb-3 text-slate-400 text-sm text-right ${author_id_feedback ? 'light_highlight' : ''}`}>
                <span className={`${author_id_feedback ? 'rounded px-1 bg-yellow-100' : ''}`}>{author_id_feedback}</span>
            </div>

            <div className="flex justify-between">
                <label htmlFor="outline" className="text-slate-400">Outline</label>
                <input name="outline" 
                    className="border mx-3 px-2"
                    placeholder=""/>
            </div>
            <div className={`h-5 mt-1 mb-3 text-slate-400  text-sm text-right`}>
                <span className={`${outline_feedback ? 'rounded px-1 bg-yellow-100' : ''}`}>{outline_feedback}</span>
            </div>

            <div className="flex justify-center mt-7 mb-0">
                <button className="border rounded m-2 hover:bg-blue-100 p-1 px-2">apply</button>
                <button className="border rounded m-2 hover:bg-blue-100 p-1 px-2" onClick={()=>props.close_modal()}>cancel</button>
            </div>
    
        </form>
    )
}


export default AddTaskForm