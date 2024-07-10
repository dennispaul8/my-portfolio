import { ProjectsList } from '../projectsList/ProjectList'
import './Projects.css'

export const Projects = () => {

    return (

        <>
            <div id='projects' className="projects-cont">
                <div className="projects-cont-heading">
                    <h3 className='projects-heading'>Projects</h3>

                    <p className='projects-tagline'>Things I’ve built so far</p>
                </div>

                <div className="projects-list">
                    <ProjectsList/>
               </div>

            </div>
        </>
    )
}