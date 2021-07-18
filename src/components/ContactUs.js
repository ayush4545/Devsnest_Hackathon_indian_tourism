import React from 'react'
import { useState } from 'react'
import './css/ContactUs.css'
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function ContactUs() {

    const [data,setdata]=useState(
        {
            fullname:"",
            email:"",
            phone:"",
            query:""
        }
    )

    function handleChange(e){

        setdata( {...data, [e.target.name]:e.target.value});
        e.preventDefault();

    }

    function handleSubmit(e){
        alert(JSON.stringify(data))
       
    }
    return (
            <div className="Container">

            <h1>CONTACT US</h1>
            <p className="msg">India has a myriad of landscapes, great heritage and culture, varied flora and fauna.<br/>
            Contact Us and We will more will be more happy to assist you.</p>
   
            <div className="wrapper">
                <div className="office">
                    <h2>Our Office</h2>
                    <CallIcon/> +91 xyz
                    <div className="addres">
                        Devsnest, <br/>
                        Stack Team,<br/>
                        Discord<br/>

                    </div>
                
                
                </div>
                    <form onSubmit={handleSubmit}>
                    <h2>Query Form</h2>

                    <label> Fullname</label> <br/>
                    <input type="text"  name="fullname" value={data.fullname} onChange={handleChange} required/><br/>

                    <label >Email</label><br/>
                    <input type="email" name="email" value={data.email} onChange={handleChange} required/><br/>

                    <label >Phone Number</label><br/>
                    <input type="number" name="phone" value={data.phone} onChange={handleChange}  required/><br/>

                    <label >Query</label><br/>
                    <textarea name="query" value={data.query} onChange={handleChange} required /><br/>

                    <input type="submit" />
                    </form>

                <div className="connect">
                    <h1>Connect US</h1>
                    <TwitterIcon/>
                    <br/>
                    <LinkedInIcon/>

                </div>
            </div>
        </div >

    )
}



export default ContactUs