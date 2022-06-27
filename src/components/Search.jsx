import React, { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { MdCancel } from 'react-icons/md';

const Search = () => {

    const [state, setState] = useState('')
    const [focus, setFocus] = useState(false)

    function clearSearch() {
        setState('')
    }

  return (
    <div className='search'>
        <input 
            type="text" 
            placeholder='Search Twitter'
            className={ focus ? 'focus' : '' }
            value={state}
            onChange={(e) => setState(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
        />
        <RiSearchLine className={ focus ? 'searchIcon focusColor' : 'searchIcon'} />
        { state !== '' && <MdCancel onClick={clearSearch} className='cancelIcon' />}
    </div>
  )
}

export default Search