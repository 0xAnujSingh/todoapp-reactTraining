import React, { useState } from 'react'
import { Location, useLocation } from 'react-router-dom'
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const Welcome = () => {
    const location=useLocation();
    const [message, setMessage]=useState("")
    const clickHandler=async()=>{
        // const welcomeMessages=[
        //     {id:1, message:'you are doing well'},
        //     {id:2, message:'Hello'},
        //     {id:3, message:'Bonjur'},
        //     {id:4, message:'Ram ram'},
        //     {id:5, message:'Namastey'},
            
        // ]

        const data=await fetch("http://localhost:5000/message")
        const parseData=await data.json()

        var randNum = Math.floor(Math.random()*4)+1
        setMessage(parseData[randNum].message)
    }
    return (
    <Container>
        <h3>Hello {location.state.message} your login is successful<Link to="/todos">Click here</Link></h3>
        {/* <h5>{location.state.message}</h5> */}
        <p style={{color:'red'}}>{message}</p>
        {/* <button onClick={clickHandler}>Click here</button> */}
    </Container>
  )
}

export default Welcome