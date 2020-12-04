import React from 'react'
import '../../util/styles/css/header.css';
import {connect} from 'react-redux'
import {Button} from 'reactstrap'

class Header extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}
		this.scrollToCenter = this.scrollToCenter.bind(this)
	}


	scrollToCenter(){
		document.querySelector("#starting").scrollIntoView()
	}

	

	render(){

return (

 

<div className='Main'>
<section className="hero">
  <div className="content">
    <h2>{this.props.intro_head}</h2>
    <p>{this.props.intro_par}<Button size='sm' color='dark' onClick={this.scrollToCenter} style={{borderRadius:'100%'}}><i className="fas fa-arrow-circle-down"></i></Button></p>
    </div>
  <div className="waves"></div>
</section>
        </div>


	)

	}
}


const mapStateToProps = state =>{
	return {
	intro_head:state.intro_head,
	intro_par:state.intro_par
	}
}
export default connect(
	mapStateToProps,
	{}
	)(Header);
