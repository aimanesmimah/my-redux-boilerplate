import styled from 'styled-components';

export const StudentSection = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-around;
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

   .uploadprogress {
     position : absolute ;
     top : 20% ;
     left : 45%;
     color : black ;
     font-weight:600;
   }
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
  background-color: #59b5f0
`

export const SubAppLayout = styled.div`
  display: flex ;
  flex-direction: row ;
`

export const StudentLayout = styled.div`
  background-color: #95c5e4;
  margin : 10px 50px 0 20px;
  padding : 20px;
  width : 75%;
  border-style:dotted;
  border-color: #afb1a7
`

export const AppStateLayout = styled.div`
  background-color: #95c5e4;
  margin : 10px 20px 0 0px;
  padding : 5px 0 ;
  width : 25%;
  border-style:dotted;
  border-color: #afb1a7
`

export const AppStateTitle = styled.p`
  font-size: 15px;
  color :#313266;
  font-weight: bold
`
