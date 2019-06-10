import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContentComponent from './contentComponent';
import data from './../Services/data.json';
import Nav from './../SearchNavbar/searchNav';
class  ContainerComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
        };
    }

componentDidMount(){
        this.setState({
            data: 
        })
    }

listIngredients = () =>{
    const {data} = this.state;
    return(
        <ul>
        {data.map(item =>(
            <li key={item.recipe.ingredientLines}>{item.recipe.ingredientLines[0]}</li>
        ))}
        </ul>
    )
}

 render() {
  return(
   <ContainerComponent {...this.state}/>
    )
   }
 }

export default ContainerComponent;