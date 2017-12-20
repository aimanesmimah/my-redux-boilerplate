import React from 'react';
import PropTypes from 'prop-types';
import Student from './student';
import {StudentsSection} from "./styledComponents";

const Students = (props) => {

    const students = props.items ;

    return (<StudentsSection>
       {
         (students.length)?
             students.map((student,i) => <Student key={i} {...student} />): ""
       }
    </StudentsSection>);
}


export default Students;
