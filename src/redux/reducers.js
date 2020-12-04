import {IN_HEADER,MAIN_CARDZ,WORK,COMMENTS} from './actions'
import no_img from '../util/imgs/noImg.svg'
import {default_main_cardz,default_wrk_4slideshow,default_comments} from './Def.js'


// ------------------------------------------

const initialState = {
	loading:window.sessionStorage.loaded?false:false,

  // Header
  intro_head:window.sessionStorage.intro_head || "Hi, I'm Jack.",
  intro_par:window.sessionStorage.intro_par || "I draw designs of all kinds. I will be posting my work here, so feel free to check it out anytime. If you like my work and want a drawing of your own, don't hesitate to contact me. Thanks For Coming.",

  //add cache server usage to the 3 below
  // main_cardz:
  default_main_cardz: default_main_cardz,
  
  // slide show
	wrk:default_wrk_4slideshow,
  no_img:no_img,
  // comments below slide show
  comments:default_comments,
}





const reducer = (state = initialState, actions) =>{
	switch(actions){

    // header
    case IN_HEADER:
      return {
        ...state,
        intro_head:actions.payload.intro_head,
        intro_par:actions.payload.intro_par
      }

    case MAIN_CARDZ: 
    return {
      ...state,
      default_main_cardz:actions.payload
    }

    case WORK: 
    return {
      ...state,
      wrk:actions.payload
    }

    case COMMENTS:
    return {
      ...state,
      comments:actions.payload
    }
		default:
			return state
	}
}




export default reducer