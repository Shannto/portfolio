import React from "react";
import {Card,CardTitle,CardText,Col,Row,Button} from 'reactstrap';

export default function Education(){
    return(
        <div>
            <h1 className="my-4">Education</h1>
            <Row className="mx-5">
            <Col sm="6">
    <Card body className="text-dark">
      <CardTitle tag="h5">
        Comilla University
      </CardTitle>
      <CardText>
        Studies B.Sc (Engineering) in Information & Communication Technology
      </CardText>
      <Button>
        2018-Present
      </Button>
    </Card>
  </Col>

  <Col sm="6">
    <Card body className="text-dark">
      <CardTitle tag="h5">
Ispahani Public School & College
      </CardTitle>
      <CardText>
        Secondary and Higher Secondary Education
      </CardText>
      <Button>
        2010-2017
      </Button>
    </Card>
  </Col>

</Row>
        </div>
    )
}