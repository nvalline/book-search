import React from 'react';

function SearchForm() {
    return (
        <form className="mt-4">
            <div className="form-group">
                <label for="bookSearch">Book</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="bookSearch" />
                <small id="bookSearch" className="form-text text-muted">Enter the name of the book to search.</small>
            </div>
            <div className="d-flex flex-row-reverse">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default SearchForm;
