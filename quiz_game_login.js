function addUser(){
player1_name=
document.getElementById("p1").value;
player2_name=
document.getElementById("p2").value;
 localStorage.setItem("p1","p1");
 localStorage.setItem("p2","p2");

window.location ="game_page.html";
}