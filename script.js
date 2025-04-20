const url = "https://binaural-api.onrender.com/generate";
let data =  {
    base:200,
    diff:10,
    duration:60
};

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

const playbtn = document.getElementById('play-btn');

playbtn.addEventListener('click',()=>{
    if(selector.value==='Custom'){
        data = {
             base:Number(baseInput.value),
             diff:Number(diffInput.value),
             duration:Number(timeInput.value)
        }
    }else if(selector.value==='Alpha'){
        data = {
            base:200,
            diff:10,
            duration:60
       }
    }else if(selector.value==='Beta'){
        data = {
            base:420,
            diff:20,
            duration:60
       }
    }else if(selector.value==='Gamma'){
        data = {
            base:440,
            diff:40,
            duration:60
       }
    }else if(selector.value==='Theta'){
        data = {
            base:200,
            diff:6,
            duration:60
       }
    }
    console.log(data);
})

function fetchAndPlay(){
    fetch(url,{
        method:'Post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data),
    })
    .then(function(response){
        if(!response.ok){
            throw new Error("failed to fetch audio");
        }
        return response.blob();
    })
    .then(function(blob){
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audio.play();
    })
    .catch(function(error){
        console.log('Error: ',error);
        
    });
    
}

