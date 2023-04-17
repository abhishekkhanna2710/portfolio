import aboutstyle from "./About.module.css"
import portimg2 from "../Images/port-img-2.png"
// import myNewImage from "../Images/my_new_Image.png"
import myNewImage from "../Images/CourtNewImage.png"

function About() {
    return (

        <div className={aboutstyle.container} id="about_page">
            <h1> About <span>Me</span></h1>
            <div className={aboutstyle.about_me}>
                <div className={aboutstyle.left_Img}>
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjOwwIe6mO1Jp1WNrPJZIuNBQl6A18CA1OC2Hdc8OXYGh5YnaMVLLHL9b2eBscRb4F4A&usqp=CAU" alt="" /> */}
                    <img src={myNewImage} alt="" />
                </div>

                <div className={aboutstyle.about_content}>
                    <p>A Web Designer turned <b>MERN Stack Web Developer</b> with problem solving mindset, passionate Engineer and keen to learn new technologies and frameworks. Experienced in working on various projects through remote collaboration & Individually and looking forward to challenge my skills and contribute to the organization to give the best.
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
                        <p>Travelling</p>
                        <p>Movies</p>
                        <p>Books</p>
                    </div>
                </div>
            </div>



        </div>
    )

}


export default About;