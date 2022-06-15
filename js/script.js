//typing animation
var typed = new Typed('.typing',{
    strings:['','Web Developer','', 'Amitian','', 'python programmer','', 'Web designer','','Computer Science enthusiast',''],
    typespeed: 100,
    backspeed: 0,
    loop: true
})

//aside
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++)
{
    const a = navList[i].querySelector('a')
    a.addEventListener('click', function() //will change to whichever recieved the event
    {
        removeBackSection();
        for(let j = 0; j < totalNavList;j++)
        {
            if(navList[j].querySelector('a').classList.contains('active'))
            {
                addBackSection(j);
                // allSection[j].classList.add('back-section');  
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active')
        showSection(this);
    })
}
function removeBackSection()
{
    for(let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.remove('back-section');
        }
}
function addBackSection(j)
{
    allSection[j].classList.add('back-section');  
}
function showSection(element)
{
    for(let i = 0; i < totalSection; i++)
    {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute("href").split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}
function updateNav(element)
{
    for(let i = 0; i < totalNavList;i++)
    {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute("href").split('#')[1];
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1])
        {
            navList[i].querySelector('a').classList.add('active');
        }
    }
    const target = element.getAttribute("href").split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}
document.querySelector('.hire-me').addEventListener('click',function()
{
    showSection(this);
    updateNav(this);
    removeBackSection();addBackSection(sectionIndex)
})
document.querySelector('.about-me').addEventListener('click',function()
{
    showSection(this);
    updateNav(this); 
})