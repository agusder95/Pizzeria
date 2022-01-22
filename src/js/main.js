const opcion1 = document.getElementById('op1')
const opcion2 = document.getElementById('op2')
const pizza = document.getElementById('pizza')
const empanada = document.getElementById('empan')

const menu = {
    "pizza" : {
        "muzza" : 300,
        "napo" :  400,
        "calab" : 380
    },
    "empan" : {
        "jyq" : 30,
        "carne" : 35,
        "pollo" : 35
    }
}  


let subtotal = 0
let precio = 0

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~TIPO~~~~~~~~~~~~~~~~~~~~~

let tipo = '0'

let comparacion = (variedad) =>{
    if(tipo == variedad ){
        tipo = '0'
        return true
    }else if(tipo == '0' ){
        tipo = variedad
        return true
    }else{
        return false
    }
}

let color = (variedad) =>{

    if(tipo != '0'){
        variedad.style.backgroundColor = '#be4454'
    }else{
        variedad.style.backgroundColor = '#f3b056'
    }
}

let variedades = (opcion) =>{
    if(tipo != '0'){
        opcion.style.display = 'flex'
    }else{
        opcion.style.display = 'none'
    }
}


const pi = pizza.addEventListener('click',event=>{
    if (comparacion(pizza.id)){  
        color(pizza)
        variedades(opcion1)
    }
})

const emp = empanada.addEventListener('click', event=>{
    if(comparacion(empanada.id)){
        color(empanada)
        variedades(opcion2)
    }
})



//~~~~~~~~~~~~~~~~~VARIEDAD~~~~~~~~~~~~~~~
let ped = "0"

let variedad = (element) =>{

    if(ped == '0'){
        element.style.backgroundColor = '#be4454'
        ped = element.id
        
    }else if(ped != '0'){
        if(element.id == ped){
            element.style.backgroundColor = '#f3b056'
            ped = '0'
        }else{
            document.getElementById(ped).style.backgroundColor = '#f3b056'
            element.style.backgroundColor = '#be4454'
            ped = element.id
        }
    }
}


//~~~~~~~~~~~~~~~~~~PEDIDO~~~~~~~~~~~~~~~~~~~~~~~~~~~
let clean = () =>{
    document.getElementById('cant').value = ''
    opcion1.style.display = 'none'
    opcion2.style.display = 'none'
    tipo = '0'
    pizza.style.backgroundColor = '#f3b056'
    empanada.style.backgroundColor = '#f3b056'
} 


const subt = document.getElementById('subt').addEventListener('click',event=>{

    const cantidad = document.querySelector('#cant').value
    
    if(cantidad != '' && ped != '0' && tipo != '0'){
        precio = (menu[tipo][ped])
        subtotal += cantidad * (menu[tipo][ped])
       
        document.getElementById('total').innerHTML = (`$ ${subtotal}`)
        document.getElementById('cant').value = ''
        
        createlist(ped, cantidad, precio)
        clean()
    }else{
        window.alert('Completar Datos')
    }
    
})


let createlist = (name, cant, prec)=>{
    var lista = document.createElement("LI")
    lista.appendChild(document.createTextNode(`${name} (${prec}) = ${cant}`))
    document.getElementById('check').appendChild(lista)
}


const borrar = document.getElementById('clean').addEventListener('click',event=>{
    let contenedor = document.getElementById('check')
    while(contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstChild)
    }

    opcion1.display = 'none'
    opcion2.display = 'none'

    subtotal = 0
    precio = 0
    document.getElementById('total').innerHTML = ''

})
