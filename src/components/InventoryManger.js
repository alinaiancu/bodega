import { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"
import React from 'react';

function InventoryManager() {
    const [itemArray, setItemArray] = useState([]);
    const [reorderArray, setReorderArray] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8001/inventory ")
            .then(res => res.json())
            .then(data => setItemArray(data));
    },[])}
    
    let addToReorder = (newItem) => {

        if(reorderArray.indexOf(newItem) === -1){
            setReorderArray([...reorderArray, newItem])
        }
    }
    let deleteItem= (oldItem) => {
       let newArray = reorderArray.filter(item => item.id !== oldItem.id)
       setReorderArray(newArray) 

    (
        <div className="container">
            <CurrentInventoryList handleClick={addToReorder} itemArray={itemArray}/>
            <ReorderInventoryList handleClick={deleteItem} reorderArray={reorderArray}/>
        </div>
    );
    }

export default InventoryManager;