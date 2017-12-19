import React from 'react';
import PropTypes from 'prop-types';
import JSonPretty from 'react-json-pretty';
import {AppStateTitle} from './styledComponents';
import '../common/style/JSONPretty.monikai.css';

export default class AppState extends React.Component {
  render() {
    const {store} = this.context;
    const stringifiedState = JSON.stringify(store.getState());
    //alert(stringifiedState);
    return (<div>
      <AppStateTitle>Store state</AppStateTitle>
      <JSonPretty className="json-pretty" json={stringifiedState}></JSonPretty>
    </div>);
  }
}
AppState.propTypes = {
};

AppState.contextTypes = {
  store : PropTypes.object
}
