import React from 'react'
import {connect} from 'react-redux'




class SuperImage extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}
	}






	render(){

		return (

     <div className="un-photo" style={{backgroundImage:`url(${this.props.src})`, "--row-total": 5}}>
    <img src={this.props.src} className="super-img img" alt="Jack designs" width="100%" height="100%"/>

      <div className="un-photo__popup">
        <img src={this.props.src} className="super-img img" alt="Jack designs" />
        <div className="un-photo__row" style={{"--row-index": 0, "--random": 0.23}}>
          <div className="un-photo__row-inner"></div>
        </div>
        <div className="un-photo__row" style={{"--row-index": 1, "--random": 0.72}}>
          <div className="un-photo__row-inner"></div>
        </div>
        <div className="un-photo__row" style={{"--row-index": 2, "--random": 0.11}}>
          <div className="un-photo__row-inner"></div>
        </div>
        <div className="un-photo__row" style={{"--row-index": 3, "--random": 0.50}}>
          <div className="un-photo__row-inner"></div>
        </div>
        <div className="un-photo__row" style={{"--row-index": 4, "--random": 0.39}}>
          <div className="un-photo__row-inner"></div>
        </div>
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
    )(SuperImage)