import projectstyle from './Project.module.css'
import image1 from "../Images/bewkoof.png"
import image2 from "../Images/bookmyshow.png"
import image3 from "../Images/zoom_car.png"
import image4 from "../Images/properto.jpg"
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
                        <p>Properto is a ultimately MERN based Application which is fully functional & dynamic website. Basically it performs complex CRUD operations for property Management. Moreover it has also Admin panel page</p>
                        <h4>This is my Individual Project which completed within a week</h4>
                        <div className={projectstyle.tech}>
                            <span><b> Tech Stack</b></span>
                            <div style={{ display: "flex", flexWrap: 'wrap' }}>

                                <p>Refine</p>
                                <p>Express Js</p>
                                <p>Node Js</p>
                                <br />
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
                        <img src={image3} alt="Book-my-Show" />
                    </div>
                    <div className={projectstyle.procontent}>
                        <h2>Zoom Car (IIIrd Price)</h2>
                        <p>Zoomcar, is an Indian self-drive car rental company with a pro version of the original Website. Here we can rent and purchase new and old cars.</p>
                        <h4>This is a collaborative project created by 4 other team members in 6 days</h4>
                        <div className={projectstyle.tech}>
                            <span><b> Tech Stack</b></span>
                            <div style={{ display: "flex" }}>

                                <p>HTML</p>
                                <p>CSS</p>
                                <p>React</p>
                                <p>React Redux</p>
                            </div>
                        </div>

                        <div className={projectstyle.buttons}>
                            <a href="https://github.com/abhishekkhanna2710/ZoomCar" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="https://zoomcarpro.netlify.app/" target="_blank"><i class="fa-solid fa-eye"></i></a>
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
                            <div style={{ display: "flex" }}>

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