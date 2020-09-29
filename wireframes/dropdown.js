const dropdowns = document.querySelectorAll('.days');
const showFirst = document.querySelector('.first');

dropdowns.forEach(dropdown => {
    let trigger = dropdown.querySelector('.dayName');
    let content = dropdown.querySelector('.hourBox');

    trigger.addEventListener('click', () => {
        trigger.classList.toggle('active');
        content.classList.toggle('active');
    })
})