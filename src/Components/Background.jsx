import { useTopic } from "../Contexts/TopicContext.jsx";
import SlideInfo from "../Components/SlideInfo.jsx";

function Background() {

    const {topics, currentTopic, backgroundAnimate} = useTopic();

    return (
        // div principal
        <div className={`flex flex-col justify-center items w-screen h-screen ${backgroundAnimate}`}>
            {/* div para el fondo */}
            <div className="fixed flex-z-50 left-0 right-0 top-0 bottom-0 select-none">
                <img className="w-full h-full object-cover" src={topics[currentTopic].background} alt="background" />
                <div className="absolute flex w-full h-full bg-gradient-to-b from-black/70 via-transparent to-transparent"></div>
            </div>

            <SlideInfo />
        </div>
    )
}

export default Background;