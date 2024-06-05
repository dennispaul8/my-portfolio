import './Hero.css'

export const Hero = () => {

    return (

        <>
            <div className="hero-cont">
                <div className="hero-txt">
                    <h1>Front-End React Developer</h1>
                    <p className='hero-txt--about'>Hi, I'm Dennis. A passionate Front-end React <br /> Developer based in Nigeria. </p>
                    
                    
                    <div className="tech-stack--cont">
                    <p className='tech-stack--txt'>Tech Stack |</p>
                    <div className='skill-icons--cont'> 
                                <img className='html-js--skills' src="https://skillicons.dev/icons?i=html,js" />
                                <img className='bs-tw--skills' src="https://skillicons.dev/icons?i=bootstrap,tailwind" />
                                <img className='react--skill' src="https://skillicons.dev/icons?i=react,next" />
                        </div>
                        </div>
                </div>

                <div className="hero-img-cont">
                    <img src="../public/avatar.svg" alt="" />
                </div>

                {/* <div className='hero-device'>
                    <img src="../public/hero-devices.svg" alt="" />


                    <p align="center">
                        <a href="https://skillicons.dev">
                            <img src="https://skillicons.dev/icons?i=git,kubernetes,docker,c,vim" />
                        </a>
                    </p>

                </div> */}
            </div>
        </>
    )
}