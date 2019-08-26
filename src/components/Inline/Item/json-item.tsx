import * as React from 'react';
import './item.css'
import { PureComponent } from 'react';
import { Options } from '../options';

const displayNoneWhen = function (func) {
  let isIt = !!(typeof func === 'function' ? func() : func);
  return {
    style: {
      display: isIt ? 'none' : null,
    },
  }
};

interface PropType {
  json: any,
  options: Options,
  keyString?: string,
  isRoot?: boolean,
}

class JsonItem extends PureComponent<PropType, any> {

  state = {
    minimized: this.props.options.collapseNodes,
    isLeaf: false,
  };

  changeMinimized = (val) => {
    this.setState({ minimized: !!val });
  };

  setIsLeaf = () => {
    this.setState({ isLeaf: true });
  };

  constructor(props) {
    super(props);
    this.state.minimized = !(this.props.isRoot && this.props.options.rootCollapsible);
  }

  componentDidMount(): void {
    const { json } = this.props;
    if (typeof json === 'string' ||
      typeof json === 'number' ||
      typeof json === 'boolean') {
      this.setIsLeaf()
    } else if (json === null) {
      this.setIsLeaf();
    } else if (json instanceof Array && json.length === 0) {
      this.setIsLeaf();
    } else if (typeof json === 'object' && Object.keys(json).length === 0) {
      this.setIsLeaf();
    }
  }


  render() {

    let { json } = this.props;
    const { minimized, isLeaf: leaf } = this.state;
    let result: JSX.Element = null;

    if (typeof json === 'string' ||
      typeof json === 'number' ||
      typeof json === 'boolean') {
      result = (<React.Fragment><span>{`${json}`}</span></React.Fragment>)
    } else if (json === null) {
      result = (<span>null</span>)
    } else if (json instanceof Array) {
      result = this.createArrayList(json);
    } else if (typeof json === 'object') {
      result = this.createObjectList(json);
    }

    return (
      <>
        <span
          onClick={() => {
            if (!this.state.isLeaf && !(this.props.isRoot && this.props.options.rootCollapsible)) this.changeMinimized(!minimized)
          }}
          className={
            ['key-link',
              minimized ? 'minimized' : 'expanded',
              leaf && 'leaf-node',
              this.props.isRoot && this.props.options.rootCollapsible ? 'disable-root-toggle' : null,
            ].join(' ')}
        >
          {this.props.keyString && `${this.props.keyString}: `}
        </span>
        {result}
      </>
    );
  }

  createArrayList = (json: any[]) => {
    let result: JSX.Element = null;
    const items = [];
    for (let i = 0; i < json.length; i++) {
      items.push(<li key={i}>
        <JsonItem json={json[i]} options={this.props.options} />
        {i < json.length - 1 && ','}
      </li>);
    }
    result = (
      <React.Fragment key={'ordered-list'}>
        {'['}
        {json.length > 0 &&
        (<>
          <ol {...displayNoneWhen(this.state.minimized)}>{items}</ol>
          <span
            className={'minimized-item'}
            {...displayNoneWhen(!this.state.minimized)}
            onClick={() => this.changeMinimized(!this.state.minimized)}>{items.length}</span>
        </>)
        }
        {']'}
      </React.Fragment>
    );

    return result;
  };

  private createObjectList(json) {
    let result: JSX.Element;
    let keyCount = Object.keys(json).length;
    const items = [];
    for (let key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        items
          .push(
            (<li key={key}>
              <JsonItem json={json[key]} keyString={key} options={this.props.options} />
              {--keyCount > 0 && ','}
            </li>),
          );
      }
    }
    result =
      (<React.Fragment key={'unordered-list'}>
        {'{'}
        {items.length > 0 &&
        <>
            <ul {...displayNoneWhen(this.state.minimized)}>{items}</ul>
            <span className={'minimized-item'}
                  {...displayNoneWhen(!this.state.minimized)}
                  onClick={_ => this.changeMinimized(!this.state.minimized)}
            >{items.length}
          </span></>}
        {'}'}
      </React.Fragment>);

    return result;
  }
}


export {
  JsonItem as JsonView,
};
