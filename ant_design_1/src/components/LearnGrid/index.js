 import {Grid} from "antd"
import { Row,Col } from "antd"

import "./LearnGrid.css"
import CardItem from "../CardIten"
function LearnGrid(){
    return <>
    {/* <Row gutter={16}>
        <Col xxl={2} span={2}> <div className="box">1</div> </Col>
        <Col xxl={4} span={4}> <div className="box">2</div></Col>
        <Col xxl={8} span={8}> <div className="box">3</div> </Col>
        <Col xxl={10} span={10}> <div className="box">4</div> </Col>
    </Row> */}

    <Row gutter={[20,20]}>
        <Col xxl={6} xl={6} md={12} lg={6} sm={24} xs={24}>
            <CardItem title="Box 1"/>
        </Col>
        <Col xxl={6} xl={6} md={12} lg={6} sm={24} xs={24}>
            <CardItem title="Box 2"/>
        </Col>
        <Col xxl={6} xl={6} md={12} lg={6} sm={24} xs={24}>
            <CardItem title="Box 3"/>
        </Col>
        <Col xxl={6} xl={6} md={12} lg={6} sm={24} xs={24}>
            <CardItem title="Box 4"/>
        </Col>
    </Row>

    <Row gutter={[20,20]} className="mt-20">
        <Col xxl={16} xl={16} md={24} lg={16} sm={24} xs={24}>
            <CardItem title="Box 5"/>
        </Col>
        <Col xxl={8} xl={8} md={24} lg={8} sm={24} xs={24}>
            <CardItem title="Box 6"/>
        </Col>
        
     
    </Row>

    </>
}
export default LearnGrid