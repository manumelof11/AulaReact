import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";
import Exercicio5 from "./Exercicio5";
import Exercicio6 from "./Exercicio6";
import Exercicio7 from "./Exercicio7";

export default function App() {
    return (
        <div>
            <h1>Aula 02 - Criação de Componentes</h1>

            <div className="card">
                <h3>Chamadas para o componente Exemplo1</h3>

                <Exemplo1 numero1={10} numero2={20} />
            </div>

            <div className="card">
                <h3>Exercício 1</h3>
                <Exercicio1 numero={12}/>
                <Exercicio1 numero={67}/>
                <Exercicio1 numero={-5}/>
            </div>

            <div className="card">
                <h3>Chamadas para o componente Exercício 2</h3>

                <Exercicio2 peso={80} altura={1.80} />
                <hr />
                <Exercicio2 peso={60} altura={1.60} />
            </div>

            <div className="card">
                <h3>Chamada para o Exercício 3</h3>
                
                <Exercicio3 nota1="7.5" nota2="9.5" />
                <Exercicio3 nota1="3" nota2="6.5" />

            </div>

            <div className="card">
                <h3>Chamada para o Exercício 4</h3>

                <Exercicio4 tipo="trinagulo" base={10} altura={5} />

            </div>

            <div className="card">
                <h3>Chamada para o Exercício 5</h3>

                <Exercicio5 consultas={40} />
            </div>

            <div className="card">
                <h3>Chamada para o Exercício 6</h3>

                <Exercicio6 capital={1000} taxa={5} tempo={6} />
                <hr />
                <Exercicio6 capital={2000} taxa={10} tempo={12} />
                <hr />
                <Exercicio6 capital={1500} taxa={3} tempo={8} />

            </div>

            <div className="card">
                <h3>Chamada para o Exercício 7</h3>

                <Exercicio7 celsius={30} />

            </div>

            
        </div>
    )
}