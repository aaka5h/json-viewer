import * as React from 'react';
import './item.css'
import { useEffect, useState } from 'react';

const CreateArray = ({json, toggle, minimized, ...props}: {
  json: any, toggle: Function, minimized: boolean, setLeaf?: Function
}) => {
  let result: JSX.Element = null;
  if (json.length > 0) {
    const items = [];
    for (let i = 0; i < json.length; i++) {
      items.push(<li key={i}>
        <Item json={json[i]} />
        {i < json.length - 1 && ','}
      </li>);
    }
    result = (<React.Fragment key={'ordered-list'}>
      {'['}
      {!minimized ?
        <ol>{items}</ol> :
        <span className={'minimized-item'} onClick={_ => toggle(_)}>{items.length}</span>}
      {']'}</React.Fragment>);
  } else {
    props.setLeaf();
    result = (<span key={'empty-array'}>{'[]'}</span>);
  }

  return result;
};

const CreateObject = ({json, toggle, minimized, ...props}: {
  json: any, toggle: Function, minimized: boolean, setLeaf?: Function
}) => {
  let result: JSX.Element = null;
  let keyCount = Object.keys(json).length;
  const items = [];
  if (keyCount > 0) {
    for (let key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        items
          .push(
            (<li key={key}>
              <Item json={json[key]} keyString={key} />
              {--keyCount > 0 && ','}
            </li>),
          );
      }
    }
    result =
      (<React.Fragment key={'unordered-list'}>
        {'{'}
        {!minimized ?
          <ul>{items}</ul> :
          <span className={'minimized-item'} onClick={_ => toggle(_)}>{items.length}</span>}
        {'}'}
      </React.Fragment>);
  } else {
    props.setLeaf();
    result = (<span key={'empty-object'}>{'{}'}</span>);
  }
  return result;
};


const Item = (props: {
  json: any,
  className?: string,
  keyString?: string,
  minimized?: boolean,
}) => {
  let {json} = props;
  let result: JSX.Element = null;

  const [minimized, changeMinimized] = useState(props.minimized || false);
  const [leaf, setIsLeaf] = useState(false);
  const onClick = (e) => {
    changeMinimized(!minimized);
  };
  if (typeof json === 'string' ||
    typeof json === 'number' ||
    typeof json === 'boolean') {
    !leaf && setIsLeaf(true);
    result = (<React.Fragment><span>{`${json}`}</span></React.Fragment>)
  } else if (json === null) {
    !leaf && setIsLeaf(true);
    result = (<span>null</span>)
  } else if (json instanceof Array) {
    result = <CreateArray json={json} minimized={minimized} toggle={() => changeMinimized(!minimized)}
                          setLeaf={() => !leaf && setIsLeaf(true)} />;
  } else if (typeof json === 'object') {
    result = <CreateObject json={json} minimized={minimized} toggle={() => changeMinimized(!minimized)}
                           setLeaf={() => !leaf && setIsLeaf(true)} />;
  }

  return (
    <>
      <React.Fragment key={'item-key'}>
        <span
          onClick={(event) => onClick(event)}
          className={['key-link', minimized ? 'minimized' : 'expanded', leaf && 'leaf-node'].join(' ')}
        >
          {props.keyString && `${props.keyString}: `}
        </span>
      </React.Fragment>
      {result}
    </>
  );
};

export {
  Item as JsonView,
};
