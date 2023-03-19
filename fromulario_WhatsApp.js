// Obtener cada input pero aun no su valor

const inputName    = document.querySelector('#name');
const inputPhone   = document.querySelector('#phone');
const inputMessage = document.querySelector('#')

const btnSend = document.querySelector('#send');

// -----------------------------------------------------------------------------------------------

// Declaración de las funciones

// funcion que obtiene los valores de los inputs y los envia por whatsApp

const formSend = () => {

    // Variable con celular de la empresa que recibe el fomrulario
    const ownerPhone = 50670910;

    // valores de los inputs
    let nombre  = inputName.value;
    let celular = inputPhone.value;
    let mensaje = inputMessage.value; 

    // variable con la url de whatsApp
    const url = `https://api.whatsapp.com/send?phone=${ownerPhone}&text=
    *_${nombre} desea tal servicio_*%0A
    *_Nombre:_*%0A
    ${nombre}%0A%0A
    *Celular:*%0A
    ${celular}%0A%0A
    *_Servicio:_:*%0A
    ${mensaje}%0A`;

    // apertura del objeto window que nos permitira entrar a la aplicación de whatsApp
    // Sele manda la url ya que es la api que nos permite enviar la informacion de formulario por whatsApp

    window.open(url);
};

// -------------------------------------------------------------------------------------------------
// funcion en caso de que el usuario deje vacío el formulario

const formError = () => {

    form.addEventListener('submit', (e)=>{
            e.preventDefault();
    });

    alert('Porfavor llena todos los campos');
};

// --------------------------------------------------------------------------------------------

// boton al hacer click se realiza una condicion y dependiendo de ella se realiza una funcion o la otra

btnSend.addEventListener('click', ()=>{
    if(inputName.value === '' || inputPhone === '' || inputMessage === ''){
        formError();
    }else{
        formSend();
    };
});