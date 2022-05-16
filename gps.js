var respuesta; 


alert ("Bienvenido a su asistente de ruta")
alert("Se encuentran disponibles las siguientes ubicaciones: Hospital, Escuela ProA, Mercado")
alert("Porfavor al momento de escribir el nombre del lugar del que desea saber la ubicacion escribir todo en letra minuscula")
respuesta=prompt("¿La ubicacion de que sitio quiere saber?")


//ubicacion hospital
if (respuesta == "hospital")
respuesta=prompt("¿Quiere saber la ubicacion de un hospital para niños o adultos?")

//para niños
if (respuesta == "niños")
respuesta=prompt("Hospital infantil, Hospital Pediátrico del Niño Jesús, Hospital de Niños de la Santísima Trinidad")
if (respuesta == "hospital infantil")
{
    alert("Juan Antonio Lavalleja 3050")
}
if (respuesta == "hospital pediatrico del niño jesus") 
{
    alert("Av. Castro Barros 650")
}
if (respuesta == "hospital de niños de la santisima trinidad")
{
    alert("Bajada Pucará 787")
}

//para adultos
if (respuesta == "adultos")
respuesta=prompt("Hospital de urgencias, Hospital transito caseres, Hospital italiano")
if (respuesta == "hospital de urgencias")
{
    alert("Catamarca 441")
}
if (respuesta == "hospital transito caseres")
{
    alert("Buchardo 1250")
}
if (respuesta == "hospital italiano")
{
    alert("Roma 550")
}

//ubicacion escuela 
if (respuesta == "escuela")
{
    alert("Escuela experimental con enfasis en TIC-Sede Capital Norte. Calle publica S/N- Bº Agec 2")
}

//ubicacion mercado
if (respuesta == "mercado")
respuesta=prompt("Mercado Norte, Mercado sud, Mercado de abasto")
if (respuesta == "mercado norte")
{
    alert("Oncativo 50")
}
if (respuesta == "mercado sud")
{
    alert("Bv Pte. Umberto Arturo Illia 155")
}
if (respuesta == "mercado de abasto")
{
    alert("Av. de la Semilleria")
}