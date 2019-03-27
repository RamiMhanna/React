import React, { Component } from 'react'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    increment(){
        this.setState(prevState => ({
            count: prevState.count + 1
        })
    )}

    render(){
        return (
            <div>Count - {this.state.count}<button onClick={()=> this.incrementFive()}>increment</button></div>
        )
    }
}

export default Counter