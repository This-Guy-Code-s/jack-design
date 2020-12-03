import React from 'react'
import {connect} from 'react-redux'


class Comments extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}
	}
	componentDidMount(){
		console.log(this.props,'App Mounted Successfully...')
	}

	componentDidUpdate(){
		console.log('App Made Update Successfully...')
	}

	componentWillUnmount(){
		console.log('App UnMounted Successfully GoodBye...')
	}

	render(){
  return (
  	<div className="container">
<section>
    <div className="container">
        <div className="row">
            <div className="col-sm-5 col-md-6 col-12 pb-4">
                <h1>Comments</h1>
                <div className="darker mt-4 text-justify"> <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                    <h4>John doe</h4> <span>- 3 Decemeber, 2020</span> <br/>
                    <p>Great Quality , I Love Your Work Man! Im going to contact soon to get some work done from you as well.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                <form id="algin-form" onSubmit={(e)=>{e.preventDefault()}}>
                    <div className="form-group">
                        <h4>Leave a comment</h4> <label for="message">Message</label> <textarea name="msg" id="" msg cols="30" rows="5" className="form-control com-input" ></textarea>
                    </div>
                    <div className="form-group"> <label for="name">Name</label> <input type="text" name="name" id="fullname" className="form-control com-input"/> </div>
                    <div className="form-group"> <label for="email">Email</label> <input type="text" name="email" id="email" className="form-control com-input"/> </div>
                   
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
		...state
	}
}
export default connect(
	mapStateToProps,
	{}
	)(Comments);
