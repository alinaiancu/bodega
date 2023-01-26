import React from 'react'
import InventoryItemCard from './InventoryItemCard'
function ReorderInventoryList({reorderArray}) {
    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorderArray.map(item=>(
                    <InventoryItemCard key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
}

export default ReorderInventoryList;