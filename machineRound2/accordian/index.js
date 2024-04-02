const mainContent = document.querySelector('.accordian-container');
const checkboxVal = document.getElementById('check-val')

mainContent.addEventListener('click', function(e){
    console.log(e.target.getAttribute('data-id'));
    manageAccordian(e.target.getAttribute('data-id'));
    
})

function manageAccordian(id){
    if(id && id.indexOf('step-') < 0) return;
    let stepID = id.split('step-');
    let targetElement = document.querySelector(`[data-id=data-content-${stepID[1]}]`);
    if(!checkboxVal.checked) closeAllTab();
    if(targetElement.classList.contains('active')){
        targetElement.classList.remove('active');
    }  else{
        targetElement.classList.add('active');
    }
}

function closeAllTab(){
    let accordianData = document.getElementsByClassName('accordian-content');
    for (const iterator of accordianData) {
        iterator.style.setProperty('max-height','0')
    }
}