import React from 'react'
import {connect} from 'react-redux'
import Cardz from './Cardz'




class Cards extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}
	}






	render(){

		return (
            <div className="container-fluid"  style={{background:'#fff'}}>
                <Cardz/>
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