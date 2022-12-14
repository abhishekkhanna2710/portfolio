import projectstyle from './Project.module.css'
import image1 from "../Images/bewkoof.png"
import image2 from "../Images/bookmyshow.png"
function Project() {
    return (
        <div className={projectstyle.container} id="project_page">
            <div className={projectstyle.projects} >
                <h1>My <span>Projects</span></h1>
                <div className={projectstyle.portfolio}>
                    <div className={projectstyle.proImg}>
                        <img src={image1} alt="bewkoof.com" />

                    </div>
                    <div className={projectstyle.procontent}>
                        <h2>Bewkoof.Com</h2>
                        <p>Bewkoof.Com is a beautiful Ecoomerce website which attracts users for Online purchasing. In this Website I have built Login - Sign up page and Payment Page & how its working in javascript with all functionality.</p>
                        <h4>There are 5 Collaborators in project and completed in 5 days</h4>
                        <div className={projectstyle.tech}>
                            <span>Tech Stack</span>
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

                {/*  */}
                <div className={projectstyle.portfolio}>
                    <div className={projectstyle.proImg}>
                        <img src={image2} alt="Book-my-Show" />
                    </div>
                    <div className={projectstyle.procontent}>
                        <h2>Book My show</h2>
                        <p>Book My show is a Movie Ticket Book App where audiences can book online tickets for their favourite Movies. In this Website I have built Login - Sign up page , Footer and Payment Page & Complete functionality.</p>
                        <h4>There are 5 Collaborators in project and completed in 5 days</h4>
                        <div className={projectstyle.tech}>
                            <span>Tech Stack</span>
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
            </div>
        </div >
    )
}

export default Project