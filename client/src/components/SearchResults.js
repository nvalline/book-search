import React from 'react';

function SearchResults() {
    return (
        <div className="border p-3">
            <div className="d-flex flex-row-reverse">
                <button type="button" className="btn btn-dark ml-2">Save</button>
                <button type="button" className="btn btn-info">View</button>
            </div>
            <div className="media">
                <img src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" className="align-self-center mr-3" alt="..." />
                <div className="media-body">
                    <h5 className="mt-0">Flowers for Algernon</h5>
                    <p>Written By: <span>Daniel Keyes</span></p>
                    <p className="mb-0">Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.</p>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;
