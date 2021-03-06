'use strict';

import React from 'react';
import radium, {Style as StyleRadium} from 'radium';
import normalize from 'radium-normalize';

const all = {
  overflowScrolling: 'touch'
};

const a = {
  color: 'inherit',
  textDecoration: 'initial'
};

@radium
/**
*/
export default class Normalize extends React.Component {
  /**
   * @return {Component}
  */
  render() {
    return (
      <style>
        <StyleRadium rules={normalize} />

        <StyleRadium scopeSelector='*'
          rules={all}
        />

        <StyleRadium scopeSelector='a'
          rules={a}
        />
      </style>
    );
  }
}
