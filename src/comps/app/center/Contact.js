import React from 'react'
import '../../../util/styles/css/cards.css';
import '../../../util/styles/css/work.css';
import {connect} from 'react-redux'




class Contact extends React.Component{
	constructor(props){
		super(props)
		this.state={
      name:"",
email:"",
number:"",
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





<div className="container contact-form" id="contact">
           
            <form onSubmit={(e)=>{e.preventDefault();return true}}>
                <h3>Contact Me</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value={this.state.name}  onChange={(e)=>{this.updateFormInput('name',e.target.value)}} minLength={3} maxLength={24} required/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="txtEmail" className="form-control" placeholder="Your Email *" value={this.state.email}  onChange={(e)=>{this.updateFormInput('email',e.target.value)}} minLength={8} maxLength={75} required/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value={this.state.number}  onChange={(e)=>{this.updateFormInput('number',e.target.value)}} minLength={10} maxLength={11} required/>
                        </div>
                       {window.innerWidth<800?(

                       	<div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width:"100%", height:"150px"}} value={this.state.msg} onChange={(e)=>{this.updateFormInput('msg',e.target.value)}} minLength={24} maxLength={1000} required></textarea>
                        </div>
           	)

           :

			(
				<div className="form-group">
			<input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
           	</div>
           	)

                       }
                    </div>
                    <div className="col-md-6">
                        {window.innerWidth<800?(
                        	<div className="form-group">
			<input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
           	</div>
           	)

           :

			(


                       	<div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width:"100%", height:"150px"}} value={this.state.msg} onChange={(e)=>{this.updateFormInput('msg',e.target.value)}} minLength={24} maxLength={1000} required></textarea>
                        </div>
				
           	)

                       }
                    </div>
                </div>
            </form>
</div>




	)

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
    )(Contact)