import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

  render() {
    const { item, onRemove } = this.props;
    return (
      <div className="item">
        <input
          type="checkbox"
          checked={item.picked}
          onChange={() => this.props.onCheck(item)}              
        />
        <span style={{ textDecoration: item.picked ? 'line-through' : 'none', color: item.picked ? 'red' : 'black' }}>  
          {item.value}
        </span>
        <button className="button-remove" onClick={onRemove}>Remove</button>
      </div>
    );
  }
}

export default Item;