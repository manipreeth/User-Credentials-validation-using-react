import React,{Component} from 'react'
import ValidUser from './validUser'
import NotvalidUser from './notValidUser'

class ValidateUserInput extends Component{

  render(props){
    const userName = 'manipreeth_13';
    const passWord = '123456789@abc';

    const UserInputName = this.props.userName;
    const UserInputpassWord = this.props.passWord;
    const submit =this.props.submit;
    return(
      <div> 
      
        {
        (UserInputName === userName && UserInputpassWord === passWord )
        ? <ValidUser/> : <NotvalidUser submission= {submit} />
        }
        
      </div>
    )
  }
}

export default ValidateUserInput;