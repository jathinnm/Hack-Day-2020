import PropTypes from "prop-types";
import React, {Component} from "react";
import TextField from "../generic/TextField";
import Grid from '@material-ui/core/Grid';

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
            <Grid container spacing ={4}>
                <Grid item>
                <TextField label={"First Name"} value={this.state.firstName} onInputChange={this.onTextChange}/>
                </Grid>
                <Grid item>
                <TextField label={"Last Name"} value={this.state.lastName} onInputChange={this.onTextChange}/>
                </Grid>
                <Grid item>
                <TextField label={"Alias"} value={this.state.alias} onInputChange={this.onTextChange}/>
                </Grid>
            </Grid>
            </div>
            <div>
                <TextField label={"Last Name"} value={this.state.lastName} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"Alias"} value={this.state.alias} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"Role"} value={this.state.role} onInputChange={this.onTextChange}/>
            </div>
            <div> 
                <TextField label={"Products"} value={this.state.products} onInputChange={this.onTextChange}/>
            </div>
            <div> 
                <TextField label={"Languages"} value={this.state.languages} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"Point of Contact #1"} value={this.state.poc1} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"Point of Contact #2"} value={this.state.poc2} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"Product/Project Implementation Dates(s)"} value={this.state.piDates} onInputChange={this.onTextChange}/>
            </div>
            <div>
                <TextField label={"Additional Information"} value={this.state.additionalInfo} onInputChange={this.onTextChange}/>
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