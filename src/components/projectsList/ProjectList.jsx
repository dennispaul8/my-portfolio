import './ProjectList.css'
import mr_fresh_logo from '../../../public/mr-fresh-logo.jpeg'

export const ProjectsList = () => {

    return (

        <>
        <div className="plc">
                    <div className="mr_fresh-card">
                                    <img className="mr_fresh-card--img" src={mr_fresh_logo} alt="mr_fresh_logo"/>

                                    <div className="card-txt">
                                        {/* <h3>MR_FRESH Kitchen</h3> */}
                                        <p className='card-txt-info--cont'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                                        <p className='card-txt-stack--cont'>Tech stack :<span className='tech-stack'> HTML , JavaScript, SASS, React </span></p>
                                    </div>

                                    <div className="card-links">
                                    <a className='demo-link' target="_blank"  href="https://mr-fresh-kitchen.vercel.app/"> <div className='link-icon'><i class="bi-link"></i></div>Live Preview</a>
                                    <a className='code-link' target="_blank"  href="https://mr-fresh-kitchen.vercel.app/"><div className='github-icon'><i class="bi bi-github"></i></div>View Code</a>

                                    </div>
                                </div>
                </div>
                
        </>
    )
}