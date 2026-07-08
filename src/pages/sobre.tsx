import Navbar from "../components/navbar";
import "../App.css";

export default function Sobre() {
    return (
        <>
            <Navbar />
            <br />
            <div className="centered-content">
                <div><h3>Sobre a Aplicação</h3></div>
                <p>Esta aplicação é um exemplo de formulário de cadastro utilizando React Hook Form.</p>
            </div>
        </>
    );
}
