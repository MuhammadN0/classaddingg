let myElement = document.querySelector("[title = 'Current']");
let add = document.querySelector("[class = 'classes-to-add']");
let remove = document.querySelector("[class = 'classes-to-remove']");
window.onload = function(){
  if (myElement.classList.length === 0){
    document.getElementsByClassName("classes-list")[0].children[1].innerText= `No Classes to Show`;
  } else {
    document.getElementsByClassName("classes-list")[0].children[1].innerHTML= ``;
    for (k=0; k < myElement.classList.length; k++){
      ctd = document.createElement('span');
      txt = document.createTextNode(myElement.classList.item(k));
      ctd.appendChild(txt);
      document.getElementsByClassName("classes-list")[0].children[1].appendChild(ctd);
    }
  }
}
myElement.onclick = function(){
  arradd = add.value.toLowerCase().split(" ");
  console.log(arradd);
  console.log(arradd.length)
  arrrmv = remove.value.toLowerCase().split(" ");
  if (arradd[0].length === 0){
    console.log("Hello")
  } else {
    for (i=0; i< arradd.length; i++){
      myElement.classList.add(arradd[i])
    }
  }
  if (arrrmv[0].length === 0){
    console.log("Hello 2")
  }else {
    for (j=0; j< arrrmv.length; j++){
      myElement.classList.remove(arrrmv[j]);
    }
  }
  console.log(myElement.classList.length);
  if (myElement.classList.length === 0){
    document.getElementsByClassName("classes-list")[0].children[1].innerText= `No Classes to Show`;
  } else {
    document.getElementsByClassName("classes-list")[0].children[1].innerHTML= ``;
    for (k=0; k < myElement.classList.length; k++){
      ctd = document.createElement('span');
      txt = document.createTextNode(myElement.classList.item(k));
      ctd.appendChild(txt);
      document.getElementsByClassName("classes-list")[0].children[1].appendChild(ctd);
    }
  }
  add.value =``
  remove.value =``
}