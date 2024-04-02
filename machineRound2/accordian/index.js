const mainContent = document.querySelector('.accordian-container');
const checkboxVal = document.getElementById('check-val')

mainContent.addEventListener('click', function(e){
    manageAccordian(e.target.getAttribute('data-id'));    
})

function manageAccordian(id){
    if(id && id.indexOf('step-') < 0) return;
    let stepID = id.split('step-');
    let targetElement = document.querySelector(`[data-id=data-content-${stepID[1]}]`);
    if(targetElement.classList.contains('active')){
        targetElement.classList.remove('active');
    }  else{
        targetElement.classList.add('active');
        if(!checkboxVal.checked) closeAllTab(targetElement);
    }
}

function closeAllTab(targetElement){
    let accordianData = document.getElementsByClassName('accordian-content');
    for (const iterator of accordianData) {
        if(iterator.getAttribute('data-id') !== targetElement.getAttribute('data-id'))
            iterator.classList.remove('active');
    }
}