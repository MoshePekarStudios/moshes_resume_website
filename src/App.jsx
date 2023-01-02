

import './App.css'
import Background from './Background'
import Header from './Header'
import { ReactTerminal } from "react-terminal";

function App() {
  const commands = {
    'Moshe.Location':'"Brooklyn, NY"',
    'Moshe.Skills':'"[HTML ,CSS , JavaScript, ReactJS, NodeJS, W3.css, Bootstrap, MUI ]"',
    'Moshe.Projects':<><a href="https://logo-finder-sooty.vercel.app"><h2>Logo Finder</h2></a><br/><a href="#"><h2>Resume website</h2></a></>,
    
  }
 
  
  return (
    <Background>
  <div className="App">
  <Header>Moshe Pekar</Header>
  <div className="Terminals">

            <div className='TerminalWrapper' style={{width:'40vw', height:'50vh',margin:'5rem',color:'blue',backdropFilter: 'blur(5px)',overflow:'hidden'}}>
            <ReactTerminal commands={commands} prompt={'➡️'} welcomeMessage={<><h2>Hello!</h2><br/><h3>Type <code>Moshe.Location</code> for my Location!</h3><h3><br/>Type <code>Moshe.Skills</code> for my Skills!</h3><br /><h3>Type <code>Moshe.Projects</code> for links to my Projects!</h3><hr/></>} themes={{
              myCustomtheme: {
                themeBGColor: "transparent",
                themeToolbarColor: "tranparent",
                themeColor: "white",
                themePromptColor: "#a917a8"
          
              }
            }}  theme="myCustomtheme"/>
          
              </div>
              {/* <div className='TerminalWrapper2' style={{width:'40vw', height:'50vh',margin:'5rem',color:'blue',backdropFilter: 'blur(5px)',overflow:'hidden'}}>
            <ReactTerminal commands={commands} prompt={'➡️'} welcomeMessage={<><h2>Type <span style={{'fontVariant':'all-small-caps','background':'grey'}}></span>get advice</h2><br /><hr/></>} themes={{
              myCustomtheme: {
                themeBGColor: "transparent",
                themeToolbarColor: "tranparent",
                themeColor: "white",
                themePromptColor: "#a917a8"
          
              }
            }}  theme="myCustomtheme"/>
          
              </div> */}
  </div>
   
</div>

  </Background>
  


  )
}

export default App
