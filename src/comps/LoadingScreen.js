import React from 'react'
import '../util/styles/css/load-screen.css'



class LoadingScreen extends React.Component{
	constructor(props){
	super(props)
	this.state={

		}


	}




	render(){

		return (


<div className="loader">
<div className="preloader">
  <div className="preloader__ring">
    <div className="preloader__sector">J</div>
    <div className="preloader__sector">A</div>
    <div className="preloader__sector">C</div>
    <div className="preloader__sector">K</div>
    <div className="preloader__sector">S</div>
    <div className="preloader__sector"><i className="fas fa-pencil-alt"></i></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
  </div>
  <div className="preloader__ring">
    <div className="preloader__sector">D</div>
    <div className="preloader__sector">E</div>
    <div className="preloader__sector">S</div>
    <div className="preloader__sector">I</div>
    <div className="preloader__sector">G</div>
    <div className="preloader__sector">n</div>
    <div className="preloader__sector">S</div>
    <div className="preloader__sector"><i className="fas fa-pencil-alt"></i></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
    <div className="preloader__sector"></div>
  </div>
</div>
  {window.innerWidth<700?<small>Loading Please Wait....</small>:<h1>Loading Please Wait....</h1>}
</div>

		)
	}
}




export default LoadingScreen