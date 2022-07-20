import React from 'react'
import { Component,Fragment } from 'react';

const back={
  background:"linear-gradient(135deg, #71b7e6, #9b59b6)"
}


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'hello world',
      list:[]
  }
}

  render(){
    return (
      <div className='card card-body' style={back}>
      <h4 className='card-title'>This is Home</h4>
      <p className='card-text'>This is the main page, you can jump from here to About,Contact or Job</p>
      <a href="#" className='btn btn-primary'>Welcome to your Home</a>
      <div className='a'></div>
      <Fragment>
        <div>
          <label htmlFor='insertArea'>Input what you want to say</label>
          <br></br>
          <input id='insertArea' value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={this.handleBtnClick.bind(this)}>Submit</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
                <li key={index} onClick={this.handleItemDelete.bind(this,index)}
                dangerouslySetInnerHTML={{__html:item}}></li>
              )
            })
          }
        </ul>
      </Fragment>
    </div>
    )
  }

  handleInputChange(e){
    this.setState({inputValue:e.target.value})
  }

  handleBtnClick(e){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }

  handleItemDelete(index){
    const list=[...this.state.list];
    list.splice(index,1)
    this.setState({list:list})
  }
}
/*function Home() {
  return (
    <div className='card card-body'>
      <h4 className='card-title'>This is Home</h4>
      <p className='card-text'>We are about</p>
      <a href="#" className='btn btn-primary'>More about us</a>
      <div className='a'></div>
    </div>
    
  )
}*/

export default Home
