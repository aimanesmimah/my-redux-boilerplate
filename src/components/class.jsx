import React from 'react';
import PropTypes from 'prop-types';
import Starrating from 'react-stars';
import {StyledClassroom} from './styledComponents';



const Classroom = (props,{store}) => {
  const {classroom} = store.getState();

  const ratingChanged = (newRating) => {

  }

  return (<StyledClassroom>
    <h3>{classroom.degree} | {classroom.teacher}</h3>
    <div className="starrating">
    <Starrating count={5}
        value={classroom.rating}
        onChange={ratingChanged}
        size={24}
        color2={'#ffd700'}
         />
    </div>
  </StyledClassroom>)


}

Classroom.contextTypes = {
  store : PropTypes.object
}

export default Classroom;
