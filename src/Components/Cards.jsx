import { useTopic } from "../Contexts/TopicContext.jsx";

const Card = ({topic}) => {
    return(
        <li className="hover:scale-105 transition-transform rounded-xl overflow-hidden shadow-xl duration-300 flex-shrink-0" style={{backgroundImage: `url(${topic.background})`, backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className="bg-gradient-to-b from-transparent to-black text-white rounded-md w-40 aspect-[3/4] flex flex-col-reverse text-center justify-between p-2">
                <span className="font-bold text-sm md:text-base">{topic.nameC}</span>
            </div>
        </li>
    );
};

function Cards() {

    const {topics} = useTopic();

    return (
        // div principal
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex items-center">
            {/* contenedor animable */}
            <div></div>
            {/* lista */}
            <ul className="flex space-x-8">
                {topics.map((topic, index) => {
                    return (
                        <Card topic={topic} key={index} />
                    );
                })}
            </ul>
        </div>
    );
}

export default Cards;