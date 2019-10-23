const body = document.querySelector('body');

export function changeTheme() {
    if (event.target.value === 'monochrome') {
        body.classList.add('monochrome');
        body.classList.remove('halloween');
        body.classList.remove('neon');
    } else if (event.target.value === 'halloween') {
        body.classList.add('halloween');
        body.classList.remove('monochrome');
        body.classList.remove('neon');
    } else if (event.target.value === 'neon') {
        body.classList.add('neon');
        body.classList.remove('halloween');
        body.classList.remove('monochrome');
    }
}