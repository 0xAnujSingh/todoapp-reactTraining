import React, { useState } from 'react'
import { Container } from 'reactstrap'
import { useReducer } from 'react'


const Reducer = () => {
    // const [count, setCount] = useState(0)
    // const increment = () => {
    //     setCount(count + 1)
    // }
    // const decrement = () => {
    //     setCount(count - 1)
    // }
    const ACTIONS = {
        INCREMENT: 'increment',
        DECREMENT: 'decrement'

    }
    function reducer(state, action) {

        switch (action.type) {
            case ACTIONS.INCREMENT:
                return { count: state.count + 1 }
            case ACTIONS.DECREMENT:
                return { count: state.count - 1 }
            default:
                return state
        }
    }
    //dispatch is function
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    function increment() {
        dispatch({ type: ACTIONS.INCREMENT })
    }
    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }
    return (
        // <Container>
        //     <button onClick={increment}>increment</button>
        //     <span>{count}</span>
        //     <button onClick={decrement}>decrement</button>
        // </Container>

        <Container>
            <button onClick={increment}>increment</button>
            <span>{state.count}</span>
            <button onClick={decrement}>decrement</button>
        </Container>
    )
}
export default Reducer