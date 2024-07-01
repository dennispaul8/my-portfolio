import './Hero.css'
import img from "../../../public/avatar.svg";
export const Hero = () => {

    return (

        <>
            <div className="hero-cont">
                <div className="hero-txt">
                    <h1>Front-End React Developer</h1>
                    <p className='hero-txt--about'>Hi, I'm Dennis. A passionate Front-end React <br /> Developer based in Nigeria. </p>
                   
                </div>

                <div className="hero-img-cont">
                    <img src={img} alt="avatar" />
                </div>
            </div>
        </>
    )
}