import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavbarBrand, Input, Button, Container, Col, Row, Form} from 'reactstrap';
import IMG from './../img/img.svg'
import credentials from "./../Services/credentials";
class SearchNav extends Component{
    constructor(props){
        super(props);
        this.state={
            q:'',
            param:{},
        };
    }

    getDataSearch = (callback) => {
        fetch(`https://api.edamam.com/search?q=${this.state.q}&app_id=${credentials.APP_ID}&app_key=${credentials.APP_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.hits);
                callback(data.hits);
            }).catch(Error => {
                console.log(Error)
            });
    }

    handleGetDat = e =>{
        e.preventDefault();
        this.setState({param:this.state.q});
        this.getDataSearch();
    }

    render(){
        // console.log(this.state.q);
        // console.log(this.state.param);
        return(
            <div>
            <Navbar color="light" light expand="md">
         <NavbarBrand href="/">Recetas API</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <Form>
            <Row>
            <Col md="8">
            <NavItem>
            <Input type="text" placeholder="Nombre receta" onChange={(e)=>{this.setState({q:e.target.value})}}/>
            </NavItem>
            </Col>
            <Col md="4">
            <NavItem>
            {/*onClick={this.getDataSearch()} */}
            <Button type="button" outline color="primary" onClick={(e)=>{this.handleGetDat(e)}}>Buscar</Button>
            </NavItem>
            </Col>
            </Row>
            </Form>
            </Nav>
            </Navbar>
            <div style={{marginTop:"150px"}}></div>
            <Container>
            <Row>
            <Col>
            <img src={IMG}/>
            </Col>
            </Row>
            </Container>
            </div>
        )
    }
}
export default SearchNav;
