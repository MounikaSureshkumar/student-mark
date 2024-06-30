function show_result() {
   let tam = document.querySelector("#tam").value;
   let eng = document.querySelector("#eng").value;
   let mat = document.querySelector("#mat").value;
   let sci = document.querySelector("#sci").value;
   let ss = document.querySelector("#ss").value;

   let to = parseFloat(tam) + parseFloat(eng) + parseFloat(mat) + parseFloat(sci) + parseFloat(ss);
   let per = to / 5;
   //  (to*100)/500;
   if (per >= 90 && 100 >= 90) {
      document.querySelector(".gra").innerHTML = "A";
   }
   else if (per >= 70 && 89 >= 70) {
      document.querySelector(".gra").innerHTML = "B";
   }
   else if (per >= 60 && 69 >= 50) {
      document.querySelector(".gra").innerHTML = "C";
   }
   else if (per >= 40 && 59 >= 40) {
      document.querySelector(".gra").innerHTML = "D";
   }
   else if (per >= 30 && 39 >= 30) {
      document.querySelector(".gra").innerHTML = "E";
   }

   else {
      document.querySelector(".gra").innerHTML = "You Are Fail";
   }
   document.querySelector(".to").innerHTML = to;
   document.querySelector(".per").innerHTML = per;
   if (per > 29) {
      document.querySelector(".result h2").innerHTML = "YOU ARE PASS";
   }
   else {
      document.querySelector(".result h2").innerHTML = "YOU ARE FAIL";
   }

}

