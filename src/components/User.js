import React, { Component } from 'react'

export default class User extends Component {
  render() {

    const {name,bölüm,calistigiyer,fazla} = this.props;
    return (
      <div>
         <ul>
            <li> adı :{name} </li>
            <li> bölüm:{bölüm}</li>
            <li> Çalıştığı yer :{calistigiyer}</li>
            <li>{fazla}</li>

         </ul>
      </div>
    )
  }
}
