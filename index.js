const openModal = (name) => {
  let modal = document.querySelector(`.${name}`);
  modal.classList.remove("close-btn");
  modal.classList.add('open-modal');
}

const closeModal = (name) => {
  let modal = document.querySelector(`.${name}`);
  modal.classList.remove("open-modal");
  modal.classList.add('close-btn');
}