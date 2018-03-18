'use strict';

import React from 'react';
import radium from 'radium';
import Wrapper from 'cat-components/lib/wrapper';

import Normalize from 'components/Normalize';
import Home from 'components/Home';

const Main = radium(({
  radiumConfig
}) => (
  <Wrapper radiumConfig={radiumConfig}>
    <React.Fragment>
      <Normalize />

      <Home />
    </React.Fragment>
  </Wrapper>
));

export default Main;
