import React from "react";
import Student from "./Student";
import PropTypes from "prop-types";

function StudentList(props){
  return(
    <div>
      {props.studentList.map((student) =>
        <Student name={student.name}
          photo={student.photo}
          quote={student.quote} 
          key={student.id}/> 
      )}
    </div>
  );
}

StudentList.propTypes = {
  studentList: PropTypes.array
};

export default StudentList;