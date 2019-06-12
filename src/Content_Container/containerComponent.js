import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import ContentComponent from './contentComponent';

class ContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dataContainer
    };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.data !== prevState.data) {
  //     return console.log({ data: nextProps.data });
  //   }
  //   return null;
  // }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.data !== this.props.dataContainer) {
      this.setState({
        data: this.props.dataContainer
      });
    }
  }

  showCards = () => {
    const { data } = this.state;
    return (
      <div>
        <Container>
          {data.map(item => (
            <Row className="justify-content-center">
              <Col md="8">
                <Card className="p-4">
                  <CardBody>
                    <CardTitle>
                      <h1>{item.recipe.label}</h1>
                    </CardTitle>
                    <br />
                    <img src={item.recipe.image} alt="img" />
                    <br />
                    <br />
                    <CardSubtitle style={{ textAlign: 'left' }}>
                      <b>Ingredientes para la receta:</b>
                    </CardSubtitle>
                    <br />
                    <CardText className="text-justify">
                      <ListGroup flush>
                        <ListGroupItem>
                          {item.recipe.ingredientLines}
                        </ListGroupItem>
                      </ListGroup>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  };

  render() {
    return (
      <div>
        <ContentComponent showCards={this.showCards()} />
      </div>
    );
  }
}

ContainerComponent.propTypes = {
  dataContainer: PropTypes.array.isRequired
};

export default ContainerComponent;
