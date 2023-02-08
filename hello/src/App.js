import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from'./logo/ia.png';
import cloud from'./logo/cloud.png';
import translate from'./logo/translate.png';
import speaker from'./logo/speaker.png';
import Form from 'react-bootstrap/Form';
import {useState} from'react'; //file upload


function App() {

  const [file,setFile] =useState()
  
  function handleFile(event)  //file upload
  {
    setFile(event.target.files[0])
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Container fluid >
           <div className="item1">
            <div>
            <img src={logo}
                 width="180" height="90" alt="IA logo"></img>
                  <p className="d-inline-block"
                  align="centre">Transcription Tool</p>
            </div>
            <div className="item2"></div>
           </div>
        </Container>
        <Container>
          <div className="wrapper">
          <div className="item3">
           <p> Upload a file</p>
           <div className="upload">
           <img src={cloud}
                className="cloud" alt="cloud"></img>
            <div className="upbutton">
            <input type ="file" display="flex"name="file" onChange={handleFile}></input>
            </div>
            <div className='cloudtxt'>
            <p>upolad a .mp3 or .wav file</p>
            </div>
           </div>
            </div>
            <div className="item4">
             <div>
             <Row>
             <Col>
             <img src={translate}
                className="translate" alt="translate logo"></img>
             </Col>
             <Col ClassName="aligan-item">
             <p className="textlan">Language</p>
             </Col>
             </Row>
             </div>
             <Row>
              <Col>
              <div className="btn1">
              <Button type="button"
              className="btn-secondary">廣東話</Button>
              </div>
              </Col>
              <Col>
              <div className="btn2">
               <Button type="button"
              className="btn-secondary">普通話</Button>
               </div>
              </Col>
              <Col>
              <div className="btn3">
              <Button type="button"
              className="btn-secondary">English</Button>
              </div>
              </Col>
              </Row>
              <Row>
              <Col>
               <img className="speaker" src={speaker} alt="speaker logo"></img>
             </Col>
             <Col>
             <p className="Splan">Speaker</p> 
             </Col>
             </Row>
            <Row>
             <p></p><p></p><p></p><p></p>
              </Row>
              <Form.Select 
              aria-label="Default select example"
              className="form-inline">
                 <option>Number of speaker</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
              </Form.Select>
            </div>
            
          </div>
          </Container>
          <Container>
          
          </Container>
        </main>
    </div>
  );
}

export default App;
