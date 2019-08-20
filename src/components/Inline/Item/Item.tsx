import * as React from 'react';
import './item.css'

const isCollapsible = () => {

};

const Item = (props: {
  className?: string,
  keyString?: string,
  json: any,
}) => {
  let {json} = props;
  const result = [];
  result.push(
    (<React.Fragment key={'item-key'}>
      {props.keyString && <a>{props.keyString}: </a>}
    </React.Fragment>),
  );
  if (typeof json === 'string' ||
    typeof json === 'number' ||
    typeof json === 'boolean') {
    result.push(<React.Fragment key={'leaf-item'}><span>{`${json}`}</span></React.Fragment>)
  } else if (json === null) {
    result.push(<span key={'null-value'}>null</span>)
  } else if (json instanceof Array) {
    if (json.length > 0) {
      const items = [];
      for (let i = 0; i < json.length; i++) {
        items.push(<li key={i}>
          {
            // @ts-ignore
            <Item json={json[i]} />
          }{i < json.length - 1 && ','}
        </li>);
      }
      result.push(<React.Fragment key={'ordered-list'}>
        {'['}
        <ol>{items}</ol>
        {']'}</React.Fragment>);
    } else {
      result.push(<React.Fragment key={'empty-array'}>
        {'[]'}</React.Fragment>)
    }
  } else if (typeof json === 'object') {
    let keyCount = Object.keys(json).length;
    if (keyCount > 0) {
      const items = [];
      for (let key in json) {
        if (Object.prototype.hasOwnProperty.call(json, key)) {
          items
            .push(
              (<li key={key}>
                {
                  // @ts-ignore
                  <Item json={json[key]} keyString={key} />
                }{--keyCount > 0 && ','}
              </li>),
            );
        }
      }
      result.push(<React.Fragment key={'unordered-list'}>
        {'{'}
        <ul>{items}</ul>
        {'}'}</React.Fragment>);
    } else result.push(<React.Fragment key={'empty-object'}>'{}'</React.Fragment>)
  }
  return result;
};

export default Item;
