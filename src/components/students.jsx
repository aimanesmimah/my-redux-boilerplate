import React from 'react';
import PropTypes from 'prop-types';
import Student from './student';
import {StudentSection} from "./styledComponents";

const Students = (props,{store}) => {

    const {students} = store.getState();

    return (<StudentSection>
       {
         (students.length)?
             students.map((student,i) => <Student key={i} {...student} />): ""
       }
    </StudentSection>);
}

Students.contextTypes = {
  store : PropTypes.object
}

export default Students;
