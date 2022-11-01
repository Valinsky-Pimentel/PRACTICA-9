
function showError(errorElement, errorMessage){
  document.querySelector('.'+errorElement).classList.add('display-error');
  document.querySelector('.'+errorElement).innerHTML = errorMessage;
}

function clearError(){

  let errors=document.querySelectorAll('.error');
  for(let error of errors){
    error.classList.remove('dispaly-error');
  }
  document.querySelector('.success').classList.add('display-success');
  document.querySelector('.success').innerHTML = 'Tus respuestas fueron registradas';

}

let form = document.forms['formulario'];
form.onsubmit = function(event){

  clearError();

  if (form.title.value === ''){
    showError('title-error','Llene el campo vacio');
    return false;
}
event.preventDefault();
  }
  formSubmit.addEventListener('click', function (event){
      event.preventDefault();
  });
