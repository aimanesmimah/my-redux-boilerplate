import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Students from './components/students';
import Classroom from './components/class';
import AppState from './components/appState';
import FilterList from './components/filterList';
import {AppLayout,ClassroomLayout,StudentLayout,AppStateLayout,SubAppLayout} from './components/styledComponents';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  getChildContext() {
    return {
      store : this.props.store
    }
  }

  componentWillMount() {
    const {store} = this.props ;
    this.unsubscribe = store.subscribe(
          () => {
            //console.log(JSON.stringify(store));
            this.forceUpdate();
          });

  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
         <AppLayout>
           <ClassroomLayout>
             <Classroom />
           </ClassroomLayout>
           <SubAppLayout>
             <StudentLayout>
               <FilterList>
                 {
                   ({items})=> <Students items={items} />
                 }
               </FilterList>
             </StudentLayout>
             <AppStateLayout>
               <AppState />
             </AppStateLayout>
           </SubAppLayout>
         </AppLayout>
      </div>
    );
  }
}

App.propTypes = {
  store : PropTypes.object.isRequired
}

App.childContextTypes = {
  store : PropTypes.object.isRequired
}

export default App;
