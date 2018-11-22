import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../css/Resume.css';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={5}>
            <div>
              <img src="https://lh3.googleusercontent.com/BTtwC9rA1MbRadDegfUZ3cKLJEeFwl4q2eBwQ0NQ70kOtmY-v5FJ3RpF8vXK5zBmgUnqqr6nxHU_cLh1CBQ9yFPCGRQCkj8Yrb-E1FjlUidhe788ZnwaybWGgegvZMRUp5gdptXY_zqAckpJx611C_OAQxJnC6H_cmsv92Zwrj_ag4beAHpfQjW2zkNe38ftuau-NSxSvPF5umos5bxDdG-6xo7Dp3SX8IVCJ35GIiWrjIOOhNNh44Iy5hoA_P7DLBYfQIsYHY30PftGrmbE9fD1etCN4ao48RiQmRmpCa4UWNyDhBuY6eXCIM_DesJTrhSjJaV0ezFtg4bMiZsLWLr1CTNIiotFzV2dt7COFrU-tNdlTghflpRg9BkFBvD2lsttLmj2ljbOyubDY5-zFAAQjfywwe1khU3XfgZqNznMqvl6Gs0-b25glnSx-SW6aFeJaZqPsGi-NXoCmvbQ8-VCoDCRh-yOZ1ScigNOO2uu2t0e8zopYFXKPlOSUE0WWfBHRn6LLr7LYmYp6ajjcczwvQP5pxOtenLVkkAiW5UJi7ngp4seFCXhJZQAx197b3zHioUvhOUubncoIL7v9fz0pl5pepLIPYwomLJL1IlCPZVOSXK7_8ZsTpEiB9qR1mp1X2oAPaLD1hAvgj-tUJas=w501-h668-no" alt="avatar" style={{ height: '250px', borderRadius: '25px'}}/>              
            </div>
            <h2>Hector del Angel</h2>
            <h4>Web Developer</h4>
            <hr style={{borderTop: '3px solid #045604', width: '100%'}}/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia tenetur dolor modi cumque, eligendi magni, voluptates maxime beatae ea asperiores laboriosam quam quibusdam molestiae?</p>
            <hr/>
            <p>hectordelangel@gmail.com</p>
            <p>818.303.5489</p>           
            <hr/>
          </Cell>
          <Cell className="resume-right-col" col={7}>
            <Education 
              endYear={2008}
              schoolName="California State University, Northridge"
            />
            <hr style={{borderTop: '3px solid #034400'}} />
            <h2>Experience</h2>
            <Experience 
              startYear={1998}
              endYear={'Current'}
              jobName="Graysons"
              jobDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima natus quis nostrum eveniet harum magni quia, architecto laudantium."
            />
            <Experience 
              startYear={2013}
              endYear={2017}
              jobName="Graysons"
              jobDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima natus quis nostrum eveniet harum magni quia, architecto laudantium."
            />
            <hr style={{borderTop: '3px solid #034400'}} />
            <h2>Skills</h2>
              <Skills 
                skill="Javascript"
                progress={100}
              />
              <Skills 
                skill="HTML/CSS"
                progress={100}
              />
              <Skills 
                skill="NodeJS"
                progress={65}
              />
              <Skills 
                skill="React"
                progress={75}
              />
              <Skills 
                skill="RoR"
                progress={65}
              />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
