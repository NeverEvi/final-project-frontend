import React, { useState } from 'react';
import './Search.css';

function Search ({handleGetInfo}) {
    const [id, setId] = useState("")
    
    const handleId = (data) => {
		setId(data.target.value);
	};
    function handleSubmit(e) {
		e.preventDefault();
        const id_low = id.toLowerCase()
        console.log(id_low)
        handleGetInfo(id_low)
            
    }
    return (
        <div className='search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <p className='search-instruction'>Search a pokemon by number (1-1000) or by name</p>
                <label>Pokemon:</label>
                <input className='search-input' type="text" id="name" onChange={handleId} required/>  
                <button type="submit" className='search-submit'>Submit</button>
            </form>
        </div>
        )
}

export default Search; 