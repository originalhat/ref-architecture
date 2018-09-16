import * as React from 'react';

export interface AppProps {
  name: string
}

export default class AppRoot extends React.Component<AppProps> {
  render() {
    return (
        <div>Hello, {this.props.name}!</div>
    );
  }

}

