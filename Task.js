let dropdown=document.getElementById("dropdownp")
let profile =document.getElementById("profile")
dropdown.style.display="none"

function openp(){
    console.log("entered")
    dropdown.style.display="block"
    
}
function closep(){
    dropdown.style.display="none"
}

let buy=document.getElementsByClassName("buy")
let img1=document.getElementById("img1")
console.log(buy)
console.log(img1)

let arr=Array.from(buy)




for (let x in arr) {
    arr[x].addEventListener('click', function(e) {
        thatimage(e);
          }, false);
}

function thatimage(e) {
    console.log("test");
    var button = e.target;
    console.log(button)
    var a= button.parentNode;
    console.log(a)
    row = a.parentNode;
    console.log(row)
    row.removeChild(a);
  }

  //To delete element permanently from the webpage,we need to add the element dynamically