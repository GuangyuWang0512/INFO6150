import React from 'react'
import ReactDOM from 'react-dom'

class Contact extends React.Component{
  render(){
    return (
      <div className='card border-primary text-primary' style={{width:"200px"}}>
        <div className='card-body' style={{background:"banana"}}>
          <h3 className='card-title'>Contact</h3>
          <h6 className='card-subtitle text-muted'>If you have questions, please contact with us</h6>
          <p className='card-text'>email:XXXX@gmail.com</p>
          <p className='card-text'>phone:(617)-5288-789</p>
        </div>
        <div className='card-footer' style={{background:"white"}}>
          You can contact:Mr.Wang
        </div>
      </div>
    )
  }
}


/*function Contact() {
  return (
    <div>
      Contact
    </div>
  )
}*/

export default Contact
