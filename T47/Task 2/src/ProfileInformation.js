import Card from 'react-bootstrap/Card';  //bootstrap card
import ListGroup from 'react-bootstrap/ListGroup';  //bootstrap list group
import profilePic from '../me.png'  //photo for profile avatar

//this is the profile card containing picture in the <Card.Img/>, my name, link to linkedIn page and email address
function ProfileInformation() { 
    return (
      <Card style={{ width: '18rem'}} id="profileCard">  
        <Card.Img variant="top" src={profilePic} id="profilePic"/> {/* avatar pic */}
        <Card.Body>
          <Card.Title id="name">Kamil Synowiec</Card.Title>  {/* name */}
          <Card.Text id="title">Full stack developer</Card.Text>  {/* job title */}
          <Card.Text>    
          Full stack web developer "I can't live without challenges and goals - I need to see evidence of my success"  {/* short description/motto */}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <a href="https://www.linkedin.com/in/kamilsynowiec/"><ListGroup.Item>LinkedIn</ListGroup.Item></a> {/* Linkedin link */}
          <ListGroup.Item>
          <span role="img" aria-label="envelope emoji">✉</span>
            kamilsynowiec2@gmail.com</ListGroup.Item> {/* email address */}
        </ListGroup>
        <Card.Body>
          I built this website with React. The full source code can be found on my github:  
          <Card.Link href="https://github.com/KamilSynowiec">github</Card.Link>
        </Card.Body>
      </Card>
    );
  }

  export default ProfileInformation;