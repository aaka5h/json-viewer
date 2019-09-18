import * as React from 'react';
import JsonItemInterface from "../../json-handler/types/json-item.interface";
import JsonTreeItem from "./JsonTreeItem/JsonTreeItem";

const JsonTreeView = ({item}: { item: JsonItemInterface }) => {
    return (
        <div>
            {item ? <JsonTreeItem title={item.key} item={item} /> : null}
        </div>
    );
};

export default JsonTreeView;
