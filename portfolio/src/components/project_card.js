import React from 'react'
import '../css/project_card.css'
export default function card_maker(props){
    return (
    <div className="col mb-4">
        <div className="card h-100">
            <img className="card-img-top" src="..." alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    </div>
    )
}