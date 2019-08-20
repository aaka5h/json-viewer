import { Component } from 'react';
import * as React from 'react';
import Item from './Item/Item';

interface Options {
  [key: string]: any;
}

interface PropType {
  json: object;
  options?: Options;
}


const defaultOptions: Options = {};

export default class InlineComponent extends Component<PropType> {
  constructor(props) {
    super(props);
  }

  render() {
    let j = {...this.props.json} as any;
    return (
      <div>
        {
          // @ts-ignore
          <Item json={j} />
        }
      </div>
    );
    // return <pre>{JSON.stringify(j,null, 2)}</pre>;
  }
}
