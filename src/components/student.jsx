import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import $ from 'jquery';
import FileDownload from 'react-file-download';
import {ImageSection,StudentSection,StudentInfos} from './styledComponents';
//import uploadImage from '../common/images/uploadimage.jpg';
import uploadImage from '../common/images/uploadpic.png';
import firebaseStorage from '../firebase/firebaseConfig';
import {uploadImageAction,uploadProgressAction,updateProfileURL,
        addChecked,removeChecked} from '../redux/actions';

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.onUploadClick = this.onUploadClick.bind(this);
    this.handleCheckedClick = this.handleCheckedClick.bind(this);


  }

  componentWillMount(){

  }

  onUploadClick(e){
    const {number} = this.props ;
    const {actions} = this.context.store.getState();

    if(actions.uploadingTask !== null){
       console.log('task canceled');
       actions.uploadingTask.cancel();
     }

    $('.' + number).click();

  }

  handleCheckedClick(id){
    const {store} = this.context;
    const {number} = this.props;


    if($('#' + number).is(':checked'))
       store.dispatch(addChecked(id));
    else{
       //alert('entered');
       store.dispatch(removeChecked(id));
     }

  }

  componentDidMount() {

      const {id,number} = this.props ;
      const {store} = this.context ;

      $('.' + number).change((e)=> {
        //alert(JSON.stringify(e.target.files[0].name));
        //store.dispatch(uploadImageAction(true));
        var storageRef = firebaseStorage.ref('usersprofiles/' + number );
        var uploadTask = storageRef.put(e.target.files[0]);

        store.dispatch(uploadImageAction(true,number,uploadTask));

        uploadTask.on('state_changed',(snapshot) => {
            var progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            var progressInt = parseInt(progress,10);
            console.log(progressInt);
            store.dispatch(uploadProgressAction(progressInt));

        },(error)=>{
           //alert(JSON.stringify(error));
        },()=>{
           console.log(uploadTask.snapshot.downloadURL);
           setTimeout(()=> {
             store.dispatch(uploadImageAction(false,null,null));
             store.dispatch(updateProfileURL(id,uploadTask.snapshot.downloadURL));
           },100);

        });
      });
  }

  render() {
    const {id,name,age,profileURL,number,key} = this.props;
    const {actions} = this.context.store.getState();

    return (<StudentSection>
       <input className={number} type="file" name="profile" style={{display : 'none'}} />
       <ImageSection >
         { (actions.uploadingProfile && ( actions.uploadingStudentNum === number))?
           <Avatar size="100" name={name} round={true} src={(profileURL)?profileURL:""}
              style={{width : 100, opacity : 0.2 }}/> :
           <Avatar size="100" name={name} round={true} src={(profileURL)?profileURL:""}
              style={{width : 100 }}/>
          }
          {
            (actions.removeStudentClicked)?
               <input type="checkbox" id={number} className="removeinput"
                       onClick={()=>this.handleCheckedClick(id)} /> :""
          }
          <button className="uploadimage" onClick={this.onUploadClick}>
            <img src={uploadImage} className="image" title="upload"  />
          </button>
          {
            (actions.uploadingStudentNum === number)?
                <p className="uploadprogress">{actions.uploadingProgress} %</p> : ""
          }
        </ImageSection>


       <StudentInfos>{name} | {age} y.o <br/>N°: {number}</StudentInfos>

    </StudentSection>);
  }
}

Student.contextTypes = {
  store : PropTypes.object
}
