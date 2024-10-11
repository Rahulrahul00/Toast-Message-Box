
let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check" style="color: #22e22f;"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark" style="color: #fd0d0d;"></i>Please Fix the Error';
let invaildMsg = '<i class="fa-solid fa-circle-exclamation" style="color: #ff7300;"></i>Invaild input, check again';


function showToast(msg){

let toast = document.createElement('div');

toast.classList.add('toast');
toast.innerHTML = msg;
toastBox.appendChild(toast);

if(msg.include('Error')){
  toast.classList.add('Error');
}


setTimeout(()=>{
  toast.remove();
},6000);


}

