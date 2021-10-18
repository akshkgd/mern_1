let pizzaPrice = 199;
let starterPrice = 99;
let total = 0
let deliveryCharge = 0;

quickView = ()=>{
  let total = 0;
  document.getElementById('quickView').style.display = 'block';
  document.getElementById('total').style.display = 'none';
  document.getElementById('delivery').style.display = 'none';
  let pizza = document.getElementById('pizza').value;
  let starter = document.getElementById('starter').value;
  total = (pizza * pizzaPrice) + (starter * starterPrice);
  let view = "Expected Price: " + total
  document.getElementById('quickView').innerHTML = view;

  let successAlert = document.getElementById('success');
    successAlert.classList.add('d-none');

    let zeroAlert = document.getElementById('zero');
    zeroAlert.classList.add('d-none')

}


billing = () =>{
  let pizza = document.getElementById('pizza').value;
  let starter = document.getElementById('starter').value;
  total = (pizza * pizzaPrice) + (starter * starterPrice);

  if(total == 0){
    let zeroAlert = document.getElementById('zero');
    zeroAlert.classList.remove('d-none')
  }
  else if(total < 299){
    deliveryCharge = 40;
    total = total + deliveryCharge;
    let successAlert = document.getElementById('success');
    successAlert.classList.remove('d-none');
    document.getElementById('quickView').style.display = 'none';
    document.getElementById('total').style.display = 'block';
    document.getElementById('delivery').style.display = 'block';
    document.getElementById('total').innerHTML = "Total: " + total;
    document.getElementById('delivery').innerHTML ="delivery Charge " + deliveryCharge;


  }
  else{
    deliveryCharge = 0;
    let zeroAlert = document.getElementById('success');
    zeroAlert.classList.remove('d-none');
    document.getElementById('total').innerHTML ="Total: " + total;
    document.getElementById('delivery').innerHTML = "delivery Charge: " + deliveryCharge;
    document.getElementById('quickView').style.display = 'none';
    document.getElementById('total').style.display = 'block';
    document.getElementById('delivery').style.display = 'block';
  }
  
}