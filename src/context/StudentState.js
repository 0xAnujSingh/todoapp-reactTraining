import React, { useState } from 'react'
import StudentContext from './studentContext'

const StudentState = (props) => {
    const [student, setStudent] = useState({ name: 'Anuj', age: 22, subject: 'java', marks: 99 })
    const [employee, setEmployee] = useState({ name: 'Solanki', designation: 'manager', salary: 20000 })
    const hello = () => {
        console.log("Hello master dev")
        setTimeout(() => {
            setStudent({ name: 'Amitabh', age: 82, subject: 'acting', marks: 99 })
            setEmployee({ name: 'Hritik', designation: 'manager', salary: 20000 })
        }, 2000)
    }
   
    return (
        <StudentContext.Provider value={{ student, employee, hello }}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentState
