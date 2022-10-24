import React from 'react'
import Add from './Add'
import {useEffect, useState} from 'react'

// Post

const Header = () => {
    return (    
        <div className='container list-todo-header'>
            <form  className='form-add-todo'  >
                <input className='inputCheckbox' type='checkbox'/>
                <input  onKeyUp={Add} className='new-todo' placeholder='Enter...' type='text'></input>       
            </form>
        </div>
    )
}

export default Header