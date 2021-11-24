(function(win, doc){
'use strict';

//codigo para verificar se o usuário quer mesmo apagar os dados
if(document.querySelector('.btnDel')){
     let btnDel = doc.querySelectorAll('.btnDel');
for(let i=0; i < btnDel.length; i++){
     btnDel[i].addEventListener('click', function(event){
        if(confirm('Deseja mesmo apagar esse dado?')){
           return true;
           }else{
          event.preventDefault();

}

});

}

}


// ajax do form
if(document.querySelector('#form')){
     let form = document.querySelector('#form');
     function sendForm(event)
     {
        event.preventDefault();
        let data = new FormData(form);
        let ajax = new XMLHttpRequest();
        let token = doc.querySelectorAll('input')[0].value;
        ajax.open('POST', form.action);
        ajax.setRequestHeader('X-CSRF-TOKEN', token);
        ajax.onreadystatechange = function()
        {
           if(ajax.status === 200 && ajax.readyState === 4) {
           let result = doc.querySelector('#result');
           result.innerHTML = 'cadastro realizado!'
           result.classList.add('alert')
           result.classList.add('alert-success')


           }
        }
        ajax.send(data);
        form.reset()

     }
     form.addEventListener('submit', sendForm, false);
}

})(window, document);