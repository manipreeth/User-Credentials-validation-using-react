import React,{Component} from 'react'

  const Error ={
    color: 'red',
    textAlign: 'center',
    marginTop:'10rem'
  }
  

class NotvalidUser extends Component{

  render(){
    return(
      <div style={Error}>
        <h3>Please...Check the details entered.!!</h3>
        <h4>Reload site to re-access the form.</h4>
      </div>
    )
  }
}

export default NotvalidUser;