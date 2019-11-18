import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewStudentForm(props){
    let name = null;
    let photo = null;
    let quote = null;

    function handleNewStudentFormSubmission(event) {
        event.preventDefault();
        props.onNewStudentCreation({ name: name.value, photo: photo.value, quote: quote.value, id: v4()});
        console.log(photo);
        name.value = "";
        photo.value = "";
        quote.value = "";
    }

    return (
        <div>
            <form onSubmit={handleNewStudentFormSubmission}>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    ref={(input) => {name = input;}}/>
                    <input
                    type="file"
                    id="photo"
                    placeholder="Photo path"
                    ref={(input) => {photo = value;}}/>
                    <input
                    type="text"
                    id="quote"
                    placeholder="Quote"
                    ref={(input) => {quote = input;}}/>

                    <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

NewStudentForm.propTypes = {
    onNewStudentCreation: PropTypes.func
};

export default NewStudentForm;