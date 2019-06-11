import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Col,
  Row
} from 'reactstrap';

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <Card className="p-4">
                <CardBody>
                  <CardTitle>{this.props.label}</CardTitle>
                  <CardSubtitle>Ingredientes</CardSubtitle>
                  <CardBody>
                    <CardImg
                      top
                      width="100%"
                      src={this.props.img}
                      alt="Card image cap"
                    />
                    <CardText ingredients={this.props.listIngredients}>
                      {this.props.value}
                    </CardText>
                  </CardBody>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ContentComponent.propTypes = {
  label: PropTypes.string.isRequired,
  // ingredientLines:PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default ContentComponent;
