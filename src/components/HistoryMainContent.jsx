import React, { Component } from 'react';
import { Row, Col, Card, CardDeck, Container, Table } from 'react-bootstrap';

class HistoryMainContent extends Component {
   state = {}
   render() {
      return (
         <div className="col-lg-11 ">
            {/* 3 CARD */}
            <Container fluid>
               <Row>
                  <CardDeck className="my-3 w-100">
                     <Col md={4} className="mb-3">
                        <Card bg="danger" className="shadow">
                           <Card.Body>
                              <Card.Text>
                                 <h6>Today’s Income</h6>
                                 <h3>Rp. 1.000.000</h3>
                                 <h6>+2% Yesterday</h6>
                              </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col md={4} className="mb-3">
                        <Card bg="primary" className="shadow">
                           <Card.Body>
                              <Card.Text>
                                 <h6>Orders</h6>
                                 <h3>3.270</h3>
                                 <h6>+5% Last Week</h6>
                              </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col md={4} className="mb-3">
                        <Card bg="info" className="shadow">
                           <Card.Body>
                              <Card.Text>
                                 <h6>This Year’s Income</h6>
                                 <h3>Rp. 100.000.000.000</h3>
                                 <h6>+10% Last Year</h6>
                              </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>
                  </CardDeck>
               </Row>
               {/* END OF 3 CARD */}

               {/* CHART */}
               <Row className="mb-4">
                  <Col>
                     <Card bg="light" className="shadow-lg">
                        <Card.Body>
                           <Card.Text>
                              <h3>Revenue</h3>
                              <p>Chart</p>
                           </Card.Text>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
               {/* END OF CHART */}

               {/* RECENT ORDER TABLE*/}
               <Row>
                  <Col className="mb-4">
                     <Card bg="light" className="shadow-lg">
                        <Card.Body>
                           <Card.Text>
                              <Row>
                                 <Col>
                                    <h4>Recent Order</h4>
                                 </Col>
                                 <Col xs="5" sm="3" md="2" lg="2" xl="1">
                                    <select id="inputState" className="form-control btn-sm btn-secondary float-right">
                                       <option selected>Today</option>
                                       <option>...</option>
                                    </select>
                                 </Col>
                              </Row>
                           </Card.Text>
                           <Table hover responsive>
                              <thead>
                                 <tr>
                                    <th>INVOICES</th>
                                    <th>CASHIER</th>
                                    <th>DATE</th>
                                    <th>ORDERS</th>
                                    <th>AMOUNT</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Rp 120.000</td>
                                 </tr>
                                 <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Rp 120.000</td>
                                 </tr>
                                 <tr>
                                    <td>3</td>
                                    <td>Larry the Bird</td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>Rp 120.000</td>
                                 </tr>
                              </tbody>
                           </Table>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
               {/* END OF RECENT ORDER TABLE */}
            </Container>
         </div>
      );
   }
}

export default HistoryMainContent;