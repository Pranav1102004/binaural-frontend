const base = document.querySelector('#frequency');
const baseInput = document.querySelector('#base-selector');
base.textContent = baseInput.value+' hz';
ChangeValue(base,baseInput,' hz');

const diff = document.querySelector('#diff');
const diffInput = document.querySelector('#diff-slector');
diff.textContent = diffInput.value+' hz';
ChangeValue(diff,diffInput,' hz');

const time = document.querySelector('#time');
const timeInput = document.querySelector('#time-selctor');
time.textContent = timeInput.value+' s';
ChangeValue(time,timeInput,' s');

function ChangeValue(value,input,unit) {
    input.addEventListener(('input'),(e)=>{
        value.textContent = e.target.value+unit;
    });
}

const selector = document.getElementById('waves');
const custom = document.getElementById('custom');
const card = document.getElementById('card');

if(selector.value === 'Custom'){
    custom.style.display = "block";
    card.style.height = "350px";
}else{
    custom.style.display = "none";
    card.style.height = "200px";
}

selector.addEventListener(('change'),()=>{
    if(selector.value === 'Custom'){
        custom.style.display = "block";
        card.style.height = "350px";
    }else{
        custom.style.display = "none";
        card.style.height = "200px";
    }
});
