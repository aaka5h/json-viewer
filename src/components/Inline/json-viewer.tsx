import { Component } from 'react';
import * as React from 'react';
import { JsonView } from './Item/json-item';
import { Options } from './options';


interface PropType {
  json: object;
  options?: Options;
}

interface StateType {
}

const defaultOptions: Options = {
  rootCollapsible: true,
  keyWithQuotes: false,
  collapseNodes: false,
};

export default class JsonViewerComponent extends Component<PropType, StateType> {

  render() {
    const opt = Object.assign({}, this.props.options, defaultOptions);
    let j = { ...this.props.json } as any;
    return (
      <div>
        <JsonView json={j} options={opt} isRoot={true} />
      </div>
    );
  }
}
