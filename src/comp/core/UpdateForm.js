import PropTypes from "prop-types";
import React, {Component} from "react";
import TextField from "../generic/TextField";

export class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            alias: null,
            role: null,
            products: null,
            languages: null,
            poc1: null,
            poc2: null,
            piDates: null,
            additionalInfo: null,
            shouldResetForm: false,
            submitEnabled: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        return(
        <div>
            <div>
                <TextField label={"firstName"} value={this.state.firstName} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"lastName"} value={this.state.lastName} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"alias"} value={this.state.alias} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"role"} value={this.state.role} onInputChange={this.onTextChange}/>
            </div>
            <div> 
                <TextField label={"products"} value={this.state.products} onInputChange={this.onTextChange}/>
            </div>
            <div> 
                <TextField label={"languages"} value={this.state.languages} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"poc1"} value={this.state.poc1} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"poc2"} value={this.state.poc2} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"piDates"} value={this.state.piDates} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"additionalInfo"} value={this.state.additionalInfo} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <button id="submit" onClick={this.onSubmit} />
            </div>
            
        </div>);
    }
    onSubmit() {
        let form = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        role: this.state.role,
        alias: this.state.alias,
        product: this.state.product,
        languages: this.state.product,
        poc1: this.state.poc1,
        poc2: this.state.poc2,
        piDates: this.state.piDates,
        additionalInfo: this.state.additionalInfo
        }
        this.props.submittedForm(form);
    };
};
UpdateForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default UpdateForm;