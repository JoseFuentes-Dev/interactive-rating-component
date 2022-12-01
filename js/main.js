
let rateValue=0;
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
    }else if(i==1){
      rateValue = 2;
    }
    else if(i==2){
      rateValue = 3;
    }
    else if(i==3){
      rateValue = 4;
    }
    else if(i==4){
      rateValue = 5;
    }
  });
}
function rate() {
  document.querySelector('#card1').style.transform = "rotateY(180deg)";
  document.querySelector('#card2').style.transform = "rotateY(360deg)";
  document.querySelector('#result').innerHTML = `<span class="statement">You selected ${rateValue} out of 5</span>`
}
function rotate(){;
    document.querySelector('#card1').style.transform = "rotateY(360deg)";
    document.querySelector('#card2').style.transform = "rotateY(180deg)";
}
