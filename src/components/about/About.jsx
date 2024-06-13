import './About.css'

export const About = () => {

    return (

        <>
            <div id='about' className="about-cont">
                <img src="../public/hero-devices.svg" alt="" />

                <div className="about-txt">
                    <h2 className='about-heading'>About Me</h2>
                    <p className='about-role'>Front-end Developer based in Nigeria </p>
                    <p className='about-name'>Hey, my name is Dennis, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>

                    <p className='about-stack'>My main stack currently is React.js in combination with Bootstrap CSS</p>
                </div>

            </div>
        </>
    )
}