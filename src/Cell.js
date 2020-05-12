import React, { Component } from 'react';
import Matrix from  './Matrix'

export default class Cell extends Component {

    constructor(props){
        super()
        this.state = {
            color: props.value 
        }
    }

    changeColor = () =>{
        console.log(`change color has be clicked`)

        this.setState({
            color: '#333' 
        })
    }


    render(){
        return(
            <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color }}>
        <td >{this.state.color}</td>
        </div>
        )
    }

}

