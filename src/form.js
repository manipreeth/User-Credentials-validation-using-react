import React,{Component} from 'react'
import ValidateUserInput from './validateUserinput'

class Signin extends Component{
 constructor(){
    super()
    this.state ={
      userName:'',
      passWord:'',
      submit: false
    }
  }

  handleUsernameChange=(event)=>{
    this.setState({
      userName:event.target.value
    })
  }
  
 handlePasswordChange=(event)=>{
    this.setState({
      passWord:event.target.value
    })
  }

  handleSubmit =()=>{
    this.setState({
      submit:true
    })
  }

  render(){
    return(
      <div>
      {this.state.submit === false ?   

      <div className='mainform'>

        <form>
          <input type='text' value={this.state.userName}
           onChange={this.handleUsernameChange} placeholder="Enter UserName"/><br/>
          <input type='text' value={this.state.passWord}
          onChange={this.handlePasswordChange} placeholder="Enter Password"/>
        </form>
          <button value={this.state.submit} onClick={this.handleSubmit}>
          Submit</button>
        
      </div>  : ""
      }

        <div>
        { 
          this.state.submit===true ?
           <ValidateUserInput userName={this.state.userName} passWord={this.state.passWord} submit={this.state.submit}/>
           : ""
        }
        </div>
      </div>
    )
  }
}
export default Signin;