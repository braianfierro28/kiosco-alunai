const ClicKbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
let carrito =[];


function vaciarCarrito() {
    carrito = [];
    renderCarrito();
}


ClicKbutton.forEach(btn => {
    btn.addEventListener('click',addToCarritoItem)
    
});

    function addToCarritoItem(e){
        const button = e.target
       const item = button.closest('.cardd')
       const itemTitle = item.querySelector('.card-title').textContent;
       const itemPrice = item.querySelector('.precio').textContent;
       const itemImg = item.querySelector('.card-img-top').src;
       
       const newItem ={
           title: itemTitle,
           precio: itemPrice,
           img: itemImg,
           cantidad: 1
       }

       addItemCarrito(newItem)


    }

    function addItemCarrito(newItem){

        const alert = document.querySelector('.alert')

     

        const InputElemnto = tbody.getElementsByClassName('input__elemento')
        for (let i=0;i<carrito.length; i++){
            if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad ++;
            const inputValue =InputElemnto[i]
            inputValue.value++;
            CarritoTotal()
            return null;
        }
    }
        carrito.push(newItem)
        
        renderCarrito()
    }

    function renderCarrito(){

        /* limpiar html previo */
        limpiarHTML();

        carrito.map(item => {
            $("#btnAL_1r").click(function (){        	 			 
                alertify.notify('Removido del carrito', 'error', 3, function(){});
            });
            const tr = document.createElement('tr')
            tr.classList.add('ItemCarrito')
            const Content =` 
               
           
                    <td class="table__productos">
                    <img src= ${item.img} alt=""></td>
                    <td>
                    <h6 class="title u-full-width ">${item.title}</h6>
                    </td>
                    <td class="table__price u-full-width"><p>${item.precio}</p></td>
                    <td class="table__cantidad" >
                        <input type="number" min="1" value=${item.cantidad}  class="input__elemento">
                        <button class="delete btn btn-danger" id="btnAL_1r"">x</button>
                    </td>
            
            `

            tr.innerHTML = Content;
            tbody.append(tr)
            
          
            tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
            tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
        })
        CarritoTotal()
        vaciarLocalStorage();
        $("#btnAL_1r").click(function (){        	 			 
            alertify.notify('Removido del carrito', 'error', 3, function(){});
        });
    }

    function CarritoTotal(){
        let Total = 0;
        const itemCartTotal = document.querySelector('.itemCartTotal')
        carrito.forEach((item) => {
        const precio = Number (item.precio.replace("$", ''))
        Total = Total + precio*item.cantidad
    })

    itemCartTotal.innerHTML = `Total $${Total}`
    addLocalStorage()
}



function removeItemCarrito(e){
    const buttonDelete = e.target
   
    const tr = buttonDelete.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for(let i=0; i<carrito.length; i++){
        
        if(carrito[i].title.trim() === title.trim()){
            carrito.splice(i, 1)
        }
    }


    tr.remove()
    CarritoTotal()
    vaciarLocalStorage();
}


function sumaCantidad(e){
    const sumaInput = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
        if(item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal() 
            vaciarLocalStorage();
        }
    })
    
}

function addLocalStorage(){
    localStorage.setItem('carrito' , JSON.stringify(carrito))
}

window.onload =  function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito = storage ;
        renderCarrito()
    }
}


function vaciarLocalStorage() {
    localStorage.clear();
}

function limpiarHTML() {

    while(tbody.firstChild){ 
        tbody.removeChild(tbody.firstChild);
    }
}






function vaciarLocalStorage() {
    localStorage.clear();
}

//simple alert JS		
$("#btn_simple").click(function (){
    alert("Alerta javascript");	
});

//Alertify .notify PANIFICACION
$("#btnAL_1").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_2").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_3").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_4").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_5").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_6").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});

//Alertify .notify LACTEOS
$("#btnAL_7").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_8").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_9").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_10").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_11").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_12").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_13").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_14").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_15").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_16").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_17").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_18").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_19").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_20").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_21").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_22").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_23").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});
$("#btnAL_24").click(function (){        	 			 
    alertify.notify('Añadido al carrito', 'success', 2, function(){});
});







$("#vaciar-carrito").click(function (){
    swal({
      title: "¿Desea vaciar el carrito?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Carrito vaciado!", {
          icon: "success",
        });
      } else {
        swal("Operación cancelada!");
      }
    });	
});


