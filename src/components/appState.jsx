import React from 'react';
import PropTypes from 'prop-types';
import JSonPretty from 'react-json-pretty';
import {AppStateTitle} from './styledComponents';
import '../common/style/JSONPretty.monikai.css';

export default class AppState extends React.Component {
  render() {
    const {store} = this.context;
    var stringifiedState;
    if(store.getState().actions.uploadingTask){
        var storeModified = store.getState();
        storeModified.actions.uploadingTask = "not null";
        stringifiedState = JSON.stringify(storeModified);
    }
    else
       stringifiedState = JSON.stringify(store.getState());
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
