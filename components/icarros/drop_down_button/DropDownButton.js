import React from 'react';
import ActionLink from '../action_link/ActionLink';

export default class DropDownButton extends Component {

    handleItemSelected(e) {
        if (this.props.onItemSelect) {
            this.props.onItemSelect(e);
        }
    }

    render() {

        var buttonClassName = 'btn-group ' + this.props.classes;

        if (this.props.isVisible) {
            buttonClassName += ' open';
        }

        let items = this.props.items.map(item => {
            return (<li key={item.id}>
                        <ActionLink itemSelected={(e)=>this.handleItemSelected(e)} dataid={item.id}>{item.name || item}</ActionLink></li>);
        });

        return (
            <div className={buttonClassName}>
                <button type="button" className="btn btn-default" tabIndex="-1">{this.props.selectedLabel}</button>
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    {items}
                </ul>
            </div>
        );
    }
}
