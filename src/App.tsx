
import Navbar from "./components/navbar";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />

      <div className="centered-content">
        <h3>Bem-vindo à nossa página!</h3>
        <p>Esta é a página inicial do nosso aplicativo React.</p>
        <img src="/placeholder.svg" alt="Placeholder" className="placeholder-image" />
      </div>
    </>
  );
}

export default App;
