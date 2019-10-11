import React,{Component} from 'react'
import './myStyles.css'

{/*class Stylesheet extends Component{
    render(){
        return(
            <div>
                <h1 className="primary">Stylesheets</h1>
            </div>
        )
    }
}*/}

function Stylesheet(props){
    let className = props.primary? 'primary' : ''
    return(
        <div>
            <h1 className={`${className} font-xl`}>StyleSheet</h1>
        </div>
    )
}
export default Stylesheet