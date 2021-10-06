import React, { useState, useEffect } from 'react'
import Style1 from '../Home/Style1';
import { Row, Col } from 'antd';
 const About = () => {

    const[ data, setData ] = useState([]);

    useEffect(() =>{
        fetch('./Data.JSON')
        .then((res) =>res.json())
        .then((data) => setData(data))

    },[])
    return (
        <div>
            <Row gutter={[8, 8]}>
            {data.map(d =>[
                 <Col span={12}>
                     <Style1 data={d} key={d.key}/>
                 </Col>
            ])}
        </Row>
           
        </div>
    )
}
export default About;