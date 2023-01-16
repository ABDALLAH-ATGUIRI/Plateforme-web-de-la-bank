import { Button } from '@mui/material'
import React from 'react'
import "./SuperButton.css"

function SuperButton(props) {
    return (
        <button className='button'>{props.title}</button>
    )
}

export default SuperButton