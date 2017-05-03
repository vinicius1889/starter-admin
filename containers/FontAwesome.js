/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule FontAwesome
 */

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import moment from 'moment';
import ModalFactory from '../components/modals/factory';

import {faicons} from '../components/icarros/i/IconsList';
import Row from '../components/icarros/row/Row';
import Col from '../components/icarros/col/Col';
import Page from '../components/icarros/page/Page';
import Fa from '../components/icarros/fa/Fa';
import Panel from '../components/icarros/panel/Panel';

let Factory = ModalFactory.modalFromFactory;
var shallowCompare = require('react-addons-shallow-compare');

class FontAwesome extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  render() {
    return (
  		<Page>
        <Row>
          <Col size="12">
            <Panel title="Font Awesome Icons">
              {Object.keys(faicons).map(i => {
                  return <Fa key={i} icon={i} classes={'m-r-lg m-b-lg'}/>
              })}
            </Panel>
          </Col>
        </Row>
      </Page>
		);
	}
}


export default FontAwesome;

