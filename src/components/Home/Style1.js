import { img } from 'antd'
import React  from 'react'

function Style1(props) {
    return (
        <div>
             <p>{props.data.title}</p>
            {/* <img src={props.data.image} alt="images" className="card-media" /> */}
             <img src= {props.data.image}  className="card-media"/>
        </div>
    )
}

export default Style1
