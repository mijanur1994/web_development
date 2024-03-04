import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
// import BrightText from "./ProfileCard";
import AlexaImage from "./image/alexa.png";
import CortanaImage from "./image/cortana.png";
import SiriImage from "./image/siri.png";

/**
 * The App function is the main function of this application. It renders a
 * simple header and three BrightText components, each with a different color.
 
 *
 *
 * @return A brighttext component
 *
 * @docauthor Trelent
 */
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa.help"
                imageSrc={AlexaImage}
                description="Alexa is created by Amazona and helps you make life easier!"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana222.help"
                imageSrc={CortanaImage}
                description="Cortana is made by Microsoft. It is very helpsful in different ways!"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri07.help"
                imageSrc={SiriImage}
                description="Siri is created by Apple and helps you to access every virtual things easily."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
  // return(
  //     <div>
  //         <BrightText color="red"/>
  //         <BrightText color="green"/>
  //         <BrightText color="blue"/>
  //     </div>
  // )
}
export default App;
