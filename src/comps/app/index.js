import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import Center from './center/'

class Content extends React.Component{
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
<Header/>
<Center/>
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
	)(Content);
