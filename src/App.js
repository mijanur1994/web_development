import ProfileCard from "./ProfileCard";
// import BrightText from "./ProfileCard";
import AlexaImage from "./image/alexa.png"
import CortanaImage from "./image/cortana.png"
import SiriImage from "./image/siri.png"



    
function App(){

    return(
        <div>
            <div><h3>Personal Digital Assistants</h3></div>

           <ProfileCard title="Alexa" handle="@alexa.help" imageSrc={AlexaImage} />
           <ProfileCard title="Cortana" handle="@cortana222.help" imageSrc={CortanaImage}/>
           <ProfileCard title="Siri" handle="@siri07.help" imageSrc={SiriImage}/>
        </div>
    )
    // return(
    //     <div>
    //         <BrightText color="red"/>
    //         <BrightText color="green"/>
    //         <BrightText color="blue"/>
    //     </div>
    // )
};
export default App;