import "./Contact.css"
import { useState } from "react";

function Contact() {
    let [state, setState] = useState();

    const SubmitForm = () => {
        alert("I will contact you soon");
        window.location.reload();
        setState("");
    }
    return (
        <div className="containers" id="contact_page">

            <h1>Contact <span>Me</span></h1>
            <div className="contact">
                <div className="contact-details">
                    <h2>Get In touch</h2>
                    <input type="text" placeholder="Name" /> <br /> <br />
                    <input type="email" placeholder="Email" /> <br /> <br />
                    <textarea id="txtarea" placeholder="Message"></textarea> <br /> <br />
                    <input type="submit" onClick={SubmitForm} id="submit" value="Send" />
                </div>

                <div className="myDetails">
                    <p><i class="fa-sharp fa-solid fa-location-dot"></i> &nbsp; Ambala Cantt, Harayana</p>
                    <p><i class="fa-solid fa-phone"></i> &nbsp; 8950931355</p>
                    <p><i class="fa-solid fa-envelope"></i> &nbsp;<span>abhikhanna2710@gmail.com</span></p>
                    <hr />
                    <br />
                    <div className="social_Links">
                        <a href="https://github.com/abhishekkhanna2710" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/abhishek-khanna-69159a225/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="mailto:abhikhanna2710@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact