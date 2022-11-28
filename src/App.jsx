

import './App.css'
import Background from './Background'
import Header from './Header'
import { ReactTerminal } from "react-terminal";

function App() {
  const commands = {
    'Moshe.Location':'"Brooklyn, NY"',
    'Moshe.Skills':'"[HTML ,CSS , JavaScript, ReactJS, NodeJS, W3.css, Bootstrap, MUI ]"'
  }

  return (
   <Background>
     <div className="App">
     
  <Header>Moshe Pekar</Header>
  <div id='Terminal' style={{width:'50vw', height:'50vh',padding:'10rem',color:'blue'}}>
  <ReactTerminal commands={commands} prompt={'➡️'} welcomeMessage={<><h2>Hello!</h2><br/><h3>Type <code>Moshe.Location</code> for my Location!<br/>Type <code>Moshe.Skills</code> for my Skills!</h3><hr/></>}/>
  </div>
  
    </div>
   </Background>
   
  )
}

export default App
