import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto'}} >
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img
              src = "https://lh3.googleusercontent.com/jR_v-X4b2vCAtTGCbl_y-AgV6Svfj70BVVpL2EXfYKJ1DofHp0CaGFDPv9BnO7Sq-F1K-HImtTYp5lBvhId_6YaMInMYvmrxIFgFjhsCarYJ5ywVDt-9Tfs8BTXk-T3CB89Eu-5SKD8qfWPV9VIGxz9FUNKRo0zHJB3tXUPfb90EoYb9g1sPd1mVLjBGs-IR0fYTkOQEDENDTU8I0P9vr5suRMjzo2pMasFUKtoqiNXb1Cd84eZCvqlbTY50DEG4X5rlTexLgZeob4Abc6xOeeg8LeLo0WcxQNBk0PU4T2qiLFyVtdfE14kyCD1emhYUI-YfNmT0x00DFi0nSFyrouEzTkEz96ukH5GA0m8LCj4wrE9547zos81KnLEBu-7taI2dN0jAyP0C3o1Noy96vWM8lstzbMM8Ln5w1tXJxYbChpa_zcUPXuY4y_DQw-9NKSenPW676dwVTRWnZZk6tLyXZfS1eBUMg55jSMC8wPqR1n2BSFbkQQdQgcPesOPufKVpzJgJ55u7JPNccIMxYFFcu-bpFA-IIanUJIjuVf_1bC8rMLpbGPcWKBVjqaaCU4sOqNrURHQ9FXsJ6A4Bi1dXs7b5Rbh5jvh_64nMl_Kgkz3W8PUUbIK2kLTcebXRoROXNsw4IGacHui0xRS_Gt1b=s180-no"
              alt="avatar"
              className="avatar-img"
            /> */}

            <div className="banner-text">
              <h1>Developer</h1>
               <hr/>
               <p> HTML/CSS |  Bootstrap  |  Javascript  |  React  |  RoR  |  Node JS  |  Express  |  MYSQL  |  Wordpress  |  Classical Guitarist  |  Longboarder </p>
               <div className="social-links">
                 <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                   <i className="fa fa-linkedin-square" aria-hidden="true" />
                 </a>
                 <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                   <i className="fa fa-github-square" aria-hidden="true" />
                 </a>
               </div>
            </div>
           
            

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
