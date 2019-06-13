let functions = {
  toggleMenu: () => {
    if(document.getElementById('navCenter').className === 'navCenter'){
      document.getElementById('navBar').style.width = "100%";
      document.getElementById('navCenter').className = 'navCenter openedMenu';
    }else{
      if(document.body.offsetWidth > 800){
        document.getElementById('navBar').style.width = "28px";
      }else{
        document.getElementById('navBar').style.width = "0px";
      }
      document.getElementById('navCenter').className = 'navCenter';
    }
  },
  init: () => {
    let classes = document.getElementsByClassName('projectsContainer');
    for(let i = 0; i < classes.length; i++){
        classes[i].style.height = classes[i].offsetWidth + 'px';
    }
  }
}

export default functions;
