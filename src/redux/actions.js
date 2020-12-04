import axios from 'axios'


export const IN_HEADER = "IN_HEADER"
export const CANT_GET_DATA = "CANT_GET_DATA"
export const MAIN_CARDZ = "MAIN_CARDZ"
export const WORK = "WORK"
export const COMMENTS = "COMMENTS"
export const CONTACT_MSG = "CONTACT_MSG"
export const COMMENT_MSG = "COMMENT_MSG"
export const default_comments = "default_comments"



// header,main 6 cards,work post, and comments
export const get_all_data = () => dispatch =>{
	return axios.get(process.env.REACT_APP_ALL_DATA)
		.then(res=>{
			console.log(res)

			// header
			dispatch({type:IN_HEADER,payload:res.data.header})

			// top 6 cards uner header
			dispatch({type:MAIN_CARDZ,payload:res.data.cardz})
		
			// work sent and posted to slide show
			dispatch({type:WORK,payload:res.data.work})

			// comments for work in the slide show
			dispatch({type:COMMENTS,payload:res.data.comments})

		})



		.catch(err=>{
			console.log(err)
			// should set screen back to loading screen
			dispatch({type:CANT_GET_DATA})
		})
}



// send contact
export const contact = (obj) => dispatch =>{
	return axios.post(process.env.REACT_APP_CONTACT)
		.then(res=>{
			dispatch({type:CONTACT_MSG,payload:res.data})
		})



		.catch(err=>{
			dispatch({type:CONTACT_MSG,payload:"Something Went Wrong Try Again"})
			setTimeout(()=>{
			
				return dispatch({type:CONTACT_MSG,payload:err})
			},2000)
		})
}



// make comment
export const comment = (obj) => dispatch =>{
	return axios.post(process.env.REACT_APP_COMMENT)
		.then(res=>{
			dispatch({type:COMMENT_MSG,payload:"Thanks For The Comment"})
			dispatch({type:COMMENTS,payload:res.data})
		})

		.catch(err=>{
			dispatch({type:COMMENT_MSG,payload:"Something Went Wrong Try Again"})
			setTimeout(()=>{
			
				return dispatch({type:COMMENT_MSG,payload:err})
			},2000)
		})
}
