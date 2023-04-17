import introStyle from "./Intro.module.css"
import PDF from "../Images/Abhishek_Khanna_Resume.pdf"
// import myImage from "../Images/port-image.jpg"
import myImage from "../Images/myImgaess.png"

function Intro() {
    return (
        <div className={introStyle.container}>
            <div className={introStyle.intro_me} id="into_page">
                <div className={introStyle.intro_content}>
                    <span className={introStyle.spantag}>Hi, I am</span>
                    <h1 className={introStyle.htag}>Abhishek <span><i>Khanna</i> </span> </h1>
                    <h2>Full Stack Web Developer</h2>
                    <p>Very passionate , Enthusiastic and Dedicated towards my work</p>
                    <div className={introStyle.btns}>
                        <button> <a href={PDF} download >Download CV</a> </button>
                        <button> <a href="tel:8950931355">Contact me</a></button>
                    </div>
                </div>


                <div className={introStyle.my_image}>
                    <img src={myImage} alt="" />
                    {/* <img src="https://www.beyoung.in/blog/wp-content/uploads/2018/09/general-1.png" alt="" /> */}
                </div>
            </div>

        </div >
    )
}

export default Intro