import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';


import I from '../../components/icarros/i/I';
import Panel from '../../components/icarros/panel/Panel';
import Button from '../../components/icarros/button/Button';
import Row from '../../components/icarros/row/Row';
import Col from '../../components/icarros/col/Col';
import Page from '../../components/icarros/page/Page';

var shallowCompare = require('react-addons-shallow-compare');

export default class Dashboard extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render(){
    return(
        <Page>
            <Row>
                <Col size={12}>
                    Teste
                </Col>
            </Row>
        </Page>);
    }



};


function mapStateToProps(state) {
    return {
        myproponcomponent: state.myprop
    };
}

export default connect(mapStateToProps)(Dashboard);