import React from "react";

export const LoadingPage = () => {
    return (
        <div className="loading">
            <img className="loading__image" src={require("../images/loading.gif")}/>
        </div>
    )
}