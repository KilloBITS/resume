let functions = {
  goToYakor: (el) => {
    console.log(el)
  },
  clickYakor: () => {
    console.log('onload')
    let btn = document.getElementsByClassName('menu_btn');
    btn.onclick = (element) => {
      functions.goToYakor(element);
    }
  }
}

export default functions;
