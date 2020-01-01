import React, {useState} from 'react';
import './Search.css';
const Search = () => {
    const [inputFocused, setInput] = useState('input-wrapper');
    const addClass = () => {
        setInput('input-wrapper input-focus');
    };
    const removeClass = () => {
        setInput('input-wrapper');
    };
    return (
        <form action="#" className='Search'>
            <div className={inputFocused}>
                <input onBlur={removeClass} onFocus={addClass} type="text" placeholder='Search' />
            </div>
        </form>
    );
};

export default Search;
