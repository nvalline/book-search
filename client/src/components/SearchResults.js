import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchResults({ id, link, image, title, authors, description }) {
    const darkBtn = "btn btn-dark ml-2";
    const successBtn = "btn btn-success ml-2";
    const [classState, setClassState] = useState(darkBtn);

    const handleViewBtnClick = () => {
        window.open(link, '_blank');
    };

    const handleSaveBtnClick = () => {
        console.log("ID:", id)
        axios.post(`/api/save/${id}`)
            .then(res => {
                console.log("RES:", res.data)
                if (res.data.status === "saved") {
                    setClassState(successBtn);
                } else {
                    console.log(res.data.msg)
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="border p-3">
            <div className="d-flex flex-row-reverse">
                <button
                    type="button"
                    className={classState}
                    onClick={handleSaveBtnClick}
                >Save</button>
                <button
                    type="button"
                    className="btn btn-info"
                    onClick={handleViewBtnClick}
                >View</button>
            </div>
            <div className="media">
                <img
                    src={image}
                    className="align-self-center mr-3"
                    alt={title}
                />
                <div className="media-body">
                    <h5 className="mt-0">{title}</h5>
                    <p>Written By: <span>{authors}</span></p>
                    <p className="mb-0">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;
