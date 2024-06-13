import React, { forwardRef } from "react";
import PropTypes from 'prop-types'; 
import './Button.css'
export const Button = forwardRef(function Button (props, ref){
    const {label, onClick} = props
    //return "ABC";
    return <button onClick={onClick} ref={ref} className="primary">{label}</button>
})

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}