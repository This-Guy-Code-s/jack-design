import React from 'react'
import './util/styles/css/App.css';
import './util/styles/css/cards.css';
import './util/styles/css/work.css';
import './util/styles/css/contact.css';
import Loading from './comps/LoadingScreen'
import Content from './comps/app/'
import Gallery from './comps/app/center/Work'
import Contact from './comps/app/center/Contact'
import Footer from './comps/footer/'
// import Cookie from 'js-cookie' 
import {connect} from 'react-redux'


class App extends React.Component{
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
    <div className="App">
      {this.props.loading?<Loading/>:<Content/>}
      <div className='container-fluid max-cor-cor' style={{background:'#fff'}}>
      <Gallery/>
      <Gallery/>
      <Gallery/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
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
	)(App);
