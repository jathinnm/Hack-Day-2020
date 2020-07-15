import React, {Component} from "react";
import PropTypes from "prop-types";

class TextField extends Component {
    constructor(props) {
        super(props);
        this.inputValue = null;
        this.errorMsg = null;
        this.onTextChange = this.onTextChange.bind(this);
    }
    render() {
        this.inputValue = this.props.value;

        return(<div className="">
            <div>
                <div>
                    <p className="">{this.props.label}</p>
                </div>
                <div>
                    <label htmlFor="textField" className=""></label>
                    <input type="text" name="textField" id="textField" defaultValue={this.props.value} className=""/>
                    <div id="errorAlert" className={this.errorMsgClass}>
                        <div aria-live="assertive">
                            {this.errorMsg}
                        </div>
                    </div>
                </div>
            </div>
        </div>);

    }
    onTextChange(e) {
        const valdMsg = "Please enter a valid value";
        if(!e.target.validity.valid) {
            this.errorMsgClass = "";
            this.errorMsg = valdMsg;
            this.props.onInputChange(null);
        }
        else {
            this.errorMsgClass = "";
            this.errorMsg = "";
            this.props.onInputChange(e.target.value);
        }
        this.inputValue = e.target.value;
    }
}
TextField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onInputChange: PropTypes.func.isRequired
};
export default TextField;