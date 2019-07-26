import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Austin Zou</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I AM ADDICTIED TO VIDEO GAMES AND I AM EARNING MONEY FROM MY DAD.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>59 connaught St</p>
            <h5>Phone</h5>
            <p>(64)225198991</p>
            <h5>Email</h5>
            <p>lerongzou@gmail.com</p>
            <h5>Web</h5>
            <p>Github.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2017}
              schoolName="My Primary"
              schoolDescription="I went to Blockhouse Bay Primary"
               />

               <Education
                 startYear={2018}
                 endYear={2019}
                 schoolName="My Intermediate"
                 schoolDescription="IT IS A PRIVATE SCHOOL WITH SMART PEOPLE"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2028}
              endYear={2030}
              jobName="First Job"
              jobDescription="havet got one"
              />

              <Experience
                startYear={2038}
                endYear={2030}
                jobName="Second Job"
                jobDescription="dont have one"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={20}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={50}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={20}
                    />
                    <Skills
                      skill="React"
                      progress={10}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
