import { useTopic } from "../Contexts/TopicContext";

// function SlideInfo() {
//     const { topics, currentTopic } = useTopic();
//     const topic = topics[currentTopic]; // Accede al slide actual

//     return (
//         <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-lg space-y-4">
//             <h2 className="text-2xl font-bold uppercase">{topic.nameC}</h2>
//             <h3 className="italic text-lg opacity-80">{topic.nameS}</h3>
//             <p className="text-sm leading-relaxed">{topic.description}</p>
//             <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
//                 Discover Location
//             </button>
//         </div>
//     );
// }

function SlideInfo() {
    const { topics, currentTopic } = useTopic();
    const topic = topics[currentTopic];

    return (
        <div className="absolute left-5 right-5 md:left-10 md:right-auto top-1/2 -translate-y-1/2 text-white max-w-lg space-y-4 p-4 bg-black/30 md:bg-transparent rounded-md md:rounded-none">
            <h2 className="text-xl md:text-2xl font-bold uppercase">{topic.nameC}</h2>
            <h3 className="italic text-base md:text-lg opacity-80">{topic.nameS}</h3>
            <p className="text-sm md:text-base leading-relaxed">{topic.description}</p>
            <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded hover:drop-shadow-[0_0_6px_white] hover:bg-gray-200 transition-colors text-sm md:text-base">
                Discover Location
            </button>
        </div>
    );
}


export default SlideInfo;