import React from 'react'
import PropTypes from 'prop-types'


export default function navbar(props) {
  return (
    <div>
            <h1> {props.title}</h1>
            <h1> {props.a}</h1>
    </div>
  )
}
navbar.propTypes = {
    title:PropTypes.string.isRequired,
    

}
navbar.defaultProps = 
{
    title:" default",
}
