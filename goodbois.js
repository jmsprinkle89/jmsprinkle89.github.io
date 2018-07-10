var likes = 0;
function incrementCounter(){
  likes++;
  var likeField = document.getElementById("counter");
  console.log(likeField);
  console.log("test");
  likeField.innerHTML = likes;
}
var likes2 = 0;
function incrementCounter2(){
  likes2++;
  var likeField2 = document.getElementById("counter2");
  console.log(likeField2);
  console.log("test");
  likeField2.innerHTML = likes2;
}
