import { useTopic } from "../Context/TopicContext";

function SliderTopic() {
  const { topics, estilo, moverA } = useTopic();

  return (
    <div className="bg-gray-400 w-60 ring-4 ring-white overflow-hidden aspect-[3/4] relative flex items-center justify-center mx-auto">
      <ul
        className="flex space-x-4 absolute"
        style={{
          transform: `translateX(${estilo.suave * 24}px)`,
          left: `${estilo.abrupto * -24}px`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {/* Repetimos los topics dos veces para loop */}
        {topics.map((t, i) => (
          <li key={`1-${i}`} className="bg-white rounded-xl w-60 h-[90%] flex items-center justify-center text-black text-2xl shadow-xl">
            {t.nombre}
          </li>
        ))}
        {topics.map((t, i) => (
          <li key={`2-${i}`} className="bg-white rounded-xl w-60 h-[90%] flex items-center justify-center text-black text-2xl shadow-xl">
            {t.nombre}
          </li>
        ))}
      </ul>

      {/* Botones flecha */}
      <div className="absolute flex justify-between w-full px-4 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => moverA("izquierda")}
          className="ring-2 ring-white invert brightness-0 hover:drop-shadow-[0_0_6px_white] hover:scale-110 transition-transform rounded-full size-10 flex justify-center items-center"
        >
          <img src="/React-Landing/public/Icons/left.svg" alt="left arrow" />
        </button>
        <button
          onClick={() => moverA("derecha")}
          className="ring-2 ring-white invert brightness-0 hover:drop-shadow-[0_0_6px_white] hover:scale-110 transition-transform rounded-full size-10 flex justify-center items-center"
        >
          <img src="/React-Landing/public/Icons/right.svg" alt="right arrow" />
        </button>
      </div>
    </div>
  );
}

export default SliderTopic;