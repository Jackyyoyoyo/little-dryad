'use strict';

import React from 'react';
import radium from 'radium';

import * as styles from './styles/home';

@radium
/**
 */
export default class Home extends React.PureComponent {
  /**
   * @return {Component}
   */
  render() {
    return (
      <div style={styles.root}>
        <div
          style={{
            background: 'red',
            color: 'blue'
          }}
        >
        </div>
        This is Index!
      </div>
    );
  }
}
