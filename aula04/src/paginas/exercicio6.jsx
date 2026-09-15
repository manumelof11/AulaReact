import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exercicio6()
{
    const[quantidade, setQuantidade] = useState();
    const[preco, setPreco] = useState();
    const[resultado, setResultado] = useState();

    function calcular()
    {
        let subtotal, desconto, vf;
        subtotal = Number(quantidade) * Number(preco);
        desconto = subtotal * 0.10;
        vf = subtotal - desconto

        setResultado(
            <div>
                <p>O subtotal é: {subtotal}</p>
                <p>O desconto de 10% é igual a: {desconto}</p>
                <p>Valor total a pagar: {vf}</p>
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 6</h1>

            <div className="conteudo">
                <form>
                    <p>
                        Digite a quantidade do produto: <br />
                        <input type="text"
                            value={quantidade}
                            onChange={ (e) => setQuantidade(e.target.value) } />

                    <p>
                        Digite o preço do produto:
                        <input type="text"
                            value={preco}
                            onChange={ (e) => setPreco(e.target.value) } />
                    </p>

                    </p>

                    <p>
                        <input type="button" value="Calcular" onClick={calcular} />
                    </p>

                    <p>
                        {resultado}
                    </p>
                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}