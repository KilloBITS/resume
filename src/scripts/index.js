let clearClassNavigator = (setClass) => {
  let navArr = document.getElementsByClassName('centerMinBtnBack');

  console.log(navArr)

  for(let i = 0; i < navArr.length; i++){
      navArr[i].className = 'centerMinBtnBack';
  }

  navArr[setClass].className = 'centerMinBtnBack activeBarBtn';
}

let handleScroll = () => {
  //mainCenter
  const scrollBlock = document.getElementById('scrollBlock');
  // const centerBlock = document.getElementById('mainCenter');

  // let newTextSize = (scrollBlock.getBoundingClientRect().top * .05)+46;
  let range = 600;
  let height = document.documentElement.clientHeight;
  let offset = height / 2;
  let calc = 1 - (scrollBlock.getElementsByTagName('div')[0].scrollTop - offset + range) / range;
  document.getElementById('mouse').style.opacity = calc;
  // document.getElementById('myName').style.fontSize = newTextSize+"px";

  if(document.getElementById('yakor_main').offsetTop <= scrollBlock.getElementsByTagName('div')[0].scrollTop){
    clearClassNavigator(0)
  }

  if(document.getElementById('yakor_about').offsetTop-100 <= scrollBlock.getElementsByTagName('div')[0].scrollTop){
    clearClassNavigator(1)
  }

  if(document.getElementById('yakor_skills').offsetTop <= scrollBlock.getElementsByTagName('div')[0].scrollTop){
    clearClassNavigator(2)
  }

  if(document.getElementById('yakor_block').offsetTop <= scrollBlock.getElementsByTagName('div')[0].scrollTop){
    clearClassNavigator(3)
  }

  if(document.getElementById('yakor_projects').offsetTop <= scrollBlock.getElementsByTagName('div')[0].scrollTop){
    clearClassNavigator(4)
  }

  if(document.getElementById('yakor_socials').offsetTop <= scrollBlock.getElementsByTagName('div')[0].scrollTop){
    clearClassNavigator(5)
  }

  if(document.getElementById('yakor_call').offsetTop <= scrollBlock.getElementsByTagName('div')[0].scrollTop){
    clearClassNavigator(6)
  }


  if(scrollBlock.getElementsByTagName('div')[0].scrollTop > 400){
    scrollBlock.getElementsByClassName('mainBlockInfoMini')[0].style.opacity = '0';
    scrollBlock.getElementsByClassName('mainBlockInfoMini')[1].style.opacity = '0';
    scrollBlock.getElementsByClassName('mainBlockInfoMini')[2].style.opacity = '0';
    scrollBlock.getElementsByClassName('socialsLineMini')[0].style.opacity = '0';
  }else{
    scrollBlock.getElementsByClassName('mainBlockInfoMini')[0].style.opacity = '1';
    scrollBlock.getElementsByClassName('mainBlockInfoMini')[1].style.opacity = '1';
    scrollBlock.getElementsByClassName('mainBlockInfoMini')[2].style.opacity = '1';
    scrollBlock.getElementsByClassName('socialsLineMini')[0].style.opacity = '1';
  }

  if(scrollBlock.getElementsByTagName('div')[0].scrollTop > 650){
    document.getElementById('mobileMenuBtnFade').className = 'mobileMenuBtnFade showedBtn'
  }else{
    document.getElementById('mobileMenuBtnFade').className = 'mobileMenuBtnFade'
  }
};

export default handleScroll;
