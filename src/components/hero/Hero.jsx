import './Hero.css'

export const Hero = () => {

    return (

        <>
            <div className="hero-cont">
                <div className="hero-txt">
                  <h1>Front-End React Developer</h1>
                 <p className='hero-txt--about'>Hi, I'm Dennis. A passionate Front-end React <br /> Developer based in Nigeria. </p>
                 <p className='tech-stack--txt'>Tech Stack: <span>icons</span></p>
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