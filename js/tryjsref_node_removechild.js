function myFunction() {
    var list = document.getElementById("myList");
    
    if (list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
  }