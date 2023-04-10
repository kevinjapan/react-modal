import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import AddTaskForm from '../Forms/AddTaskForm/AddTaskForm'
import EditProjectForm from '../Forms/EditProjectForm/EditProjectForm'
import DeleteProjectForm from '../Forms/DeleteProjectForm/DeleteProjectForm'


const init_project = {
    id:1,
    title:'Lorem ipsum dolor',
    author_id:31,
    start_date:1942,
    end_date:1946,
}
const init_tasks = [
    {id:1,title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id:2,title:'Lorem ipsum dolor sit amet.'},
    {id:3,title:'Lorem ipsum dolor, sit amet consectetur adipisicing.'},
]



const Home = props => {

    const [project,setProject] = useState(init_project)
    const [tasks,setTasks] = useState(init_tasks)
    const [show_add_modal,setShowAddModal] = useState(false)
    const [show_edit_modal,setShowEditModal] = useState(false)
    const [show_delete_modal,setShowDeleteModal] = useState(false)

    const add_task = props => {
        setShowAddModal(false)
    }
    const update_project = updated_project => {
        setShowEditModal(false)
    }
    const delete_project = props => {
        setShowDeleteModal(false)
    }

    return (
        <main className="border rounded m-3 p-2 px-3 sm:px-1">

            <div className="flex justify-between items-center px-5">
                
                <h1 className="text-3xl md:text-4xl">{project.title}</h1>

                <div className="m-3">
                    <button className="border rounded m-2 hover:bg-blue-100 p-1 px-2" onClick={() => setShowEditModal(true)}>Edit</button>
                    <button className="border rounded m-2 hover:bg-blue-100 p-1 px-2" onClick={() => setShowDeleteModal(true)}>Delete</button>
                </div>
            </div>

            <div className="md:flex md:p-10 gap-10">

                <section className="flex-initial order-last mx-auto w-8/12 md:w-3/12 m-5 mt-9 md:mt-16 border rounded border-slate-300 bg-white w-fit h-fit text-center">
                    <div className="text-2xl md:text-3xl p-3">Tasks</div>
                        <ul className="border-b">
                        {tasks.map((task,index) => (
                            <li key={task.id}
                                className="border-t leading-snug p-5">{task.id} - {task.title}</li>
                        ))}
                        </ul>
                        <button className="border rounded m-2 hover:bg-blue-100 p-1 px-2" 
                                onClick={() => setShowAddModal(true)}>Add Task</button>
                </section>

                <section className="flex-intial order-first w-12/12 md:w-9/12">
 
                    <p className="p-5 leading-snug">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugiat, mollitia vero minima rem alias! Placeat cumque necessitatibus nihil fugiat exercitationem iure sed. Adipisci quam culpa in est, doloremque asperiores nisi nemo fugit explicabo iste, tempora voluptatem consectetur quo vero ad reprehenderit expedita recusandae repudiandae obcaecati deserunt tenetur officia architecto! Maiores accusantium alias corporis similique reprehenderit, quidem excepturi eveniet veritatis at dignissimos provident eaque asperiores consectetur dolorem ad. Molestiae harum nulla expedita, facilis quo quisquam tenetur molestias sed, suscipit rerum sequi doloremque, earum fuga magni hic sit ducimus cupiditate quibusdam? Itaque iure, veritatis possimus numquam corporis voluptatum. Esse est molestiae sit incidunt veritatis, praesentium enim, dignissimos velit repellat, modi a. Temporibus at ullam facere provident, tempora numquam laborum iste placeat?
                    </p>

                    <p className="p-5 leading-snug">
                    Sint, eos aut amet laudantium atque cumque obcaecati dignissimos explicabo ipsa velit illo nisi. Quia quod assumenda dolorem obcaecati perspiciatis tempore expedita vero quibusdam laboriosam laborum harum accusantium dolore itaque nisi, quos non quae rem impedit. Ipsum exercitationem cumque explicabo. Dolores incidunt reprehenderit error animi, quae quod ipsa non nostrum esse alias dolore aliquam excepturi necessitatibus consequuntur aut, mollitia deserunt nemo, quis unde? Dolorem atque voluptas ad distinctio eligendi iure aut assumenda.
                    </p>

                </section>
            </div>

            {show_add_modal && (
                <Modal show={show_add_modal} close_modal={() => setShowAddModal(false)} >
                    <AddTaskForm onSubmit={add_task} close_modal={() => setShowAddModal(false)}/>
                </Modal>
            )}
            {show_edit_modal && (
                <Modal show={show_edit_modal} close_modal={() => setShowEditModal(false)}>
                    <EditProjectForm project={project} onSubmit={update_project} close_modal={() => setShowEditModal(false)}/>
                </Modal>
            )}
            {show_delete_modal && (
                <Modal show={show_delete_modal} close_modal={() => setShowDeleteModal(false)}>
                    <DeleteProjectForm onSubmit={delete_project} close_modal={() => setShowDeleteModal(false)}/>
                </Modal>
            )}

        </main>
    )
}

export default Home