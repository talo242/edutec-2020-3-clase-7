
/**
 * 1. Al hacer click, el corazón se pone de color rojo ✔
 * 2. El usuario puede hacer click a varios corazones ✔
 * 3. Al hacer click a un corazon lleno, debería de regresar al estado inicial ✔
 */
function addLikeButton() {
  const likeButtonList = document.querySelectorAll('.comment-like-button');

  likeButtonList.forEach(function(element) {
    element.addEventListener('click', function() {
      const likeIcon = this.querySelector('.fa-heart');
  
      if (this.classList.contains('comment__like')) {
        this.classList.remove('comment__like');
        likeIcon.classList.replace('fas', 'far');
      } else {
        this.classList.add('comment__like');
        likeIcon.classList.replace('far', 'fas');
      }
    });
  })
}

addLikeButton();

/**
 * 1. El usuario escribe un comentario en el textarea ✔
 * 2. El usuario hace click en el boton para enviar su comentario ✔
 * 3. El script captura el texto del comentario ✔
 * 4. Crear un nuevo comentario ✔
 * 5. Agregar el texto del usuario al nuevo comentario ✔
 * 6. Agregar el nuevo comentario a la lista de comentarios ✔
 * 7. Limpiar el cuadro de texto cuando se envie el mensaje ✔
 * 
 */

/* 2. El usuario hace click en el boton para enviar su comentario
 * No se recarga la pagina

 Concatenar texto 'a' + 'b' = 'ab'
*/

const button = document.querySelector('.send-button');
const textarea = document.querySelector('.textarea');
const commentsContainer = document.querySelector('#comments-main-container');

button.addEventListener('click', function(event) {
    event.preventDefault();
    const userComment = textarea.value;

    /** String literal */
    const commentTemplate = `
        <div class="comment">
          <img src="https://via.placeholder.com/50" alt="">
          <div class="comment__content">
            <div class="comment__author">Ricardo Velasco</div>
            <div class="comment__text">${userComment}</div>
            <div class="comment__footer">
              <div class="comment__date">18/07/2020</div>
              <button class="comment-like-button">
                <i class="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>`;

    commentsContainer.innerHTML = commentTemplate + commentsContainer.innerHTML;
    textarea.value = '';
    addLikeButton();
    console.log(commentsContainer);
});

const modalButton = document.querySelector('.modal-btn');
const modalContainer = document.querySelector('.modal-container');
const modalButtonClose = document.querySelector('.modal-btn-close');

function toggleModal() {
  modalContainer.classList.toggle('modal-container-active');
}

modalButtonClose.addEventListener('click', toggleModal)

modalButton.addEventListener('click', toggleModal);

/**
 * Iteradores:
 * 
 * Array.forEach
 * Array.map
 * Array.find
 * Array.filter
 * 
 */
