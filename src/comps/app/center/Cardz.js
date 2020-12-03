import React from 'react'
import '../../../util/styles/css/cards.css';
import {connect} from 'react-redux'
import SuperImage from './Super-Image'



class Cards extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}
        this.scrollToContact = this.scrollToContact.bind(this)

	}




    scrollToContact(){
        document.querySelector("#contact").scrollIntoView()
    }

    



	render(){

		return (

    <div className="container-fluid mt-5 bg-cen " style={{background:'#fff'}}>
    <div className="row" id="starting">
        
      {

        [1,2,3,4,5,6].map(i =>{
            return (
                    <div className="col-md-4" key={i}>
            <div className="card p-3">
                <div className="d-flex flex-row mb-3"><SuperImage src={this.props.img1}/>
                </div>
                    <div className="d-flex flex-column ml-2"><span>Title</span><span className="text-black-50">Sub Title</span><span className="ratings"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></div>
                <h6> Description and detail of your work will go here....</h6>
                <div className="d-flex justify-content-between install mt-3"><span>Posted: Dec. 2nd 2020</span><span className="text-primary a " onClick={this.scrollToContact}>Interested&nbsp;<i className="fa fa-angle-right"></i></span></div>
            </div>
        </div>
                )
        })  


      }
    </div>
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
    )(Cards)