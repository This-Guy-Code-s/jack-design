import React from 'react'
import '../../../util/styles/css/cards.css';
import {connect} from 'react-redux'
import SuperImage from './Super-Image'
import uuid from 'uuid-random'


// COMPONNENT NEEDS A FRONT END CACHE SERVER THATS ACCESSABLE

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

        this.props.default_main_cardz.map((obj,i) =>{
            return (
                    <div className="col-md-4" key={uuid()}>
            <div className="card p-3">
                <div className="d-flex flex-row mb-3"><SuperImage src={obj.img}/>
                </div>
                    <div className="d-flex flex-column ml-2"><span>{obj.title}</span><span className="text-black-50">{obj.sub_title}</span><span className="ratings"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></div>
                <h6> {obj.desc}</h6>
                <div className="d-flex justify-content-between install mt-3"><span>Posted:{obj.date}</span><span className="text-primary a " onClick={this.scrollToContact}>Interested&nbsp;<i className="fa fa-angle-right"></i></span></div>
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
        default_main_cardz:state.default_main_cardz
    }
}



export default connect(
    mapStateToProps,
    {}
    )(Cards)