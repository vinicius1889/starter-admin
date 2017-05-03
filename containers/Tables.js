/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Tables
 */

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import moment from 'moment';
import ProgressBar from '../components/icarros/progress_bar/ProgressBar';

import Panel from '../components/icarros/panel/Panel';
import Table from '../components/icarros/table/Table';

import Row from '../components/icarros/row/Row';
import Col from '../components/icarros/col/Col';
import Page from '../components/icarros/page/Page';

const tableData = [
  {Device : 'Heating - House', consumed: '45 kW', potential: '30 kW'},
  {Device : 'Heating - House', consumed: '45 kW', potential: '30 kW'},
  {Device : 'Heating - House', consumed: '45 kW', potential: '30 kW'},
  {Device : 'Heating - House', consumed: '45 kW', potential: '30 kW'},
  {Device : 'Heating - House', consumed: '45 kW', potential: '30 kW'}
];

var shallowCompare = require('react-addons-shallow-compare');


class Tables extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }
    
    render() {
        return (
          <Page>
            <Row>
                <Col size={12}>
                    <Panel title="Simple">
                      <table className="table"> 
                        <thead> 
                          <tr> 
                            <th>Device</th> 
                            <th>Consumed</th> 
                            <th>Potential</th> 
                            <th>Distribution</th> 
                          </tr> 
                        </thead> 
                        <tbody> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-default" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-danger" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-warning" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-success" />
                            </td> 
                          </tr> 
                          <tr> 
                            <td>Heating - House</td> 
                            <td>45 kW</td> 
                            <td>30 kW</td> 
                            <td> 
                              <ProgressBar style={{backgroundColor:'#f77373'}} now={40} max={100} theme="progress-bar-info" />
                            </td> 
                          </tr> 
                        </tbody> 
                      </table>
                    </Panel>
                  </Col>
                </Row>
                <Row>
                <Col size={12} large={8}>
                    <Panel title="Striped">
                       <table className="table table-striped"> 
                            <thead> 
                              <tr> 
                                <th>Device</th> 
                                <th>Consumed</th> 
                                <th>Potential</th> 
                              </tr> 
                            </thead> 
                            <tbody> 
                              <tr> 
                                <td>Heating - House</td> 
                                <td>45 kW</td> 
                                <td>30 kW</td> 
                              </tr> 
                              <tr> 
                                <td>Heating - House</td> 
                                <td>45 kW</td> 
                                <td>30 kW</td> 
                              </tr> 
                              <tr> 
                                <td>Heating - House</td> 
                                <td>45 kW</td> 
                                <td>30 kW</td> 
                              </tr> 
                              <tr> 
                                <td>Heating - House</td> 
                                <td>45 kW</td> 
                                <td>30 kW</td> 
                              </tr> 
                              <tr> 
                                <td>Heating - House</td> 
                                <td>45 kW</td> 
                                <td>30 kW</td> 
                              </tr> 
                            </tbody> 
                          </table>
                          </Panel>
                        </Col>
                      </Row>
                      <Row>
                        <Col size={12}>
                          <Panel title="Component Table">
                              <Table data={tableData} classes={'m-b-lg'} />
                          </Panel>
                        </Col>
                      </Row>
                    </Page>
		);
	}
}

export default Tables;

