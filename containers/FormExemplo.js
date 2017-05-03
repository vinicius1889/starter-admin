import React, {Component} from 'react';

import {Button, Panel} from '../components/ui';
import {Row, Col, Page} from '../components/ui/Layout';
import Input from '../components/ui/Input';

 class FormExemplo extends Component {


    testaEvento(event){
        alert('dsada');
        console.log(event);
    }


     render() {

        return (
            <Page>
                <Row>
                    <Col size={6}>
                        <Panel title="Simple">
                            <form role="form">
                                <div className="form-group">
                                    <label>Email</label>
                                    <Input placeholder="email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <Input placeholder="password" errorMessage="required" format="password" />
                                </div>
                                <div className="checkbox">
                                    <label> <input type="checkbox" /> Remember me </label>
                                </div>
                                <Button label="login" color="btn-info" />
                            </form>
                        </Panel>
                    </Col>
                </Row>
            </Page>

        )

    }


}

export default FormExemplo;
