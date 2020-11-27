import img1 from '../util/imgs/img1.jpg'
import img2 from '../util/imgs/img2.jpg'




const initialState = {
	loading:window.sessionStorage.loaded?false:false,
	img1:img1,	
	wrk:[

	 {
    src: img2,
    altText: 'Jasck Designs',
    caption: 'some text'
  },

   {
    src: img2,
    altText: 'Jasck Designs',
    caption: 'some text'
  },

   {
    src: img2,
    altText: 'Jasck Designs',
    caption: 'some text'
  },



	]	
}





const reducer = (state = initialState, actions) =>{
	switch(actions){
		default:
			return state
	}
}




export default reducer