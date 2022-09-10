const MateriasHTMl  =document.querySelector(".materias");

const materias = [
    {
        Nombre: "Fisica 4",
        Nota: 7
    },{
        Nombre: "Calculo 3",
        Nota: 8
    },{
        Nombre: "Bases de Dato 3",
        Nota: 9
    },{
        Nombre: "Matematicas discretas 2",
        Nota: 7
    },{
        Nombre: "Programacion 4",
        Nota: 8
    },
]

const obtenerMaterias = (id)=> {
     return new Promise((resolve, reject)=> {
                    materia = materias[id];
                    if(materia == undefined) reject("La materia  no existe");
                   else setTimeout(()=>{resolve(materia)},Math.random()*400);
     })
}

const devolverMateria = async () => {
    let materia = [];
         for (let i = 0; i < materias.length; i++) {
             materia[i] = await obtenerMaterias(i);
             let newHTMLCode = `
             <div class = "materia">
                       <div class = "nombre ">${materia[i].Nombre}</div>
                       <div class = "nota">${materia[i].Nota}</div>
              </div>`;
              MateriasHTMl.innerHTML += newHTMLCode;
         }     

}

devolverMateria()

