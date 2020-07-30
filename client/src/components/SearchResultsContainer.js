import React from 'react';

import SearchResults from './SearchResults';

function ResultsContainer() {
    return (
        <div className="rounded bg-light mt-4 p-4">
            <h2 className="h3 mb-4">Results</h2>
            <SearchResults />
        </div>
    )
}

export default ResultsContainer;
