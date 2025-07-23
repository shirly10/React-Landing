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

    const {topics, estilo} = useTopic();

    return (
        // div principal
        <div className="fixed z-10 top-0 left-[62%] w-screen max-w-[36rem] h-screen flex items-center overflow-hidden">
            {/* contenedor animable */}
            <div></div>
            {/* lista */}
            <ul className="flex space-x-8 relative" style={{
                transform: `translateX(${estilo.suave*12}rem)`,
                letf: `${estilo.abrupto*-12}rem`,
                transition: "transform 1s"
            }}>
                {topics.map((topic, index) => {
                    return (
                        <Card topic={topic} key={index} />
                    );
                })}
                {topics.map((topic, index) => {
                    if (index < 3) {
                        return (
                        <Card topic={topic} key={index} />
                    );
                }
                })}
            </ul>
        </div>
    );
}

export default Cards;






// import { useTopic } from "../Contexts/TopicContext.jsx";

// const Card = ({ topic }) => {
//   return (
//     <li
//       className="rounded-xl overflow-hidden shadow-xl w-40 aspect-[3/4] shrink-0"
//       style={{
//         backgroundImage: `url(${topic.background})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover"
//       }}
//     >
//       <div className="bg-gradient-to-b from-transparent to-black text-white w-full h-full flex flex-col-reverse justify-between text-center p-2">
//         <span className="font-bold text-sm">{topic.nameC}</span>
//       </div>
//     </li>
//   );
// };

// function Cards() {
//   const { topics, estilo, moverA } = useTopic();

//   return (
//     <div className="fixed z-10 top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black bg-opacity-70">
      
//       {/* Título */}
//       <h2 className="text-white text-2xl mb-4">{}</h2>

//       {/* Contenedor del slider */}
//       <div className="overflow-hidden w-[40rem] h-screen relative">
//         <ul
//           className="flex space-x-4 absolute"
//           style={{
//             transform: `translateX(${estilo.suave * 11}rem)`,
//             left: `${estilo.abrupto * -11}rem`,
//             transition: "transform 1s ease-in-out"
//           }}
//         >
//           {/* Doble render para animación infinita */}
//           {topics.map((topic, i) => (
//             <Card topic={topic} key={`1-${i}`} />
//           ))}
//           {topics.map((topic, i) => (
//             <Card topic={topic} key={`2-${i}`} />
//           ))}
//         </ul>
//       </div>

//       {/* Botones de navegación */}
//       <div className="flex mt-6 space-x-6">
//         <button
//           onClick={() => moverA("izquierda")}
//           className="text-white text-4xl hover:scale-110 transition-transform"
//         >
//           ❮
//         </button>
//         <button
//           onClick={() => moverA("derecha")}
//           className="text-white text-4xl hover:scale-110 transition-transform"
//         >
//           ❯
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Cards;

