import React, { Component } from 'react';
import NewItem from './NewItem';
import uniqueId from 'lodash/uniqueId';
import Items from './Items';
import 'normalize.css/normalize.css';
import './App.css';

const defaultState = [
  { value: 'Buttery spread', id: uniqueId(), picked: false },
  { value: 'Coffee Mate', id: uniqueId(), picked: false },
  { value: 'eggs', id: uniqueId(), picked: false },
  { value: 'Almond milk', id: uniqueId(), picked: false },
  { value: 'Sp-K choc', id: uniqueId(), picked: false },
  { value: 'Coffee', id: uniqueId(), picked: false },
  { value: 'Pork', id: uniqueId(), picked: false },
  { value: 'Hamburger', id: uniqueId(), picked: false },
  { value: 'chicken', id: uniqueId(), picked: false },
  { value: 'Pirate Booty', id: uniqueId(), picked: false },
  { value: 'Cat food', id: uniqueId(), picked: false },
  { value: 'Water', id: uniqueId(), picked: false },
  { value: 'Frozen Pizza', id: uniqueId(), picked: false },
  { value: 'Frozen veggies', id: uniqueId(), picked: false },
  { value: 'Avocados', id: uniqueId(), picked: false },
  { value: 'Apples', id: uniqueId(), picked: false },
  { value: 'Bread', id: uniqueId(), picked: false },
  { value: 'Bagels', id: uniqueId(), picked: false }
]

class App extends Component {  
  state = {
    items: defaultState
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('items');
      const items = JSON.parse(json);

      if (items) {
        this.setState(() => ({ items }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate() {    
      const json = JSON.stringify(this.state.items);
      localStorage.setItem('items', json);
  }

  addItem = (itemToAdd) => {
    if (!itemToAdd.value) {
      return 'Enter a valid value to add an item';
    } else if (this.state.items.indexOf(itemToAdd.value) > -1) {
      return 'this item already exists';
    }
    console.log(this.state.items.indexOf(itemToAdd.value) > -1);
    this.setState({ items: [itemToAdd, ...this.state.items] })     
  }

  removeItem = (itemToRemove) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemToRemove.id)
    })
  }

  checkItem = (itemToCheck) => {
    const items = this.state.items.map(item => {
      if (item.value !== itemToCheck.value) return item;
      return { ...itemToCheck, picked: !itemToCheck.picked }
    });
      this.setState({ items });    
  }

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        items: [
          { value: 'Buttery spread', id: uniqueId(), picked: false },
          { value: 'Coffee Mate', id: uniqueId(), picked: false },
          { value: 'Eggs', id: uniqueId(), picked: false },
          { value: 'Almond milk', id: uniqueId(), picked: false },
          { value: 'Sp-K choc', id: uniqueId(), picked: false },
          { value: 'Coffee', id: uniqueId(), picked: false },
          { value: 'Pork', id: uniqueId(), picked: false },
          { value: 'Hamburger', id: uniqueId(), picked: false },
          { value: 'Chicken', id: uniqueId(), picked: false },
          { value: 'Pirate Booty', id: uniqueId(), picked: false },
          { value: 'Cat food', id: uniqueId(), picked: false },
          { value: 'Water', id: uniqueId(), picked: false },
          { value: 'Frozen Pizza', id: uniqueId(), picked: false },
          { value: 'Frozen veggies', id: uniqueId(), picked: false },
          { value: 'Avocados', id: uniqueId(), picked: false },
          { value: 'Apples', id: uniqueId(), picked: false },
          { value: 'Bread', id: uniqueId(), picked: false },
          { value: 'Bagels', id: uniqueId(), picked: false }
        ]
      };
    });
  }

  render() {
    const { items } = this.state;
    const allItems = items

    return (      
      <div className="container">
      <button 
          className="button-reset"
          onClick={this.handleDeleteOptions}
        >
      Reset List
    </button>
        <div className="pancake">
          <i className="fa fa-bars"></i>
        </div>       
        <h2 className="app-title">Cheryl's Shopping List</h2>      
        <NewItem onSubmit={this.addItem} />
        <Items 
          items={allItems} 
          onRemove={this.removeItem} 
          onCheck={this.checkItem} 
          
        />
      </div>
    );
  }
}

export default App;
