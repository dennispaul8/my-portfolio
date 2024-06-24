import './Projects.css'

export const Projects = () => {

    return (

        <>
            <div id='projects' className="projects-cont">
                <div className="projects-cont-heading">
                    <h3>Projects</h3>
                </div>

                <div className="projects-list">
                    <div className="mr_fresh-card">
                                    <img className="mr_fresh-card--img" src="../../../public/mr-fresh-logo.jpeg" alt="Paris"/>

                                    <div className="card-txt">
                                        {/* <h3>MR_FRESH Kitchen</h3> */}
                                        <p className='card-txt-info--cont'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                                        <p className='card-txt-stack--cont'>Tech stack :<span className='tech-stack'> HTML , JavaScript, SASS, React </span></p>
                                    </div>

                                    <div className="card-links">
                                    <a className='link' target="_blank"  href="https://mr-fresh-kitchen.vercel.app/">Live Preview</a>
                                    <a className='link' target="_blank"  href="https://mr-fresh-kitchen.vercel.app/">View Code</a>

                                    </div>
                                </div>
                </div>

            </div>
        </>
    )
}