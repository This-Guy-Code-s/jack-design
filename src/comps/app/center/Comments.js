import React from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid-random'

class Comments extends React.Component{
	constructor(props){
		super(props)
		this.state={
        name:"",
        email:"",
        msg:"",
		}
    this.updateFormInput = this.updateFormInput.bind(this)
	}
	
updateFormInput(who,val){
    return this.setState({
      [who]:val
    })
}
	render(){
  return (
  	<div className="container">
<section>
    <div className="container">
        <div className="row">
            <div className="col-sm-5 col-md-6 col-12 pb-4">
                <h1>Comments</h1>
              {
                this.props.comments.map((obj,i)=>{
                    return (
                        <div className="darker mt-4 text-justify" key={uuid()}> <img src="https://i.imgur.com/CFpa3nK.jpg" alt="Jack Designs" className="rounded-circle" width="40" height="40"/>
                    <h4>{obj.name}</h4> <span>- {obj.date}</span> <br/>
                    <p>{obj.msg}</p>
                </div>

                          )
                })
              }
            </div>
            <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                <form id="algin-form" onSubmit={(e)=>{e.preventDefault()}}>
                    <div className="form-group">
                        <h4>Leave a comment</h4> <label htmlFor="message">Message</label> <textarea name="msg" id="msg" cols="30" rows="5" className="form-control com-input"  value={this.state.msg} onChange={(e)=>{this.updateFormInput('msg',e.target.value)}} minLength={24} maxLength={1000}></textarea>
                    </div>
                    <div className="form-group"> <label htmlFor="name">Name</label> <input type="text" name="name" id="fullname" className="form-control com-input" value={this.state.name}  onChange={(e)=>{this.updateFormInput('name',e.target.value)}} minLength={3} maxLength={24}/> </div>
                    <div className="form-group"> <label htmlFor="email">Email</label> <input type="email" name="email" id="email" className="form-control com-input" value={this.state.email}  onChange={(e)=>{this.updateFormInput('email',e.target.value)}} minLength={8} maxLength={75} /> </div>
                   
                    <div className="form-group"> <button type="submit" id="post" className="btn">Post</button> </div>
                </form>
            </div>
        </div>
    </div>
</section>
</div>
  );
	}
}


const mapStateToProps = state =>{
	return {
		comments:state.comments
	}
}
export default connect(
	mapStateToProps,
	{}
	)(Comments);
