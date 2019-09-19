import * as React from 'react';
import { JsonView } from './Item/json-item';
import { JsonViewerOptions } from './jsonViewerOptions';


interface PropType {
  json: object;
  options?: JsonViewerOptions;
}

const defaultOptions: JsonViewerOptions = {
  rootCollapsible: true,
  keyWithQuotes: false,
  collapseNodes: false,
};

export default class JsonViewerComponent extends React.Component<PropType> {

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
