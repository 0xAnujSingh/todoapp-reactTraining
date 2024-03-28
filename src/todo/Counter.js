import React, { useState, useReducer } from 'react'
import { Button, Container } from 'react-bootstrap'

const Counter = () => {
    function reducer(count, action){
        switch(action.type){
            case 'increment':
                return {acount:count.acount+1}
            case 'decrement':
                return {acount:count.acount-1}
            case 'reset':
                return {acount:0}
            default:
                return count
        }
    }
    const [count, dispatch] = useReducer(reducer, {acount:0})
    const incrementCount = () => {dispatch({type:'increment'})}
    const decrementCount = () => {dispatch({type:'decrement'}) }
    const resetCount =()=>{dispatch({type:'reset'})}
    
    return (

        <Container>
            <Button variant='danger' onClick={decrementCount}>-</Button>
            {count.acount}
            <Button variant='warning' onClick={incrementCount}>+</Button><br/>
            <Button variant='warning' onClick={resetCount}>Reset count</Button><br/>

        </Container>

    )
}

export default Counter