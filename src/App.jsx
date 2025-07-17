import Background from "./Components/Background.jsx";
import Header from "./Components/Header.jsx";
import Cards from "./Components/Cards.jsx";
import TopicProvider from "./Contexts/TopicContext.jsx";

function App() {
    return (
        <div className="bg-black">
            <Header/>
            <main className="overflow-hidden">
                <TopicProvider>
                    <Background/>
                    <Cards />
                </TopicProvider>
            </main>
        </div>
    )
}

export default App;