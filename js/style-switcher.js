/* toggle style switcher */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () =>{
    document.querySelector('.style-switcher').classList.toggle('open');
})
//hide style swicher
window.addEventListener('scroll', () =>{
    if(document.querySelector('.style-switcher').classList.contains('open'))
    {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})
// Style switch--> theme
const AlternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color)
{
    AlternateStyle.forEach((style) =>{
        if(color === style.getAttribute('title'))
        {
            style.removeAttribute('disabled')
        }
        else
        {
            style.setAttribute('disabled', 'true')
        }
    })
}
//theme light
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () =>{
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})

window.addEventListener('load', () =>{
    if(document.body.classList.contains('dark'))
    {
        dayNight.querySelector('i').classList.add('fa-sun');
    }
    else
    {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})