import projectstyle from './Project.module.css'
import image1 from "../Images/bewkoof.png"
import image2 from "../Images/bookmyshow.png"
import image3 from "../Images/zoom_car.png"
import image4 from "../Images/properto.jpg"
import image5 from "../Images/bmi_image.png"

function Project() {
    return (
        <div className={projectstyle.container} id="project_page">
            <div className={projectstyle.projects} >
                <h1>My <span>Projects</span></h1>

                {/* Properto DashBoard*/}
                <div className={projectstyle.portfolio}>
                    <div className={projectstyle.proImg}>
                        <img src={image4} alt="Properto" />
                    </div>
                    <div className={projectstyle.procontent}>
                        <h2>Properto (DashBoard)</h2>
                        <p> Properto is an Individually MERN Stack application based on Property Management System . It basically perform complex CRUD operations. It is fully functional & dynamic website. Moreover it has also Admin panel page</p>
                        <h4>This is my Individual Project which completed within 10 days</h4>
                        <div className={projectstyle.tech}>
                            <span><b> Tech Stack</b></span>
                            <div style={{ display: "flex", flexWrap: 'wrap' }}>

                                <p>Refine</p>
                                <p>Express Js</p>
                                <p>Node Js</p>
                                {/* <br /> */}
                                <p>MongoDB</p>
                                <p>Cloudinary</p>
                            </div>
                        </div>

                        <div className={projectstyle.buttons}>
                            <a href="https://github.com/abhishekkhanna2710/Dashboard" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="https://propertodashboard.netlify.app/" target="_blank"><i class="fa-solid fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                {/* Zoom car pro*/}
                <div className={projectstyle.portfolio}>
                    <div className={projectstyle.proImg}>
                        <img src={image3} alt="zoom car" />
                    </div>
                    <div className={projectstyle.procontent}>
                        <h2>Zoom Car (IIIrd Price)</h2>
                        <p>Built a Full-Stack Zoom Car Pro Application Using MERN Technologies to Offer Seamless Car Rental Experience. It provides reliable performance and efficient data management. This is my Individual Project.</p>
                        <h4>Implemented complete Backend into this, individually</h4>
                        <div className={projectstyle.tech}>
                            <span><b> Tech Stack</b></span>
                            <div style={{ display: "flex", flexWrap: 'wrap' }}>

                                <p>React</p>
                                <p>React Redux</p>
                                <p>MongoDb</p>
                                <p>Node Js</p>
                                <p>Express JS</p>
                            </div>
                        </div>

                        <div className={projectstyle.buttons}>
                            <a href="https://github.com/abhishekkhanna2710/ZoomCar" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="https://zoomcarpro.netlify.app/" target="_blank"><i class="fa-solid fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                {/* Zoom car pro*/}
                <div className={projectstyle.portfolio}>
                    <div className={projectstyle.proImg}>
                        <img src={image5} alt="zoom car" />
                    </div>
                    <div className={projectstyle.procontent}>
                        <h2>BMI Calculator</h2>
                        <p>Developed a BMI Calculator web application using MERN stack
                            technologies and integrated with the BMI formula to provide accurate results based on user inputs.This is my Individual Project.</p>
                        <h4>Implemented Authentication, BMI Calculation, BMI Data</h4>
                        <div className={projectstyle.tech}>
                            <span><b> Tech Stack</b></span>
                            <div style={{ display: "flex", flexWrap: 'wrap' }}>

                                <p>React</p>
                                <p>MongoDb</p>
                                <p>Node Js</p>
                                <p>Express JS</p>
                            </div>
                        </div>

                        <div className={projectstyle.buttons}>
                            <a href="https://github.com/abhishekkhanna2710/BMI_Calculator" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="https://bmicalcultor.netlify.app/" target="_blank"><i class="fa-solid fa-eye"></i></a>
                        </div>
                    </div>
                </div>

                {/* Book My show */}

                <div className={projectstyle.portfolio}>
                    <div className={projectstyle.proImg}>
                        <img src={image2} alt="Book-my-Show" />
                    </div>
                    <div className={projectstyle.procontent}>
                        <h2>Book My show</h2>
                        <p>Book My show is a Movie Ticket Book App where audiences can book online tickets for their favourite Movies. In this Website I have built Login - Sign up page , Footer and Payment Page & Complete functionality.</p>
                        <h4>There are 5 Collaborators in project and completed in 5 days</h4>
                        <div className={projectstyle.tech}>
                            <span><b> Tech Stack</b></span>
                            <div style={{ display: "flex", flexWrap: 'wrap' }}>

                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Javasript</p>
                            </div>
                        </div>

                        <div className={projectstyle.buttons}>
                            <a href="https://github.com/Vidisha-Khalpada/BookMyShow" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="https://bookmyshowclone-9.netlify.app/" target="_blank"><i class="fa-solid fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                {/* Bewkoof.com */}
                <div className={projectstyle.portfolio}>
                    <div className={projectstyle.proImg}>
                        <img src={image1} alt="bewkoof.com" />

                    </div>
                    <div className={projectstyle.procontent}>
                        <h2>Bewkoof.Com</h2>
                        <p>Bewkoof.Com is a beautiful Ecoomerce website which attracts users for Online purchasing. In this Website I have built Login - Sign up page and Payment Page & how its working in javascript with all functionality.</p>
                        <h4>There are 5 Collaborators in project and completed in 4 days</h4>
                        <div className={projectstyle.tech}>
                            <span><b> Tech Stack</b></span>
                            <div style={{ display: "flex" }}>

                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Javasript</p>
                            </div>
                        </div>

                        <div className={projectstyle.buttons}>
                            <a href="https://github.com/DenishFuletra/ProjectBewkoof" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="https://bewkoofclone.netlify.app/" target="_blank"><i class="fa-solid fa-eye"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Project