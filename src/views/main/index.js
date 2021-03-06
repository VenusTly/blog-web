import React, { Component } from "react"
import { Route,Link } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from "@/components/loading"
import Header from "@/views/layout/header"
import XkNav from "@/views/layout/nav"


const IndexView=Loadable({
	loader: () => import('@/views/index'),
  	loading: Loading,
})
const DetailView=Loadable({
	loader: () => import('@/views/article'),
  	loading: Loading,
})


class Main extends Component {
 
  render() {
    return (
      <div >
      	<Header />
      	<XkNav />
	    <div>
	      <Route path="/index" component={IndexView}/>
				<Route path="/detail/:id" component={DetailView}/>
	    </div>
	  </div>
    )
  }
}
export default Main;