import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import AddStudentForm from './addStudentForm';
import {SearchSection,SearchInput,SearchImage,AddButton,RemoveButton,ListOperations} from './styledComponents';
import {hoverOnAddAction,addStudentClickedAction,hoverOnGoBackAction,
  hoverOnRemoveAction,removeStudentClickedAction,removeStudent,
  initializeChecked,filterAction} from '../redux/actions';
import plusIcon from '../common/images/plus.png';
import plusIconHover from '../common/images/plus1.png';
import gobackIcon from '../common/images/goback.png';
import gobackIconHover from '../common/images/goback1.png';
import removeIcon from '../common/images/remove.png';
import removeIconHover from '../common/images/remove1.png';
import removeIconConfirm from '../common/images/remove2.png';
import searchimg from '../common/images/loupe1.png';


export default class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.items = [];
    this.onAddClick = this.onAddClick.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onGoBackClick = this.onGoBackClick.bind(this);

  }

  onAddClick(e){
    const {store} = this.context;
    e.preventDefault();

    store.dispatch(addStudentClickedAction(true));


  }

  onRemoveClick(e){
    const {store} = this.context ;
    const {actions,checkedStudents} = store.getState();
    e.preventDefault();

    if(checkedStudents.length){
       checkedStudents.map(id => {
         store.dispatch(removeStudent(id));

       });
       store.dispatch(removeStudentClickedAction(!actions.removeStudentClicked));
       store.dispatch(initializeChecked());
       store.dispatch(filterAction(false));

    }
    else{
      store.dispatch(removeStudentClickedAction(!actions.removeStudentClicked));
    }
  }

  onGoBackClick(e){
    e.preventDefault();
    const {store} = this.context;
    store.dispatch(addStudentClickedAction(false));
  }

  componentWillMount(){
    const {students} = this.context.store.getState();
    this.items = students ;
  }

  componentWillUpdate(nextProps, nextState) {
       //alert('update');
  }

  componentDidMount(){
    const {store} = this.context ;

    $(this.search).keyup((e)=>{
      //alert($(this.search).val());
      //s.includes($(this.search).val());
      const {students} = store.getState();


      this.items = students.filter(s => s.number.toLowerCase().includes($(this.search).val()));
      store.dispatch(filterAction(true));



    });
  }

  render() {
    const {store} = this.context ;
    const {actions,checkedStudents,students} = store.getState();
    return (<div>
      <ListOperations>
      {
        (actions.addStudentClicked)?

              <AddButton href="#" onMouseOver={()=> store.dispatch(hoverOnGoBackAction(true)) }
                         onMouseLeave={()=> store.dispatch(hoverOnGoBackAction(false))}
                         onClick={this.onGoBackClick}>
                <img src={(actions.hoverOnGoBack)?gobackIconHover:gobackIcon} className="addimage" />
              </AddButton>:
              <AddButton href="#" onMouseOver={()=> store.dispatch(hoverOnAddAction(true)) }
                         onMouseLeave={()=> store.dispatch(hoverOnAddAction(false))}
                         onClick={this.onAddClick}>
                <img src={(actions.hoverOnAddStudent)?plusIconHover:plusIcon} className="addimage" />
              </AddButton>



      }
      <RemoveButton href="#" onMouseOver={()=> store.dispatch(hoverOnRemoveAction(true)) }
                 onMouseLeave={()=> store.dispatch(hoverOnRemoveAction(false))}
                 onClick={this.onRemoveClick}>
          <img src={
              (checkedStudents.length)?removeIconConfirm:
                   (actions.hoverOnRemoveStudent)?removeIconHover:removeIcon
                 }
               className="removeimage" />
      </RemoveButton>
      <SearchSection>
            <SearchImage src={searchimg} />
            <SearchInput className="searchinput" type="text"
              innerRef={search => this.search = search}
              placeholder="filter list by user number" />
      </SearchSection>
      </ListOperations>

      {
        (actions.addStudentClicked)?
            <AddStudentForm /> :
               <div>
                 {
                   this.props.children({items : (actions.filterTime)?this.items:students})
                 }
               </div>

      }
    </div>);
  }
}

FilterList.contextTypes = {
  store : PropTypes.object
}
