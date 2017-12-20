import styled from 'styled-components';

export const StudentsSection = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  flex-wrap:wrap;
`

export const StyledClassroom = styled.div`
  width : 300px ;
  margin : auto ;
  padding : auto ;


  .starrating {
    width : 100px ;
    margin: auto;

  }
`

export const StudentSection = styled.div`
  width : 180px
`

export const ImageSection = styled.div`
   position: relative;
   padding : 0;


   .uploadimage {
     position : absolute;
     padding : 0;
     margin-bottom : 0;
     right :39%;
     bottom : 0;
     z-index : 100;
     background: none ;
     border : none;
     cursor:pointer;
     outline: none
   }

   .image {
     width : 30px;
     height: 30px;
     opacity: 0.7;
     &:hover {
       opacity: 1
     }

     ::title {
       color : red;
     }
   }

   .removeinput{
     position : absolute;
     top : 0 ;
     left : 32%
   }

   .uploadprogress {
     position : absolute ;
     top : 20% ;
     left : 45%;
     color : black ;
     font-weight:600;
   }
`

export const StudentInfos = styled.p`
  line-height:19px;
  font-size : 13px;
  font-variant:small-caps;
  font-weight: 600
`

export const AppLayout = styled.div`
  display: flex;
  flex-direction:column;

`

export const ClassroomLayout = styled.div`
  width : 80%;
  margin : 0 auto 10px auto ;
  border-style:dotted;
  border-color: #afb1a7;
  background-color: #59b5f0;
  border-radius: 5px
`

export const SubAppLayout = styled.div`
  display: flex ;
  flex-direction: row ;
`

export const StudentLayout = styled.div`
  background-color: #95c5e4;
  margin : 10px 50px 0 20px;
  padding : 5px 20px ;
  width : 75%;
  border-style:dotted;
  border-color: #afb1a7;
  border-radius: 5px;
  height : 436px;
  overflow-y:auto;
`

export const AppStateLayout = styled.div`
  background-color: #95c5e4;
  margin : 10px 20px 0 0px;
  padding : 5px 0 ;
  width : 25%;
  border-style:dotted;
  border-color: #afb1a7;
  border-radius: 5px;
  height : 436px;
  overflow-y:auto;
`

export const AppStateTitle = styled.p`
  font-size: 15px;
  color :#313266;
  font-weight: bold
`

export const ListOperations = styled.div`
  display: flex;
  flex-direction:row;
  /*border : 1px solid black;*/
  margin : 10px 0 30px 0;
`



export const SearchSection = styled.section`
  position:relative;
  width : 235px;
  margin-top: 30px;
  margin: 0 0 0 30px;
  padding: auto;
  /*border : 1px solid black;*/
  &:after{
    content : '';
    display: block;
    height : 2px ;
    width : 0%;
    background :white ;
    transition: width 0.5s ease;
  }

  &:hover:after {
    transition: width 0.5s ease;
    width : 100%;
  }

  .searchinput::placeholder{
    color : white;
    text-align:left;
    font-size: 15px;
    text-shadow: 2px 2px 2px black;
  }
`

export const SearchInput = styled.input`
  border : none ;
  background: transparent ;
  color : white;
  width : 100% ;
  padding : 5px 0px 10px 45px;
  font-size : 20px ;
  font-weight : 500;
  /*border : 1px solid black;*/
  &:focus {
    outline: none;

  }
`

export const SearchImage = styled.img`
  position:absolute;
  width : 35px ;
  height : 35px;
  left : 5px;
`

export const AddButton = styled.a`
  margin : 4px 0 0 50px;
  .addimage {
      width : 30px ;
      height : 30px ;
  }
`

export const RemoveButton = styled.a`
  margin : 4px 0 0 25px;
  .removeimage {
      width : 30px ;
      height : 30px ;
  }
`

export const AddForm = styled.form`

`

export const FormSection = styled.div`
    margin : 10px 0;

   .addinput {
      height : 25px ;
      width : 200px;
      border-radius: 20px;
      padding : 3px 15px;
      &:focus{
        transition: background-color .5s ease-in ;
        outline : none ;
        background-color: #eee;
        color : black;
        font-weight:bold;
      }
   }
`

export const SubmitSection = styled.div`
  .submitinput {
     color : white;
     font-size: 18px;
     font-weight:bold;
     background: #3cbd5d;
     border-radius: 8px;
     border: none;
     height : 25px;
     width : 80px;

     &:hover {

       background: white;
       color : #3cbd5d
     }

     &:focus {
       outline : none;
     }
  }
`
