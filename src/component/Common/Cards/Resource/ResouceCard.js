import React from 'react'
import { Link } from "react-router-dom"
import { trashIcon,editIcon } from 'constant/antIcons'
import "../Topics/TopicsCard.css"
import "./ResourceCard.css"

export default function ResourceCard({_id, image, title, description,url,handleDelete,handleEdit }) {

    return (
        <div id="resourceCard">
             <span className='resourceEditIcons'>
                        <Link to="#" onClick={() => { handleDelete(_id) }} className="edit-icon"  >{trashIcon}</Link>
                        <Link to="#" onClick={ () => { handleEdit(_id) }} className="edit-icon" >{editIcon}</Link>
                    </span>
            <section id="resourceIcon">
               
                <img id="resourceImage" alt="resourceImage" src={image}></img>
            </section>
            <section id="resourceContent">
                <h3>{title}</h3>
                <p>{description} <a rel="noreferrer" target="_blank" href={url}>Click to read</a></p>
            </section>
        </div>
    )
}
