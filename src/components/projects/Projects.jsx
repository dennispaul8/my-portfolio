import './Projects.css'

export const Projects = () => {

    return (

        <>
            <div id='projects' className="projects-cont">
                <div className="projects-cont-heading">
                    <h3>Projects</h3>
                </div>

                <div className="projects-list">
                    <div className="mr_fresh">
                        <div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    {/* <img className="flip-box-front--img" src="../../../public/mr-fresh-logo.jpeg" alt="Paris"/> */}
                                </div>
                                <div class="flip-box-back">
                                    <a className='link' href="https://mr-fresh-kitchen.vercel.app/">Visit Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}