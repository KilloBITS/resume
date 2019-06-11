let functions = {
  toggleMenu: () => {
    if(!functions.toggleMenuBool){
      document.getElementById('navBar').style.width = "100%";
      document.getElementById('navCenter').className = 'navCenter openedMenu';
      functions.toggleMenuBool = true;
    }else{
      if(document.body.offsetWidth > 800){
        document.getElementById('navBar').style.width = "28px";
      }else{
        document.getElementById('navBar').style.width = "0px";
      }
      document.getElementById('navCenter').className = 'navCenter';
      functions.toggleMenuBool = false
    }
    console.log('suka');
  },
  goToYakor: (el) => {
    console.log(el)
  },
  clickYakor: () => {
    let btn = document.getElementsByClassName('menu_btn');
    btn.onclick = (element) => {
      functions.goToYakor(element);
    }
  },
  init: () => {
    functions.toggleMenuBool = false;
    let classes = document.getElementsByClassName('projectsContainer');
    for(let i = 0; i < classes.length; i++){
        classes[i].style.height = classes[i].offsetWidth + 'px';
    }
  }
}

export default functions;
