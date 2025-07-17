import { createContext, useContext, useState } from "react";
import datos from "../data/info.js";

const TopicContext = createContext();

const topics = datos.topic.photosSlider;

function TopicProvider({children}) {

    const [currentTopic, setCurrentTopic] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    const [backgroundAnimate, setBackgroundAnimate] = useState("");

    const nextTopic = () => {
        setDisableButton(true);
        setBackgroundAnimate("animate-downgrade");

        setTimeout(() => {
            if(currentTopic >= topics.length - 1) {
                setCurrentTopic(0);
            } else {
                setCurrentTopic(currentTopic + 1);
            }
            setTimeout(() => {
                setBackgroundAnimate("");
                setDisableButton(false);
            }, 200);
        }, 700);
    }

    const prevTopic = () => {
        setDisableButton(true);
        setBackgroundAnimate("animate-upgrade");

        if(currentTopic == 0) {
            setCurrentTopic(topics.length - 1);
        } else {
            setCurrentTopic(currentTopic - 1);
        }

        setTimeout(() => {
            setBackgroundAnimate("");
            setDisableButton(false);
        }, 900);
    }

    return(
        <TopicContext.Provider value={{topics, currentTopic, nextTopic, prevTopic, backgroundAnimate}}>
            {/* div para los botones */}
            <div className="flex w-full justify-center bottom-10 z-10 fixed space-x-10">
                <button disabled={disableButton} type="button" onClick={prevTopic} className="ring-2 ring-white invert brightness-0 hover:drop-shadow-[0_0_6px_white] hover:scale-105 transition-transform rounded-full size-10 flex justify-center items-center">
                    <img src="/React-Landing/public/Icons/left.svg" alt="left arrow" />
                </button>

                <button disabled={disableButton} type="button" onClick={nextTopic} className="ring-2 ring-white invert hover:drop-shadow-[0_0_6px_white] brightness-0 hover:scale-105 transition-transform rounded-full size-10 flex justify-center items-center">
                    <img src="/React-Landing/public/Icons/right.svg" alt="right arrow" />
                </button>
            </div>
            {children}
        </TopicContext.Provider>
    );
}

export function useTopic() {
    const context = useContext(TopicContext);

    if(!context){
        throw new Error("Para usar useTopic, debe estar dentro de TopicProvider");
    }
    return context;
}

export default TopicProvider;