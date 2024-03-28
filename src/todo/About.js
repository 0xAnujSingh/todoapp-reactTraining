import React, { useContext } from 'react'
import studentContext from '../context/studentContext'
export const About = () => {
    const a=useContext(studentContext)
    return (
        <div>Hello this is About Component {a.subject}</div>
    )
}


