import "./App.css";
import { useForm } from "react-hook-form";


function App() {
  // const { register, handleSubmit } = useForm<FormData>();

  return (
    <>
      <div><h1>Formulário de Cadastro</h1></div>
      
      <div className="flex1">
        <div><h1>1. Dados Pessoais</h1></div>
        <div>
          <form>
            <label htmlFor="name">Nome</label>
            <input id="name" placeholder="Digite seu nome" />
            <label htmlFor="email">E-mail</label>
            <input id="email" placeholder="Digite seu email" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}

export default App;
