import React, { Component} from 'react';
import Item from './Item';
//import './Items.css';

class Items extends Component {

  render() {
    const { items, onRemove, onCheck } = this.props;
    return (
      <div>        
        {items
          .map(item =>           
            <Item 
              key={item.id}
              onCheck={onCheck}
              onRemove={() => onRemove(item)}
              item={item}
            />
        )}
      </div>
    )
  }
}

export default Items;