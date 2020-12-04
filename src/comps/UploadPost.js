import React from 'react'
import {Input,FormGroup,Label,Col,Progress} from 'reactstrap'
import {connect} from 'react-redux'
import {} from '../redux/actions'
import {storage} from "../fb-db/"
import { withRouter } from 'react-router-dom';




class AccSettings extends React.Component{
    constructor(props){
        super(props)
        this.state={
          imageAsFile:'',
          imageAsUrl:'',
          progressUpload:0,
          loadedComplete:false,

        }


        this.handleFormInputs=this.handleFormInputs.bind(this)
        this.UploadImageAsFile=this.UploadImageAsFile.bind(this)
        this.handleImage=this.handleImage.bind(this)
        this.makeAction=this.makeAction.bind(this)
        this.checkCurrentFinishedAction=this.checkCurrentFinishedAction.bind(this)

    }


    async handleFormInputs(mode,who,val){
        this.setState({
          [mode]:{...this.state[mode],[who]:val}
        })          
    }




    async handleImage(e){
        if(e.target.files[0]){
      this.setState({imageAsFile:e.target.files[0]})

        }


    }



  async UploadImageAsFile(e) {

    const uploadTask = storage.ref(`herbiHeadShots/${this.props.herber_email.split('@').join('')}`).put(this.state.imageAsFile)



                uploadTask.on(
                    "state_changed",
                    snapshot => {
                      this.setState({progressUpload:(snapshot.bytesTransferred / snapshot.totalBytes) * 100})
                    },
                    error => {
                      console.log(error)
                    },
                    ()=>{
                      storage
                      .ref('herbiHeadShots')
                      .child(this.props.herber_email.split('@').join(''))
                      .getDownloadURL()
                      .then(url=>{
                          console.log(url)
                          this.setState({progressUpload:0,loadedComplete:true})
                          return this.props.setAccountPicture(url)
                      })
                    }


                  )
  }

async checkCurrentFinishedAction(who){
      switch(who){
        


        default:
          return false
      }
}




   async makeAction(who){
    switch(who){
    
        
     




     


        default:
        return false
    }
    }



componentDidMount(){
}

componentDidUpdate(){
}

  render(){

        return (
          <h1>Upload Post Admin Only</h1>


        )
  }
}



const mapStateToProps = state =>{
  return {
   ...state
  }
}

export default withRouter(connect(
  mapStateToProps,
  {}
  )(AccSettings))