import React from 'react'
import '../../util/styles/css/footer.css'



class Footer extends React.Component{
	constructor(props){
	super(props)
	this.state={
			draw_paper:'https://www.amazon.com/Artisto-Premium-Acid-Free-Drawing-Adults/dp/B083SBPRTY/ref=as_li_ss_tl?crid=2EE3S4XLKENWE&dchild=1&keywords=drawing+paper+for+artists&qid=1606409189&sprefix=drawing+,aps,219&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFDT1RMODZVRkZOREcmZW5jcnlwdGVkSWQ9QTA4MTIyMTQzNjJCUlUyQzJXME9HJmVuY3J5cHRlZEFkSWQ9QTAzNTEwODMxU0ZXOUE2VVg3NjZNJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&linkCode=ll1&tag=herbi02-20&linkId=0aba64d680c89a88c7dbcbd9c293ee81&language=en_US',
			draw_pencils:'https://www.amazon.com/Art-Pencils-Professional-Sketching-Watercolor/dp/B0871MS354/ref=as_li_ss_tl?crid=CE7EWPRFIWZ&dchild=1&keywords=drawing+supplies&qid=1606409576&sprefix=drawing+,aps,188&sr=8-8&linkCode=ll1&tag=herbi02-20&linkId=f0e614d543686082957907436c925b23&language=en_US',
			draw_pads:'https://www.amazon.com/StarG640-Ultrathin-Graphics-Battery-Free-Pressure/dp/B078YR2MTF/ref=as_li_ss_tl?crid=10NUCSG153D97&dchild=1&keywords=drawing+pads+for+artists&qid=1606409208&sprefix=drawing+,aps,185&sr=8-18-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNlEyRDVONFpRSDZVJmVuY3J5cHRlZElkPUEwMzIyMzEwMklNMVZVWDg5UTNEUSZlbmNyeXB0ZWRBZElkPUEwOTcxNDIyMjBHRjExTzk5OFE2ViZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=&linkCode=ll1&tag=herbi02-20&linkId=4f2da11b6cebb9460fe5ccbfdc7b3d8c&language=en_US',
			draw_kits:'https://www.amazon.com/Drawing-Set-Jannay-Professional-Supplies/dp/B07RBY8L9R/ref=as_li_ss_tl?crid=KTIOSKFU6CW0&dchild=1&keywords=drawing+kit&qid=1606409109&sprefix=drawing,aps,200&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE2SzgxVzBHUlFVNUkmZW5jcnlwdGVkSWQ9QTA5NjgxNjMzTkJCVDJGNVFKSUJIJmVuY3J5cHRlZEFkSWQ9QTA4NDUwNzUxSDNFTkxIOVRHTFY5JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&linkCode=ll1&tag=herbi02-20&linkId=85cede4306f115fa91d52df68d5dd656&language=en_US',

		}


	}




	render(){




return (
  <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
     <footer>
         <div className="row my-5 justify-content-center py-5">
             <div className="col-11">
                 <div className="row ">
                     <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                         <h3 className="text-muted mb-md-0 mb-5 bold-text">Watch Me Live</h3>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 className="mb-3 mb-lg-4 bold-text "><b>Great Deals...</b></h6>
                         <ul className="list-unstyled">
                             <li><a href={this.state.draw_pads}>Drawing Pads</a></li>
                             <li><a href={this.state.draw_paper}>Drawing Paper</a></li>
                             <li><a href={this.state.draw_pencils}>Drawing Supplies</a></li>
                             <li><a href={this.state.draw_kits}>Drawing Kits</a></li>
                         </ul>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                         <p className="mb-1">Washington, DC</p>
                         <p>Open To DMV Area</p>
                     </div>
                 </div>
                  <div className="row ">
                 <div className="col-xl-1 col-md-12 col-sm-8 col-auto order-1 align-self-end ">
                     	<h4 className="mt-55 mt-2 text-muted bold-text">Credit</h4>
                     </div>
                     </div>
                 <div className="row ">

                     	
                     
                     <div className="col-xl-2 col-md-6 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 className="mt-55 mt-2 text-muted bold-text"><b>Web: ThisGuyCodez</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> thisguycodez@gmail.com</small>
                     </div>
                     <div className="col-xl-2 col-md-6 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                         <h6 className="text-muted bold-text"><b>Drawings: Jack</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span> jacksEmail@gmail.com</small>
                     </div>
                 </div>
             </div>
         </div>
     </footer>
 </div>

	)
	}
}




export default Footer















