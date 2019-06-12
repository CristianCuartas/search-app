import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Input,
  Button,
  Container,
  Col,
  Row,
  Form,
  Collapse
} from 'reactstrap';
import IMG from '../img/img.svg';
import NOTFOUND from '../img/giphy.gif';
import credentials from '../Services/credentials';

class SearchNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      param: {},
      getData: '',
      collapse: true,
      empty: false
    };
  }

  toggle = () => {
    this.setState({ collapse: false });
  };

  emptyRecipe = () => {
    return (
      <div>
        <h1>
          <b>404 NOT FOUND </b>
        </h1>
      </div>
    );
  };

  getDataSearch = () => {
    fetch(
      `https://api.edamam.com/search?q=${this.state.q}&app_id=${credentials.APP_ID}&app_key=${credentials.APP_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ getData: data.hits });
        this.props.onDataFecth(data.hits);
        console.log(data.more);
        if (data.more === false) {
          this.setState(state => ({ empty: !state.empty }));
        } else {
          this.setState({ empty: false });
        }
      })
      .catch(Error => {
        console.log(Error);
      });
  };

  handleGetDat = e => {
    e.preventDefault();
    this.setState({ param: this.state.q });
    this.getDataSearch();
    this.toggle();
  };

  render() {
    console.log(this.state.empty);
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Recetas API</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Form>
              <Row>
                <Col md="8">
                  <NavItem>
                    <Input
                      type="text"
                      placeholder="Nombre receta"
                      onChange={e => {
                        this.setState({ q: e.target.value });
                      }}
                    />
                  </NavItem>
                </Col>
                <Col md="4">
                  <NavItem>
                    <Button
                      type="button"
                      outline
                      color="primary"
                      onClick={e => {
                        this.handleGetDat(e);
                      }}
                    >
                      Buscar
                    </Button>
                  </NavItem>
                </Col>
              </Row>
            </Form>
          </Nav>
        </Navbar>
        <Collapse isOpen={this.state.collapse}>
          <div style={{ marginTop: '150px' }}>
            <Container>
              <Row>
                <Col>
                  <img src={IMG} />
                </Col>
              </Row>
            </Container>
          </div>
        </Collapse>
        {this.state.empty === true ? (
          <div style={{ marginTop: '100px' }}>
            <Container>
              <Row>
                <Col>
                  <h1>Oppppps!</h1>
                  <h3>No contamos con esta receta.</h3>

                  <br />
                  <img src={NOTFOUND} />
                </Col>
              </Row>
            </Container>
          </div>
        ) : null}
      </div>
    );
  }
}
export default SearchNav;
