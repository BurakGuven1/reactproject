import React, { Component } from "react";
import Cardim from '../images/cardim.jpg'; // with import


export default class letter extends Component {
  constructor() {
    super();
  
  }

  
  render() {
    return (
      <div>
        <div className="container bcontent">
          <hr />
          <div className="card bg-gradient-secondary">
            <div className="row no-gutters ">
              <div className="col-sm-6">
                <img className="card-img" src={Cardim} />
              </div>
              <div className="col-sm-6">
                <div className="card-body">
                  <h5 className="card-title">Yüzde bir in gücü</h5>
                  <p className="card-text">
                     100 TL paranız var diyelim ve 1 ocak günü  bunu kumbaraya attınız ve her gün kumbaradaki paranın yüzde biri kadar da para atıyorsunuz
                     31 aralıkta kaç paranız olur? 
                     
                  </p>
                  <a href="#" className="btn btn-primary">
                    Devamını oku...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
