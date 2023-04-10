import React, { useState } from 'react'
import { validate_string,validate_int } from '../../Utility/Validation/uiValidation'



const UpdateProjectForm = props => {

    const [id,setId] = useState(props.project.id)
    const [title,setTitle] = useState(props.project.title)
    const [author_id,setAuthorId] = useState(props.project.author_id)
    const [title_feedback,setTitleFeedback] = useState('')
    const [author_id_feedback,setAuthorIdFeedback] = useState('')

    const handleSubmit = e => {
        
        setTitleFeedback('')
        setAuthorIdFeedback('')

        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries());

        let validated = true
        if(!validate_string(formJson['title'],{'min_length':10,'max_length':250},setTitleFeedback)) {
            validated = false
        }
        if(!validate_int(formJson['author_id'],{},setAuthorIdFeedback)) {
            validated = false
        }
        if(validated) props.onSubmit(formJson)
    }

    return (
        <form onSubmit={handleSubmit}>

            <h5 className="text-xl mb-5">Edit Project</h5>

            <input type="hidden" name="id" value={id || ''} />

            <div className="flex justify-between">
                <label htmlFor="title" className="text-slate-400">Title</label>  
                <input name="title" 
                    className="border mx-3 px-2"
                    value={title || ''} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className={`h-5 mt-1 mb-3 text-slate-400 text-sm text-right ${title_feedback ? 'light_highlight' : ''}`}>
                <span className={`${title_feedback ? 'rounded px-1 bg-yellow-100' : ''}`}>{title_feedback}</span>
            </div>

            <div className="flex justify-between">
                <label htmlFor="author_id" className="text-slate-400">Author Id</label>
                <input name="author_id"
                    className="border mx-3 px-2"
                    value={author_id || ''} onChange={e => setAuthorId(e.target.value)} />
            </div>
            <div className={`h-5 mt-1 mb-3 text-slate-400 text-sm text-right ${author_id_feedback ? 'light_highlight' : ''}`}>
                <span className={`${author_id_feedback ? 'rounded px-1 bg-yellow-100' : ''}`}>{author_id_feedback}</span>
            </div>

            <div className="flex justify-center mt-7 mb-0">
                <button className="border rounded m-2 hover:bg-blue-100 p-1 px-2">apply</button>
                <button className="border rounded m-2 hover:bg-blue-100 p-1 px-2" onClick={()=>props.close_modal()}>cancel</button>
            </div>
    
        </form>
    )
}

export default UpdateProjectForm