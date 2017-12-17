import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  render() {
    const {id,name,age,profile,number} = this.props;
    return (<div>
       <Avatar size="80" name={name} round={true} src={(profile)?profile:""}
          style={{width : 80 }}/>
       <p>{name} | {age} y.o</p>
       <p>N°: {number}</p>
    </div>);
  }
}

Student.contextTypes = {
  store : PropTypes.object
}
