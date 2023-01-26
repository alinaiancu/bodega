import React from 'react';
import InventoryItemCard from './InventoryItemCard'
function CurrentInventoryList({itemArray, handleClick}) {

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {itemArray.map(item=>(
                    <InventoryItemCard handleClick={handleClick} key={item.id} item={item}/>
                ) ) }
            </div>
        </div>
    );
}

export default CurrentInventoryList;