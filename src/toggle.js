const toggle = () => {
  const nav = document.querySelector('.nav-items');
  nav.classList.toggle('toggle-show');
};

document.querySelector('.toggle-btn')
        .addEventListener('click', toggle);
