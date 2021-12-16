import React from 'react'
import { Link} from "react-router-dom"
import { Card,Button } from "antd"
import "./TopicsCard.css"

export default function TopicsCard({ image, title, description,route,delIcon,btn1,btn2 }) {
    
    const { Meta } = Card;
    return (
        <Card hoverable 
                id="topicCard"
                cover={<img alt="example" id="cardImage" src={image}/>}>
                <Meta title={title} description={description} />
            <Link to={route}><Button id="topics-btn" type="primary">Start Learning..</Button></Link>
        </Card>
        
    )
}
