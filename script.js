window.addEventListener('load', () => {
  const roomAdd = document.querySelector('.room-wrap .btn-add');
  const roomSub = document.querySelector('.room-wrap .btn-sub');
  const adultAdd = document.querySelector('.adult-wrap .btn-add');
  const adultSub = document.querySelector('.adult-wrap .btn-sub');
  const childrenAdd = document.querySelector('.children-wrap .btn-add');
  const childrenSub = document.querySelector('.children-wrap .btn-sub');
  const roomCount = document.getElementById('rooms');
  const adultCount = document.getElementById('adult');
  const childrenCount = document.getElementById('children');
  const formSubmit = document.querySelector('.submit');

  formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
  });

  roomAdd.addEventListener('click', () => {
    roomCount.value = +roomCount.value + 1;
  });

  roomSub.addEventListener('click', () => {
    if (roomCount.value != 0) {
      roomCount.value = +roomCount.value - 1;
    }
  });

  adultAdd.addEventListener('click', () => {
    adultCount.value = +adultCount.value + 1;
  });

  adultSub.addEventListener('click', () => {
    if (adultCount.value != 0) {
      adultCount.value = +adultCount.value - 1;
    }
  });

  childrenAdd.addEventListener('click', () => {
    childrenCount.value = +childrenCount.value + 1;
  });

  childrenSub.addEventListener('click', () => {
    if (childrenCount.value != 0) {
      childrenCount.value = +childrenCount.value - 1;
    }
  });
});
