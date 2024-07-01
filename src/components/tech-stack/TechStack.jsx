import './TechStack.css'
import htmlicon from '../../../public/html-icon.svg'
import cssicon from '../../../public/css-icon.svg'
import jsicon from '../../../public/js-icon.svg'
import reacticon from '../../../public/react-icon.svg'
import bootstrapicon from '../../../public/bootstrap-icon.svg'
import vscodeicon from '../../../public/vscode-icon.svg'
import githubicon from '../../../public/github-icon.svg'

export const TechStack = () => {

    return (

        <>
            <div id='tech-stack' className="tech-stack-cont">

                <div className="tech-stack-txt">
                    <h2 className='tech-stack-heading'>My Tech Stack</h2>
                    <p className='tech-stack-tagline'> Technologies I’ve been working with recently</p>
                </div>

                <div className='tech-icons'> 
                                <img className='skill-img' src={htmlicon} />
                                <img className='skill-img' src={cssicon} />
                                <img className='skill-img' src={jsicon} />
                                <img className='skill-img' src={reacticon} />
                                <img className='skill-img' src={bootstrapicon} />
                                <img className='skill-img' src={vscodeicon} />
                                <img className='skill-img' src={githubicon} />
                        </div>
            </div>
        </>
    )
}