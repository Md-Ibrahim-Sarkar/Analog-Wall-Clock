let myClock = document.querySelector('.clock');

myClock.append(stripeArea())
myClock.append(numberArea())
myClock.append(timeHandler())

function stripeArea() {
  let createParentDiv = document.createElement('div');
  createParentDiv.classList.add('stripe-area')
  
  for (let i = 1; i <= 60; i++){
    let createSpanElem = document.createElement('span');

    createSpanElem.style.transform = `rotate(${i * 6}deg)`

    if (i % 5 == 0) {
    createSpanElem.classList.add('stripe', 'cercle')
      
    } else {
      
      createSpanElem.classList.add('stripe')
    }


    createParentDiv.append(createSpanElem)
    
  }
  return createParentDiv
}


function numberArea() {
  let numberArea = document.createElement('div');
  numberArea.classList.add('number-area');

  for (let q = 1; q <= 12; q++){
    let numberDiv = document.createElement('div');
    numberDiv.classList.add('number');

    numberDiv.style.transform = `rotate(${q * 30}deg)`
    
    let spanTagForNumber = document.createElement('span');
    spanTagForNumber.textContent = q;
    spanTagForNumber.style.transform = `rotate(${q * -30}deg)`
    
    numberDiv.append(spanTagForNumber);
    numberArea.append(numberDiv)

  };
  
  
  return numberArea;
};

function timeHandler() {
  let timeHandlerDiv = document.createElement('div');
  timeHandlerDiv.classList.add('time-handler');

  let secDiv = document.createElement('div');
  secDiv.classList.add('sec');

 secDiv.style.transform = `rotate(45deg)`
  
  let minDiv = document.createElement('div');
  minDiv.classList.add('min');
    
  minDiv.style.transform = ` rotate(150deg)`;

  let hrDiv = document.createElement('div');
  hrDiv.classList.add('hr');

  timeHandlerDiv.append(secDiv);
  timeHandlerDiv.append(minDiv);
  timeHandlerDiv.append(hrDiv);

  return timeHandlerDiv;
}


function timeSet() {
  let d = new Date();
  let sec = d.getSeconds() / 60;
  let min = (sec +d.getMinutes()) /60;
  let hr = (min + d.getHours()) / 12;

  let secElem = document.querySelector('.sec');
  let minElem = document.querySelector('.min');
  let hrElem = document.querySelector('.hr');

  secElem.style.transform = `rotate(${sec * 360}deg)`;
  minElem.style.transform =  `rotate(${min * 360}deg)`;
  hrElem.style.transform =  `rotate(${hr * 360}deg)`;
}

timeSet()
setInterval(timeSet, 1000)