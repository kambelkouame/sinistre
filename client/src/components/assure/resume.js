import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import image from '../../img.png'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={image}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>KAMBEL .K</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>MES CONTRACTS</h2>


            <Education
            //  startYear={2002}
            //  endYear={2006}
              schoolName="Contrat 1"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                // startYear={2007}
               //  endYear={2009}
                 schoolName="Contract 2"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>MES BIENS ASSURES</h2>

            <Experience
              //startYear={2009}
              //endYear={2012}
              jobName="BIENS 1"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
              //  startYear={2012}
               // endYear={2016}
                jobName="BIEN 2"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>MES GESTIONNAIRES</h2>
              <Experience
              //startYear={2009}
              //endYear={2012}
              jobName="Gestionnaires 1"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
              //  startYear={2012}
               // endYear={2016}
                jobName="Gestionnaires 2"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
