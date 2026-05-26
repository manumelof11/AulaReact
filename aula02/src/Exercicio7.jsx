export default function Exercicio7({ celsius })
{
    let fah = Number(celsius * 9/5 + 32);
    let kelvin = Number(celsius + 273,15);

    return(
        <div>
            {celsius.toFixed(2)}°C equivale a {fah.toFixed(2)}°F e {kelvin.toFixed(2)}°K.
        </div>
    );
}
