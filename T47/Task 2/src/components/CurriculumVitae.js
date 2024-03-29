import Card from 'react-bootstrap/Card';  //bootstrap card
import ListGroup from 'react-bootstrap/ListGroup';  //bootstrap list group

//this component contains 3 sections: About, Experiences and Interests. It uses bootstrap card component
function CurriculumVitae(){
    return(
          <div>
            <Card style={{ width: '68rem' }} id="curriculumVitae">  
              <Card.Header>About</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>My name is Kamil. Currently, I am taking part in HyperionDev Bootcamp! I am learning to build simple apps using Node.js and React
                </ListGroup.Item>
                <ListGroup.Item>    {/* about desciption */}
                  <ul>
                    <li>@ Good understanding of responsive website development and frameworks like Bootstrap gained while working on a full-stack app that aims to educate others about sustainable lifestyles.</li>
                    <li>@ Familiar with Express.js and Mongoose. Please have a look at my projects such as URL shortener or timestamp microservice</li>
                    <li>@ Experience with Javascript (ES6) and jQuery</li>
                    <li>@ Strong understanding of OOP principles</li>
                    <li>@ Confident in using Git and GitHub</li>
                    <li>@ Advanced knowledge of Windows and Mac operating systems and proficiency in using UNIX platforms</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
  
              <Card.Header>Experience</Card.Header> {/* work experience */}
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div>
                  <h6>Polish Localisation QA Tester at Pole To Win</h6>  {/* recent experience */}
                  <p>June 2021 - present</p>
                  <p>I am currently working as part of a multilingual project team in video game localization.</p>
                  <p>My tasks include:</p>
                  <ul>
                    <li>proofreading text to ensure they are free from any linguistic issues</li>
                    <li>attending daily stand-ups</li>
                    <li>collaborating with team and Project Coordinator</li>
                    <li>reporting bugs into the Jira bug tracker</li>
                    <li>updating TestPlans</li>
                    <li>providing feedback on the game tested</li>
                    <li>re-testing bugs that are fixed by developersI am currently working as part of a multilingual project team in video game localization. My tasks include: - proofreading text to ensure they are free from any linguistic issues - attending daily stand-ups - collaborating with team and Project Coordinator - reporting bugs into the Jira bug tracker - updating TestPlans - providing feedback on the game tested - re-testing bugs that are fixed by developers</li>
                  </ul>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                <div>        {/* older experience */}
                  <h6>e-mail customer specialist at Armatis-lc</h6>
                  <p>August 2018 - October 2018</p>
                  <ul>
                    <li>I Considered complaints from airline passengers and solved their issues (cancelled flight, lost luggage</li>
                    <li>cooperated with other team members and made calls to airport staff</li>
                    <li>Modified existing databases to meet unique needs</li>
                    <li>Offered support and information to customers, ensuring compliance with policies and procedures</li>
                  </ul>
                  </div>
                </ListGroup.Item>
              </ListGroup>
  
              <Card.Header>Interests</Card.Header>
              <ListGroup variant="flush">  {/*Bootstrap list group */}
              <ListGroup.Item>I love learning languages, traveling and discovering other cultures. Currently I am studying towards HSK2 in Chinese language in my spare time. I also like to hike in mountains. My favourite place was Slavkovsky stit in Tatra mountains (on the border between Poland and Slovakia)</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
    );
  }
  
  export default CurriculumVitae;
