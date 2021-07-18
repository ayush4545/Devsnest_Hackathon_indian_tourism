import React from 'react'
import MemberCard from './MemberCard'
import './css/about.css'
export default function Aboutus() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="mem-card-container">
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
            </div>
        </div>
    )
}
