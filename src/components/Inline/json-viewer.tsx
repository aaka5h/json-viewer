import { Component } from 'react';
import * as React from 'react';
import { JsonView } from './Item/json-item';

interface Options {
  [key: string]: any;

  minimizableRoot?: boolean,
}

interface PropType {
  json: object;
  options?: Options;
}

interface stateType {
  options: Options;
}


const defaultOptions: Options = {};

export default class JsonViewerComponent extends Component<PropType, stateType> {

  state = {
    options: {},
  }

  constructor(props) {
    super(props);
  }

  render() {
    let j = { ...this.props.json } as any;
    return (
      <div>
        <JsonView json={j} />
      </div>
    );
  }
}
