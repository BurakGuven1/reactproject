import React,{Component} from 'react'
import PropTypes from 'prop-types'

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBeer } from "@react-icons/all-files";
import { } from 'react-icons/';


export default class navbar extends Component {

    constructor(){
      super()
    }

  render(){
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-lg  navbar-light bg-light">
      <a className="navbar-text " href="#"></a>
  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav col-12 dropdown ">
        <a className="nav-item nav-link" href="#">Yazılarım <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#">burda foto olcak <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#">Ben Kimim  </a>
      
       
      </div>
      
    </div>
  
  </nav>
             
      </div>
    )
  }
 
}
