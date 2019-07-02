import React, { Component } from 'react';
//import uniqueId from 'lodash/uniqueId';
import './NewItem.css';

class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    
    event.preventDefault();

    onSubmit({ 
      id: new Date().getTime(), 
      value, 
      picked: false 
    });

    this.setState({ value: ''});
    document.querySelector('#new-item').focus();
  }

  render() {
    const { value } = this.state;

    return (
      <div className="new-item-container">
      <form className="new-item-form" onSubmit={this.handleSubmit}>
        <input
          id="new-item"
          className="new-item-input"
          type="text"
          placeholder="Enter an item"
          autoFocus
          value={value}
          onChange={this.handleChange}          
        />
        <button className="button-submit" type="submit">Submit </button>
      </form>
      </div>
    );
  }
}

export default NewItem;