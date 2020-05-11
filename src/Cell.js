import React, {Component} from 'react';

class Cell extends Component {

    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    changeColor = () => {
        // const clickedColor = this.state.color = '#333'
        this.setState({
            color : '#333'
        })
    }

    render(){
        return(
            <div onClick={this.changeColor} className= "cell" style={{backgroundColor: this.state.color}}>
            </div>
        )
    }

}

export default Cell 