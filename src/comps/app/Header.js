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
<section class="hero">
  <div class="content">
    <h2>Hi, I'm Jack.</h2>
    <p>I draw designs of all kinds. I will be posting my work here, so feel free to check it out anytime. If you like my work and want a drawing of your own, don't hesitate to contact me. Thanks For Coming. <Button size='sm' color='dark' onClick={this.scrollToCenter} style={{borderRadius:'100%'}}><i className="fas fa-arrow-circle-down"></i></Button></p>
    </div>
  <div class="waves"></div>
</section>
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
	)(Header);
