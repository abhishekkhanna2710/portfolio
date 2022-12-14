import aboutstyle from "./About.module.css"
import portimg2 from "../Images/port-img-2.png"

function About() {
    return (

        <div className={aboutstyle.container} id="about_page">
            <h1> About <span>Me</span></h1>
            <div className={aboutstyle.about_me}>
                <div className={aboutstyle.left_Img}>
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjOwwIe6mO1Jp1WNrPJZIuNBQl6A18CA1OC2Hdc8OXYGh5YnaMVLLHL9b2eBscRb4F4A&usqp=CAU" alt="" /> */}
                    <img src={portimg2} alt="" />
                </div>

                <div className={aboutstyle.about_content}>
                    <p>Hi! I am Abhishek Khanna and I am an aspiring Full Stack Web developer at Masai School.
                        <br />
                        As a developer I enjoy coding and Solving DSA problems. Moreover One of my strongest skills is creativity and it helps me a lot in web designs I have created various end to end website clone using MERN stack
                    </p>

                    {/* contact details */}
                    <div className={aboutstyle.details}>
                        <div className={aboutstyle.head}>
                            <h4>Name : </h4>
                            <h4>Phone : </h4>
                            <h4>Age : </h4>
                            <h4>Qualification : </h4>
                        </div>
                        <div className={aboutstyle.ans}>
                            <p>Abhishek Khanna</p>
                            <p>+91-8950931355</p>
                            <p>22 Years</p>
                            <p>Bachelor of Science</p>
                        </div>

                    </div>
                    <h3>My Interests</h3>
                    <div className={aboutstyle.interest}>
                        <p>Music</p>
                        <p>Travel</p>
                        <p>Movie</p>
                        <p>Photo</p>
                    </div>
                </div>
            </div>



        </div>
    )

}


export default About