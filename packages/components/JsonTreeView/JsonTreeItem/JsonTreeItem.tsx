import * as React from 'react';
import JsonItemInterface from '../../../json-handler/types/json-item.interface';
import './JsonTreeItem.css';

const LeafItem = ({title, value}) => (
    <div className={'leaf-tree-item'} style={{display: 'block'}}>{title}: {value.toString()}<br/></div>);

const JsonTreeItem = ({item, title}: { item: JsonItemInterface, title: any }) => {
    const print = [];
    for (let i = item.iterator.currentItem; !item.iterator.isEnd; i = item.iterator.next()) {
        if (typeof i.value !== 'object') {
            print.push(<LeafItem key={i.key} title={i.key} value={i.value}/>)
        } else {
            if (i.value !== null)
                print.push(<JsonTreeItem key={i.key} title={i.key} item={i.value}/>)
        }
    }
    return (
        <>
            {
                title ?
                    <div className={'json-item'}>{title} : {'{'} {print} {'}'}</div> : print
            }
        </>
    );
};

export default JsonTreeItem;
