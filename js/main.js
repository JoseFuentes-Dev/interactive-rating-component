
let rateValue=0;
document.querySelector('#btnconttaval').disabled=true;
let cuerpo = document.querySelector('#btnconttaval');
cuerpo.style.cursor='not-allowed';
let header= document.querySelector(".state");
let btns = header.querySelectorAll("span");
for(let i =0; i< btns.length;i++){
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    if(current.length > 0){
      current[0].className = current[0].className.replace(" active","");
    }
    this.className += " active";
    if(i==0){
      rateValue = 1;
      cuerpo.style.cursor='pointer';
      document.querySelector('#btnconttaval').disabled=false;
    }else if(i==1){
      rateValue = 2;
      document.querySelector('#btnconttaval').disabled=false;
    }
    else if(i==2){
      rateValue = 3;
      cuerpo.style.cursor='pointer';
      document.querySelector('#btnconttaval').disabled=false;
    }
    else if(i==3){
      rateValue = 4;
      cuerpo.style.cursor='pointer';
      document.querySelector('#btnconttaval').disabled=false;
    }
    else if(i==4){
      rateValue = 5;
      cuerpo.style.cursor='pointer';
      document.querySelector('#btnconttaval').disabled=false;
    }
  });
}

// let x =document.documentElement.style.cursor = "pointer";
// const changeStatusButton = e => {
//   document.getElementById("btnconttaval").disabled = document.querySelectorAll("span").length == 1 ? false : true;
// }
// document.querySelectorAll("span").forEach(check => check.addEventListener("change", changeStatusButton)); 

function rate() {
  document.querySelector('#card1').style.transform = "rotateY(180deg)";
  document.querySelector('#card2').style.transform = "rotateY(360deg)";
  document.querySelector('#result').innerHTML = `<span class="statement">You selected ${rateValue} out of 5</span>`
}
function rotate(){;
    document.querySelector('#card1').style.transform = "rotateY(360deg)";
    document.querySelector('#card2').style.transform = "rotateY(180deg)";
}
