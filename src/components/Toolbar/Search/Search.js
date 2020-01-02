import React, {useState} from 'react';
import './Search.css';
const Search = () => {
    const [inputFocused, setInput] = useState('input-wrapper');
    const [close, setClose] = useState(false);
    const [value, setValue] = useState('');
    const addClass = () => {
        setInput('input-wrapper input-focus');
        setClose(!close)
    };
    const removeClass = (e) => {
        setInput('input-wrapper');
        setClose(false)
    };
    const clear = e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        removeClass()
        setClose(false)
        alert('hello')
    }
    return (
        <form action="#" className='Search'>
            <div className={inputFocused}>
                {close ? <i className='fa fa-close' onClick={clear}></i> :close }
                <input value={value} onBlur={removeClass} onFocus={addClass} onChange={(e)=> setValue(e.target.value)}  type="text" placeholder='Search' />
            </div>
        </form>
    );
};

export default Search;
