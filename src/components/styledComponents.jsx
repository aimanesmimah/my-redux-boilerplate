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
