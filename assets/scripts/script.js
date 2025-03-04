

const sharebutton = document.getElementById('sharebutton');
const sharebutton__popup = document.getElementById('display__none');

/* Makes the popup appear when clicking on the share button */

sharebutton.addEventListener('click', () => {
    sharebutton__popup.classList.toggle('active');
    sharebutton.classList.toggle('active');
});

/* Prevents the popup from disappearing when clicking on the popup */

sharebutton__popup.addEventListener('click', (e) => {
    e.stopPropagation();
});

/* Makes the popup disappear when clicking again on the share button or anywhere else in the document */

document.addEventListener('click', (e) => {
    if (!event.target.closest('#sharebutton') && !event.target.closest('#display__none')) {
        sharebutton__popup.classList.remove('active');
    }
});

document.addEventListener('click', (e) => {
    if (!event.target.closest('#sharebutton') && !event.target.closest('#display__none')) {
        sharebutton.classList.remove('active');
    }
});