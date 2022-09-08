import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
      <MDBContainer className='p-4'>

        <section className='mb-4 mt-4'>
         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='facebook-f' />
         </a>

         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='twitter' />
         </a>

         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='google' />
         </a>
         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='instagram' />
         </a>

         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='linkedin-in' />
         </a>

         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='github' />
         </a>
       </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://gorent.com/'>
          GoRent.com
        </a>
      </div>
    </MDBFooter>
    
    
     
   

   
  
  );
}