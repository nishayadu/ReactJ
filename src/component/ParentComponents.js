import React,{Component} from 'react'
import RegComp from './RegularComponent';
import PureComp from './PureComponent';
import MemoComp from './MemoComp';

class Parentcomp extends Component{

    constructor(props){
        super(props)
        this.state={
           name:'Test' 
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'test1'
            })
        },2000)
    }
    render(){
        return(
            <div>
                Parent Component
              {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default Parentcomp