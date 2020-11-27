import React from 'react'
import '../../../util/styles/css/cards.css';
import {connect} from 'react-redux'




class Cards extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}
	}






	render(){

		return (

    <div class="container-fluid mt-5 bg-cen " style={{background:'#fff'}}>
    <div class="row">
        <div class="col-md-4">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src={this.props.img1}alt="Jack Designs"  width="100" height="80"/>
                    <div class="d-flex flex-column ml-2"><span>Title</span><span class="text-black-50">Sub Title</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <h6> Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
                <div class="d-flex justify-content-between install mt-3"><span>Installed 172 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src={this.props.img1}alt="Jack Designs"  width="100" height="80"/>
                    <div class="d-flex flex-column ml-2"><span>Title</span><span class="text-black-50">Sub Title</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <h6>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
                <div class="d-flex justify-content-between install mt-3"><span>Installed 1234 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src={this.props.img1} alt="Jack Designs"  width="100" height="80"/>
                    <div class="d-flex flex-column ml-2"><span>Title</span><span class="text-black-50">Sub Title</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <h6>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
                <div class="d-flex justify-content-between install mt-3"><span>Installed 1234 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src={this.props.img1} alt="Jack Designs"  width="100" height="80"/>
                    <div class="d-flex flex-column ml-2"><span>Title</span><span class="text-black-50">Sub Title</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <h6>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
                <div class="d-flex justify-content-between install mt-3"><span>Installed 1234 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src={this.props.img1} alt="Jack Designs"  width="100" height="80"/>
                    <div class="d-flex flex-column ml-2"><span>Title</span><span class="text-black-50">Sub Title</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <h6>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
                <div class="d-flex justify-content-between install mt-3"><span>Installed 345 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src={this.props.img1} alt="Jack Designs"  width="100" height="80"/>
                    <div class="d-flex flex-column ml-2"><span>Title</span><span class="text-black-50">Sub Title</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <h6>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
                <div class="d-flex justify-content-between install mt-3"><span>Installed 345 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
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
    )(Cards)