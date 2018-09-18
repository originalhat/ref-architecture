import * as React from 'react';
import * as styles from './AppRoot.css';

export interface AppProps {
  name: string
}

export default class AppRoot extends React.Component<AppProps> {
  render() {
    return (
        <h1 className={styles.AppRoot}>Hello, {this.props.name}!</h1>
    );
  }
}

