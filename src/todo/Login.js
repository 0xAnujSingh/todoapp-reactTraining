import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    // const clickHandler=()=>{
    //     console.log("the submit button has been clicked")
    // }
    const navigate = useNavigate()
    const [user, setUser] = useState({ username: 'anuj', password: '123' })
    const [success, setSuccess] = useState(true)  // Login failure vala part
    const clickHandler = (e) => {
        e.preventDefault();
        //     console.log('the submit button has been clicked')
        //     console.log('the name is ' + user.username + ' password ' + user.password)
        if (user.username === 'anuj' && user.password === '123') {
            console.log('valid login')
            props.login(user.username)
            setSuccess(true)
            navigate("/welcome", { state: { name: user.username, message: "Hello Anuj" } })
        }
        else {
            console.log('invalid login')
            setSuccess(false)
            setTimeout(() => {
                setSuccess(true)
            }, 3000)
        }
    }
    const changeHandler = (e) => {
        // console.log('change happeing'+e.target.name)
        // console.log('change value'+e.target.value)
        //setSuccess(true)
        setUser({ ...user, [e.target.name]: e.target.value })  //this line only permit us to change in username or pass
    }
    return (
        <div className='container mx-2 my-3  ' style={{ width: '50%', justifyContent: 'center' }} >
            <Form>
                {/* {success && <Alert color='success'>Login Successful</Alert>} */}


                <FormGroup>
                    <Label for="exampleUsername">
                        Email
                    </Label>
                    <Input
                        id="exampleUsername"
                        name="username"
                        placeholder="with a placeholder"
                        type="text"
                        value={user.username}
                        onChange={changeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                        value={user.password}
                        onChange={changeHandler}

                    />
                </FormGroup>
                <Button color="danger" onClick={(e) => { clickHandler(e) }}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login

