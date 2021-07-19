import React from 'react'
import MemberCard from './MemberCard'
import members from '../member';
import './css/about.css'
export default function Aboutus() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="mem-card-container">
                {members.map((member,index)=>{
                    return (
                        <MemberCard key={index} name={member.name} image={member.image} linkedIn={member.linkedIn} instagram={member.instagram} github={member.github} />
                    )
                })}
            </div>
        </div>
    )
}
