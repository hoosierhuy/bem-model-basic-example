const backDrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

function closeModal() {
    (modal) ? modal.classList.remove('open') : null;
    backDrop.classList.remove('open');
}

(modalNoButton) ? modalNoButton.addEventListener('click', closeModal) : null;

// For the "Choose Plan" buttons in the "Choose Your Plan" section
selectPlanButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.toggle('open');
        backDrop.classList.toggle('open');
    });
});

backDrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeModal();
});

toggleButton.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    backDrop.classList.toggle('open');
});

console.dir(backDrop)