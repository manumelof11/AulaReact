export default function Exercicio5 ( {consultas} )
{
    let salbruto = Number(consultas) * 150;
    let inss = (salbruto) * 0.08;
    let salliq = salbruto - inss

    return(
        <div>
            Para {consultas} consultas: Salário Bruto = R${salbruto}, INSS = R${inss}, Salário Líquido = R${salliq}.
        </div>
    )
}