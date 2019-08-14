import * as React from "react";
import JsonItemInterface from "../../../json-handler/types/json-item.interface";
import './JsonTreeItem.css';

const LeafItem = ({title, value}) => (
    <div className={'leaf-tree-item'} style={{display: 'block'}}>{title}:{value.toString()}<br /></div>);

const JsonTreeItem = ({item, title}: { item: JsonItemInterface, title: any }) => {
    console.log('title',title);
    const print = [];
    if (item.iterator === null) {debugger; }
    for (let i = item.iterator.currentItem; !item.iterator.isEnd; i = item.iterator.next()) {
        console.log(i);
        if (typeof i.value !== 'object') {
            print.push(<LeafItem key={i.key} title={i.key} value={i.value} />)
        } else {
            console.log('called...',i);
            print.push(<JsonTreeItem key={i.key} title={i.key} item={i.value} />)
        }
    }
    console.log(print);
    return (
        <>
            {
                title ?
                    (<div className={'json-item'}>{title} : {print}</div>) : print
            }
        </>
    );
};

export default JsonTreeItem;
