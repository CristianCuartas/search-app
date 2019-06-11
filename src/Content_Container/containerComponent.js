import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { runInThisContext } from 'vm';

class ContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dataContainer
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return console.log({ data: nextProps.data });
    }
    return null;
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.data !== this.props.dataContainer) {
      this.setState({
        data: this.props.dataContainer
      });
    }
  }
  //   listIngredients = () => {
  //     // const { data } = this.state;
  //     return (
  //       <ul>
  //         {data.map(item => (
  //           <li key={item.recipe.ingredientLines}>
  //             {item.recipe.ingredientLines[0]}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <p>Probando la data</p>
        <div></div>
      </div>
    );
  }
}

ContainerComponent.propTypes = {
  dataContainer: PropTypes.array.isRequired
};

export default ContainerComponent;
