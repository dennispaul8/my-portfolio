import './Project.css'
import { Navbar } from '../../components/navbar/Navbar'

import { Footer } from '../../components/footer/Footer'
import { ProjectsList } from '../../components/projectsList/ProjectList'

export const Project = () => {

    return (

        <>
        <Navbar/>
        <div className="project-cont">
            <div className="project-cont--intro">
                    <h2 className="project-cont-intro--heading">Projects</h2>

                    <p className="project-cont-intro--txt">
                        Things I’ve built so far
                    </p>

                </div>

                <div className="plc">
                        <ProjectsList/>
                </div>
                </div>
            <Footer/>
        </>
    )
}