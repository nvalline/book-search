import React, { useState } from 'react';
import axios from 'axios';

function SearchForm() {
    const [bookState, setBookState] = useState({ search: "" });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBookState({ ...bookState, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        let searchTerm = bookState;
        searchTerm = searchTerm.search.toLowerCase();
        console.log("SEARCH TERM:", searchTerm)

        axios.get()
            .then()
            .catch(err => console.log(err));
    }

    return (
        <form className="mt-4">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    name="search"
                    aria-describedby="bookSearch"
                    placeholder="Enter the name of the book to search"
                    value={bookState.search}
                    onChange={handleInputChange}
                />
            </div>
            <div className="d-flex flex-row-reverse">
                <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default SearchForm;
