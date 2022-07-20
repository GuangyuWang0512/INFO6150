import React from 'react'
import ReactDOM from 'react-dom'

class About extends React.Component{
  render(){
    return (
      <div className='card' style={{width:"200px"}}>
        <div className='card-header' style={{background:"lightgrey"}}>About us</div>
        <div className='card-body' style={{background:"lightyellow"}}>
          <h3 className='card-title'>Introduce</h3>
          <p className='card-text'>We are trying our best to help students to learn more about advanced technologies</p>
        </div>
        <div className='card-footer' style={{background:"lightgrey"}}>
          By google.com
        </div>
      </div>
    )
  }
}

/*function About() {
  return (
    <div>
      About Page.
    </div>
  )
}*/

export default About
