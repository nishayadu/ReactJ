import React,{Component} from 'react'

class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state ={
         isLoggedIn: true   
        }
    }
    render(){
       {/*} if(this.state.isLoggedIn){
            return(
                <div>
                    Welcome User
                </div>
            )
        }
        else{
            return(
                <div>
                    Welcome Guest
                </div>
            )
        } */
   {/* let message
    if(this.state.isLoggedIn){
        message = <div>Welcome User </div>
    }
    else{
        message = <div>Welcome Guest </div>
    }
    return <div>{message}</div>
    } */}
    
    {/*return(

        this.state.isLoggedIn ? <div>Welcome User </div>:<div> Welcome Guest </div>
    ) */}

    return(
        this.state.isLoggedIn && <div> Welcome Vishwas </div>
    )
}     
    }
}
export default UserGreeting