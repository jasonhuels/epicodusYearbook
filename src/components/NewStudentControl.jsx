import React from "react";
import PropTypes from "prop-types";
import NewStudentForm from "./NewStudentForm";

class NewStudentControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: true
        };     
    }

    render() {
        let currentlyVisibleContent = null;
        if(this.state.formVisibleOnPage){
            currentlyVisibleContent = <NewStudentForm onNewStudentCreation={this.props.onNewStudentCreation}/>;
        } 
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

NewStudentControl.propTypes = {
    onNewStudentCreation: PropTypes.func
};

export default NewStudentControl;