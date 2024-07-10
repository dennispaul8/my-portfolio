import './Technologies.css'
import { Navbar } from '../../components/navbar/Navbar'
import htmlicon from '../../../public/html-icon.svg'
import cssicon from '../../../public/css-icon.svg'
import jsicon from '../../../public/js-icon.svg'
import reacticon from '../../../public/react-icon.svg'
import bootstrapicon from '../../../public/bootstrap-icon.svg'
import vscodeicon from '../../../public/vscode-icon.svg'
import githubicon from '../../../public/github-icon.svg'
import { Footer } from '../../components/footer/Footer'

export const Technologies = () => {

    return (

        <>
        <Navbar/>
            <div className="tech-cont">
            <div className="tech-cont--intro">
                    <h2 className="tech-cont-intro--heading">My Tech Stack</h2>

                    <p className="tech-cont-intro--txt">
                         Technologies I’ve been working with recently
                    </p>
                </div>

                    <div className='techstack-icons'> 
                                <img className='skill-icon' src={htmlicon} />
                                <img className='skill-icon' src={cssicon} />
                                <img className='skill-icon' src={jsicon} />
                                <img className='skill-icon' src={reacticon} />
                                <img className='skill-icon' src={bootstrapicon} />
                                <img className='skill-icon' src={vscodeicon} />
                                <img className='skill-icon' src={githubicon} />
                        </div>
            </div>
            <Footer/>
        </>
    )
}