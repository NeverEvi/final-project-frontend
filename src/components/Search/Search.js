import React, { useState } from 'react';
//import './Card.css';

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
                <h1>Search</h1>
                <label>Pokemon:</label>
                <input type="text" id="name" onChange={handleId} required/>  
                <button type="submit" >Submit</button>
            </form>
        </div>
        )
}

export default Search; 