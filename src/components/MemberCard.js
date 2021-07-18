import React from 'react';
import './css/member.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
export default function MemberCard() {

    return (
            <div className="mem-card">
                <img src="images/person.png" alt="person-img"/>
                <h2>Nikhil Singh</h2>
                <div className="links">
                    <LinkedInIcon style={{fontSize: 50}}/>
                    <GitHubIcon style={{fontSize: 40}}/>
                    <InstagramIcon style={{fontSize: 50}}/>
                </div>
        </div>
    )
}
