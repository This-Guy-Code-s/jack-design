import React from 'react'
import '../../util/styles/css/header.css';
import {connect} from 'react-redux'
import {Button} from 'reactstrap'

class Header extends React.Component{
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



<div className='Main'>
<section class="hero">
  <div class="content">
    <h2>Hi, I'm Jack.</h2>
    <p>I draw designs of all kinds. I will be posting my work here, so feel free to check it out anytime. If you like my work and want a drawing of your own, don't hesitate to contact me. Thanks For Coming. <Button size='sm' color='info'><i className="fas fa-arrow-circle-down"></i></Button></p>
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
