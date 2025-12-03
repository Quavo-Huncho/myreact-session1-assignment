import WelcomeMessage from "./components/WelcomeMessage";
import AboutReact from "./components/AboutReact";
import ListGroup from "./components/ListGroup";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <AboutReact />
      <ListGroup />
      <Footer />
    </div>
  );
}

export default App;