let handleScroll = () => {
  //mainCenter
  const scrollBlock = document.getElementById('scrollBlock');
  const centerBlock = document.getElementById('mainCenter');

  let newTextSize = (centerBlock.getBoundingClientRect().top * .05)+46;
  console.log(newTextSize)
  document.getElementById('myName').style.fontSize = newTextSize+"px"
  if(centerBlock.getBoundingClientRect().top < -100){
    centerBlock.getElementsByClassName('mainBlockInfoMini')[0].style.opacity = '0';
    centerBlock.getElementsByClassName('mainBlockInfoMini')[1].style.opacity = '0';
    centerBlock.getElementsByClassName('mainBlockInfoMini')[2].style.opacity = '0';
    centerBlock.getElementsByClassName('socialsLineMini')[0].style.opacity = '0';
  }else{
    centerBlock.getElementsByClassName('mainBlockInfoMini')[0].style.opacity = '1';
    centerBlock.getElementsByClassName('mainBlockInfoMini')[1].style.opacity = '1';
    centerBlock.getElementsByClassName('mainBlockInfoMini')[2].style.opacity = '1';
    centerBlock.getElementsByClassName('socialsLineMini')[0].style.opacity = '1';

    // centerBlock.style.display = 'block'
  }
};

export default handleScroll;
