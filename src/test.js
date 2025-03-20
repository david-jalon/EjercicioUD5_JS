console.log("hola mundo");

const inTask = document.getElementById("tarea");
const list = document.getElementById("list");

let misTareas =[
    {
        id: 1,
        nombre: "Tarea 1",
        isdone: false
    },
    {
        id: 2,
        nombre: "Tarea 2",
        isdone: true
    }
];

function addtask(){
    //alert("Task added");

    // 1. Coger el valor del input
    const miTarea = inTask.value;
    // 2. Agregar el valor del array
    misTareas.push(miTarea);
    // 3. Pintar de nuevo la lista
    pintarlista();
    // 4. Limpiar el input
    inTask.value = "";

}

function pintarlista() {
    // limpiar antes de volver a imprimir
    list.innerHTML="";

    misTareas.forEach(tarea => {
        if(tarea.isdone){
            list.innerHTML += `<li class="border-2 border-slate-500 bg-green-200 rounded-md p-2">${tarea.nombre}</li>`
        }else{
            list.innerHTML += `<li class="border-2 border-slate-500 bg-red-200 rounded-md p-2">${tarea.nombre}</li>`
        }
        
    })
}

pintarlista()