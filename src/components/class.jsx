import React from 'react';
import PropTypes from 'prop-types';
import Starrating from 'react-stars';
import {StyledClassroom,ClassTitle} from './styledComponents';
import {rateClass} from '../redux/actions';



const Classroom = (props,{store}) => {
  const {classroom} = store.getState();

  const ratingChanged = (newRating) => {
         store.dispatch(rateClass(newRating));
  }

  return (<StyledClassroom>

    <ClassTitle>{classroom.degree} Class | Teacher {classroom.teacher}</ClassTitle>
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
