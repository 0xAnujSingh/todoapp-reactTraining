import React, { useContext, useEffect } from 'react'
import studentContext from '../context/studentContext'

const Master = () => {
    const a=useContext(studentContext)
    useEffect(()=>{
        a.hello()
    })
  return (
    <div>
        the name of the student is {a.name}
        the name of the Employee is {a.employee.name}
        {a.hello()}
    </div>
  )
}

export default Master