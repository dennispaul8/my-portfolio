
import './Contact.css'
import { SocialIcon } from 'react-social-icons'

export const Contact = () => {

    return (
        <>
            <div id='contact' className="contact-cont">
                <h2>Contact</h2>
                <div className="social-icons--cont">
                    <SocialIcon target="_blank" className='social-icons' url="https://www.twitter.com/dennis_icode" />
                    <SocialIcon target="_blank" className='social-icons' url="https://www.linkedin.com/in/oluwajuwonlo-ogunyemi/" />
                    <SocialIcon  target="_blank" className='social-icons' url="https://www.github.com/dennispaul8" />
                    <SocialIcon  target="_blank" className='social-icons' url="https://www.email.com/jusmepaul8@gmail.com" />
                </div>
            </div>
        </>
    )
}