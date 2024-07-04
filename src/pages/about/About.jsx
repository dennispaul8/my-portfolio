import './About.css'
import bootstrapicon from '../../../public/bootstrap-icon.svg'
import { Navbar } from '../../components/navbar/Navbar'

export const About = () => {

    return (

        <>
        <Navbar/>
            <div className="about-cont">
                <div className="about-cont--intro">
                    <h2 className="about-cont-intro--heading">About Me</h2>

                    <p className="about-cont-intro--txt">
                    The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. 
                    It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
                    </p>
                </div>

                <div className="about-cont--experience">
                    <h2 className="about-cont-experience--heading">Work Experience</h2>

                    <div className="work-exp">
                            <div className="role-cont">
                                <h3 className='role-cont--role'>Junior Web Developer</h3>

                                <button className='role-cont--contract'>Full Time</button>
                            </div>

                            <div className="role-location--cont">
                                <p className='role-employer'><div className='app-icon'><i class="bi bi-building"></i></div>Retink</p>

                                <p className='role-location'><div className='app-icon'><i class="bi bi-geo-alt-fill"></i></div>Bengaluru</p>

                                <p className='role-duration'><div className='app-icon'><i class="bi bi-calendar3"></i></div>Feb 2022 - Aug 2023</p>
                            </div>
                    </div>
                    
                    <hr />
                </div>

                <div className="about-cont--education">
                    <h2 className="about-cont-edu--heading">Education</h2>

                    <div className="edu">
                            <div className="edu-cont">
                                <h3 className='edu-cont--course'>B.SC. Information Technology</h3>

                                <button className='edu-cont--contract'>Full Time</button>
                            </div>

                            <div className="education-location--cont">
                                <p className='school'><div className='app-icon'><i class="bi bi-building"></i></div>University of Ilorin</p>

                                <p className='education-duration'><div className='app-icon'><i class="bi bi-calendar3"></i></div>Nov 2018 - Oct 2023</p>
                            </div>
                    </div>
                    
                    <hr />
                </div>
            </div>
        </>
    )
}