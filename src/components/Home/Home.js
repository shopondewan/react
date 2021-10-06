import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd';
import './style.css';
import Style1 from './Style1';



 const Home = () => {

   
     const[ data, setData ] = useState([]);

          useEffect(() =>{
              const url = "./Data.JSON"
              fetch(url)
              .then((res) =>res.json())
              .then((data) => setData(data))

          },[])

    return (
        <>
        <Row gutter={[8, 8]}>
            {data.map(d =>[
                 <Col span={12}>
                     <Style1 data={d} key={d.key}/>
                 </Col>
            ])}
        </Row>
            
            <section className="dun">
             <h1>shopon</h1>
            </section>
        </>
    );
}
export default Home;