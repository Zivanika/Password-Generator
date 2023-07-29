let lenslider=document.getElementById("inputSlider");
let inValue=document.getElementById("inValue");
let lenvalue=document.getElementById("lenvalue");
let upperChars=document.getElementById("upperChars");
let lowerChars=document.getElementById("lowerChars");
let allNums=document.getElementById("allNums");
let allSyms=document.getElementById("allSyms");
let makePass=document.getElementById("genBtn");
let lowcheck=document.getElementById("lowcheck");
let upcheck=document.getElementById("upcheck");
let numcheck=document.getElementById("numcheck");
let symcheck=document.getElementById("symcheck");
let lin1=document.getElementById("line1");
let lin2=document.getElementById("line2");
let lin3=document.getElementById("line3");
let inCopy=document.getElementById("inCopy");
lenslider.addEventListener('input',()=>{
    lenvalue.innerHTML=`${lenslider.value}`;
})
let upChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowChars="abcdefghijklmnopqrstuv";
let Nums="0123456789";
let Syms="~!@#$%^&*";
makePass.addEventListener('click',()=>{
    inValue.innerHTML=`${Password()}`;
});
function Password(){
    let allChars="";
    let passwrd="";
    let count=0;
    allChars+=lowcheck.checked?lowChars:"";
    console.log(allChars);
    // allChars+=upcheck.checked?upChars:"";
    // allChars+=numcheck.checked?Nums:"";
    // allChars+=symcheck.checked?Syms:"";
    if(upcheck.checked){
        allChars+=upChars;
        upperChars.style.color="green";
        count++;
    }
    if(lowcheck.checked){
        allChars+=lowChars;
        lowerChars.style.color="green";
        count++;
    }
    if(numcheck.checked){
        allChars+=Nums;
        allNums.style.color="green";
        count++;
    }
    if(symcheck.checked){
        allChars+=Syms;
        allSyms.style.color="green";
        count++;
    }
    if(count<=1){
     lin1.style.backgroundColor="red";
     lin1.style.boxShadow="2px 2px 10px  rgb(218, 32, 32)";
     lin2.style.backgroundColor="white";
     lin2.style.boxShadow="2px 2px 10px #fff";
    lin3.style.backgroundColor="white";
    lin3.style.boxShadow="2px 2px 10px #fff";
    }
    if(count>1 && count<=2){
        lin1.style.backgroundColor="yellow";
        lin1.style.boxShadow="2px 2px 10px rgb(231, 235, 9)"
        lin2.style.backgroundColor="yellow";
        lin2.style.boxShadow="2px 2px 10px rgb(231, 235, 9)";
        lin3.style.backgroundColor="white";
        lin3.style.boxShadow="2px 2px 10px #fff";
    }
    if(count>2){
        lin1.style.backgroundColor="green";
        lin1.style.boxShadow="2px 2px 10px rgb(8, 217, 8)";
        lin2.style.backgroundColor="green";
        lin2.style.boxShadow="2px 2px 10px rgb(8, 217, 8)";
        lin3.style.backgroundColor="green";
        lin3.style.boxShadow="2px 2px 10px rgb(8, 217, 8)";
    }
    if(allChars==""||allChars.length==0){
       return passwrd;
    }
    let i=1;
    while(i<=lenslider.value){
       passwrd+=allChars.charAt(Math.floor(Math.random()*allChars.length));
       console.log(passwrd);
       i++;
    }
   
    // inValue.innerText=passwrd;
   return passwrd;
}
inCopy.addEventListener('click',()=>{
    if(inValue.textContent!=""){
        navigator.clipboard.writeText(inValue.textContent);
        inCopy.innerHTML=`<span class="material-symbols-outlined">
        check
        </span>`;
        inCopy.title="Password Copied";
        setTimeout(()=>{
        inCopy.innerHTML=`<span class="material-symbols-outlined">
        content_copy
        </span>`;
        inCopy.title="";
        },3000);
    }
   
})

    // const btn=document.querySelector(".submitBtn");
    // btn.onmouseove=function(e){
    //     const x=e.pageX-btn.offsetLeft;
    //     const y=e.pageY-btn.offsetTop;
    //     btn.style.setProperty('--x',x+'px');
    //     btn.style.setProperty('--y',y+'px');
    // }
