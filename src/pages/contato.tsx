import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "../components/toast";
import { Calendar2EventFill } from "react-bootstrap-icons";

interface FormImput {
    nome: string;
    email: string;
    idade: number;
    mensagem: string;
}

export default function Contato() {
    const { register, handleSubmit, reset, formState, formState: { errors } } = useForm<FormImput>();
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    function onSubmit(dados: FormImput) {
        console.log(dados);

        setTimeout(() => {
            setToast({ message: "Contato enviado com sucesso✅", type: "success" });
        }, 1000);
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    })

    console.log(errors);
    return (
        <>
            <Navbar />
            <br />
            <div><h3>Formulário de Contato</h3></div>

            <div className="flex1">
                <div>
                    <h3 className="align-center"><Calendar2EventFill size={16}/> Dados Pessoais</h3>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="name">Nome</label>
                        <input id="name" placeholder="Digite seu nome"
                            {...register('nome',
                                {
                                    required: "O nome é obrigatório",
                                    minLength: { value: 2, message: "O nome deve ter pelo menos 2 caracteres" }
                                })}
                        />

                        <label htmlFor="email">E-mail</label>
                        <input id="email" placeholder="Digite seu email"
                            {...register('email',
                                {
                                    required: "O e-mail é obrigatório",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Formato de e-mail inválido"
                                    }
                                })}
                        />

                        <label htmlFor="idade">Idade</label>
                        <input
                            id="idade"
                            placeholder="Digite sua idade"
                            {...register('idade',
                                {
                                    required: "A idade é obrigatória",
                                    min: { value: 18, message: "A idade mínima é 18 anos" },
                                    max: { value: 99, message: "A idade máxima é 99 anos" }
                                })}
                        />

                        <textarea rows={8} id="mensagem" placeholder="Digite sua mensagem" {...register('mensagem')}></textarea>
                        <button type="submit">Submit</button>

                        {errors.nome && <span style={{ color: '#BF1650' }}>{errors.nome.message}</span>}
                        {errors.email && <span style={{ color: '#BF1650' }}>{errors.email.message}</span>}
                        {errors.idade && <span style={{ color: '#BF1650' }}>{errors.idade.message}</span>}
                    </form>
                </div>
                <div>
                    {toast && <Toast message={toast.message} type={toast.type} />}
                </div>
            </div>
        </>
    );
}
