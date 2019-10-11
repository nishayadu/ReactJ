import React, {Component} from 'react'

class Eventbind extends Component{
    constructor(props){
        super(props)
        this.state ={
            message:'Hello'
        }
    }
    clickHandeler() {
        this.setState({
            message:'Goodbye!'
        })

    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandeler.bind(this)}> Click </button>
            </div>
        )
    }
}

export default Eventbind