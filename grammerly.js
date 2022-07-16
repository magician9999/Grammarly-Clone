const charValue=document.getElementById("input-text");
let totalValue=document.getElementById("total-counter");
let RemValue=document.getElementById("rem-counter");
const copyText=document.getElementById("copy-text");

let charv=0;

const updateValue=()=>{
    totalValue.innerHTML=charValue.value.length;
    charv=totalValue.innerHTML;
    RemValue.innerHTML= 150 -charv;

};
const textCopy=()=>{
    charValue.select();
    
    navigator.clipboard.writeText(charValue.value);//imp learn


};

charValue.addEventListener('keyup',()=>updateValue());

copyText.addEventListener('click',()=>textCopy());
