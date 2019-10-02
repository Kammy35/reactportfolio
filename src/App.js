import React from 'react';
// import AnimationExample from '../src/nav.js';//
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//
import './App.css';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            homeVisible: true,
            aboutMeVisible: false,
            projectsVisible: false,
            contactVisible: false,
        }
    }

    resetState = () => {
        this.setState({
            homeVisible: false,
            aboutMeVisible: false,
            projectsVisible: false,
            contactVisible: false,
        })
    }

    switchTab = (newTab) => {
        console.log('testing')
        this.resetState()
        this.setState({
            // [`${newTab}Visible`]: true,
            // [`${this.state.currentTab}Visible`]: false,
            // currentTab: newTab,
            [`${newTab}Visible`]: true
        })
    }


  render(){
  return(
      <div className="App">
        <div className="wrapper">
            <div>
                <Navbar setVisible={this.switchTab}/>
                {this.state.homeVisible ? <Home /> : null}
                {this.state.aboutMeVisible? <AboutMe /> : null}
                {this.state.projectsVisible ? <Projects /> : null}
                {this.state.contactVisible ? <Contact /> : null}
            </div>
        </div>  
      </div>
  );
}
}

class Navbar extends React.Component{
    render() {
        return (
        <div className="nav">
            <button id="hbutton" onClick={() => this.props.setVisible("home")}>
                HOME
            </button>
            <button id="abutton" onClick={() => this.props.setVisible("aboutMe")}>
                ABOUT ME
            </button>
            <button id="pbutton" onClick={() => this.props.setVisible("projects")}>
                PROJECTS
            </button>
            <button id="cbutton" onClick={() => this.props.setVisible("contact")}>
                CONTACT
            </button>
        </div>
        );
    }
}

class Home extends React.Component {
    render(){
    return(
        <div className="shade">
            <div className="displaytext">
                <p className="words">"I'm Kamran, A Software Developer in the making. <br></br>I am an enthusiastic and keen individual
                who is intrigued by modern day technology"</p>
            </div>
        </div>

    );

}
}

// class Text extends React.Component {
//     render(){
//         return(
//             <div className="displaytext">
//                 <p>"I'm Kamran, A Software Developer in the making. <br></br>I am an enthusiastic and keen individual
//                 who is intrigued by modern day technology"</p>
//             </div>
//         );
//     }
// }

class AboutMe extends React.Component {
    render(){
    return(
      <div className="shadeTwo">
        <div className="aboutMeText">
            <p className="words">"I am an enthusiastic and keen individual who is intrigued by modern day technology. 
            A caring person who always loves to help others and give back to people. I am genuinely a hard worker who thrives upon challenges. 
            I am very focussed and pay exceptional attention to detail. 
            I enjoy working in a team and I also like to work indiviually when it is required. 
            Curently im just getting a taste of software development and im fascinated about it".</p>
        </div>
      </div>
    )
}
}

class Projects extends React.Component {
    render(){
    return(
      <div className="shadeThree">
        <div className="projectsText">
            <p className="wordsThree">Hello Projects</p>
        </div>
      </div>
    )
}
}

class Contact extends React.Component {
    render(){
    return(
      <div className="shadeFour">
        <div className="contacttext">
          <p>Name: Kamran Nawaz</p>
          <p>Email: Kammy007@hotmail.com</p>
          <p>Tel: 07709849829</p>
        </div>


        {/* <p className="contact-icons"> <FontAwesomeIcon className="icons" icon={faTwitter}/></p> */}

    
      </div>
    
    )
}
}



export default App;
