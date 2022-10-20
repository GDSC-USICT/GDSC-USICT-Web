
import React from 'react'
import "react-router-dom";
import "./css/footer.css";

function Footer() {
    return (
        <div className= "footerr">
        <div className="main1">
        <div>
            <img style={{height:"125px"}} id="logo" src="/Images/logo.png" alt="" />
        </div>
        <div className="QuickLinks">
            <h1 className='footerHeading' >Quick Links</h1>
            <ul>
            <li><a href="/" class="None" >Chapters</a></li>
            <li><a href="/" class="None" >Upcoming events</a></li>
            <li><a href="/" class="None" >About GDSC</a></li>
            <li><a href="/" class="None" target="_blank">Lead Terms</a></li>
            <li><a href="/" class="None" >Participation Terms</a></li>
            <li><a href="/" class="None" >Privacy</a></li>
            <li><a href="/" class="None" >Terms</a></li>
            </ul>
        </div>
        <div className="social">
           <h1 className='footerHeading'>Socials</h1>
           <a href='https://www.instagram.com/googledevs/' target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt=""/></a>
           <a href='https://twitter.com/googledevs' target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt=""/></a>
           <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFCwUnlCTabEAAAAYP0Qz3YW8rgDHi8cz4xGcAraQkaxMgQG58DR1FHSL32FSW--LfTVNwhmi2SDLjFEeFwXzTBg4CVLkSQwwQ2x5iosgWIC64YqjbZo2fIOH_XDasXTFrVDQM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgoogledevelopers%2F' target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/ios-filled/50/000000/linkedin-2--v1.png" alt=""/></a>
           <a href='https://www.facebook.com/googledevelopers/' target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/ios-filled/50/000000/facebook-f.png" alt=""/></a>
           <a href='https://www.youtube.com/googledevelopers' target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt=""/></a>
        </div>
        
        </div>

        <div className="main2">
        <div class="copyright">
                            &copy; 2022
                            Google
                        </div>
        </div>
        </div>

    )
}

export default Footer
