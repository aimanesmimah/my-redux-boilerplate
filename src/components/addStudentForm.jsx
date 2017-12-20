import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {AddForm,FormSection,SubmitSection} from './styledComponents';
import {addStudent,addStudentClickedAction,filterAction} from '../redux/actions';


class AddFormStudent extends Component  {
  constructor(props) {
    super(props);

    this.onsubmit = this.onsubmit.bind(this);

  }

  onsubmit(e){
    e.preventDefault();

    const {store} = this.context ;
    const {students} = store.getState();
    const {_name,_age,_number} = this.refs ;

    if(_name.value && _age.value && _number.value){
      store.dispatch(addStudent(students.length+1,_name.value,_age.value,_number.value));
      store.dispatch(addStudentClickedAction(false));
      store.dispatch(filterAction(false));
    }
    else{
      alert('fill up all fields');
    }
  }


  render(){
    return (
      <AddForm onSubmit={this.onsubmit}>
        <FormSection>
            <input type="text" className="addinput" placeholder="student full name" ref="_name" />
        </FormSection>
        <FormSection>
            <input type="number" className="addinput" placeholder="student age" ref="_age" />
        </FormSection>
        <FormSection>
            <input type="text" className="addinput" placeholder="student unique identifier" ref="_number" />
        </FormSection>
        <SubmitSection>
            <input type="submit" value="save" className="submitinput"/>
        </SubmitSection>
      </AddForm>
    )
  }
}

AddFormStudent.contextTypes = {
  store : PropTypes.object
}

export default AddFormStudent;
