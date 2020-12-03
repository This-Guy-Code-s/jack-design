import React from 'react'
import '../../../util/styles/css/cards.css';
import '../../../util/styles/css/work.css';
import {connect} from 'react-redux'
import Cardz from './Cardz'




class Contact extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}
	}






	render(){

return (





<div class="container contact-form" id="contact">
           
            <form onSubmit={(e)=>{e.preventDefault();return true}}>
                <h3>Contact Me</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                       {window.innerWidth<800?(

                       	<div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{width:"100%", height:"150px"}}></textarea>
                        </div>
           	)

           :

			(
				<div class="form-group">
			<input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
           	</div>
           	)

                       }
                    </div>
                    <div class="col-md-6">
                        {window.innerWidth<800?(
                        	<div class="form-group">
			<input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
           	</div>
           	)

           :

			(


                       	<div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{width:"100%", height:"150px"}}></textarea>
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