import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/Home";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";
import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio6 from "./paginas/exercicio6";
import Exercicio5 from "./paginas/exercicio5";
import Exercicio4 from "./paginas/exercicio4";
import Exercicio3 from "./paginas/exercicio3";

export default function App()
{
    return (
        <BrowserRouter>

            <Routes>

                <Route  path="/"  element={ <Home /> }  />

                <Route  path="/exemplo1" element={ <Exemplo1 />} />
                <Route  path="/exemplo2" element={ <Exemplo2 />} />
                
                <Route  path="/exercicio1" element={ <Exercicio1 />} />
                <Route  path="/exercicio2" element={ <Exercicio2 />} />
                <Route  path="/exercicio3" element={ <Exercicio3 />} />
                <Route  path="/exercicio4" element={ <Exercicio4 />} />
                <Route  path="/exercicio5" element={ <Exercicio5 />} />
                <Route  path="/exercicio6" element={ <Exercicio6 />} />

            </Routes>

        </BrowserRouter>
    );
}