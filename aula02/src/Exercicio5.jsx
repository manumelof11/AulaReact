export default function Exercicio5 ( {consultas} )
{
    let salbruto = Number(consultas) * 150;
    let inss = (salbruto) * 0.08;
    let salliq = salbruto - inss

    return(
        <div>
            Para {consultas} consultas: Salário Bruto = R${salbruto.toFixed(2)}, INSS =R${inss.toFixed(2)}, Salário Líquido = R${salliq.toFixed(2)}.
        </div>
    )
}