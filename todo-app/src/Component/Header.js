import React from 'react'
import Add from './Add'

// Post

const Header = () => {
    return (    
        <div className='container list-todo-header'>
            <form className='form-add-todo'  >
                <input className='inputCheckbox' type='checkbox'/>
                <input onKeyPress={Add} className='new-todo' placeholder='Enter...'></input>
            </form>
        </div>
    )
}

export default Header