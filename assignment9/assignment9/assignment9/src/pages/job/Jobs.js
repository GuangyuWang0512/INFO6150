import React from 'react'

class Jobs extends React.Component{
  render(){
    return (
      <div className='card' style={{width:"250px"}}>
        <div className='card-body' style={{background:"lightblue"}}>
              <h4 className='card-title'>We are wanting you</h4>
              <p className='card-text'>If you want to work with us, please apply immediately</p>
              <a href='#' className='card-link'>Developer </a>
              <a href='#' className='card-link'>Tester </a>
        </div>
      </div>
    )
  }
}

/*function Jobs() {
  return (
    <div>
      Find Job
    </div>
  )
}*/

export default Jobs
