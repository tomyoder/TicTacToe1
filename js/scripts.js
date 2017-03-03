

function Player (turn){
this.turn = turn;
};
var player1 = new Player(0);
var player2 = new Player(0);


var map = ["t1", "t2","t3","t4","t5","t6","t7","t8","t9"];
/*var mapBlank = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", ];*/
var winningCombo = [("t1" + "t2" +"t3")||("t1" +"t5" +"t9") || ("t4"+ "t5" +"t6") || ("t7"+"t8"+"t9") || ("t7"+"t5"+"t3") || ("t2"+"t5"+"t8") || ("t1"+"t4"+"t7") || ("t3"+"t6"+"t9")];

$(function(){
  $("#t1").click(function(){
    $('#t1').prepend('<img src="http://www.drodd.com/images14/x16.png" />');
  });
  $("#t2").click(function(){
  });
  $("#t3").click(function(){
  });
  $("#t4").click(function(){
  });
  $("#t5").click(function(){
  });
  $("#t6").click(function(){
  });
  $("#t7").click(function(){
  });
  $("#t8").click(function(){
  });
  $("#t9").click(function(){
  })
});

 // $('#t1').prepend('<img src="http://www.drodd.com/images14/x16.png" />');

// $('#t3').prepend('<img src="https://images-na.ssl-images-amazon.com/images/I/41EpZZjOUWL.jpg" />');





  // function Location (x_coordinate, y_coordinate) {
  //   this.x_coordinate = x_coordinate;
  //   this.y_coordinate = y_coordinate;
  // }
  // var xCoordinate = new Location(0,0);
  // var yCoordinate = new Location(0,0);



  // var t1 = 0;
  // var t2 = 0;
  // var t3 = 0;
  // var t4 = 0;
  // var t5 = 0;
  // var t6 = 0;
  // var t7 = 0;
  // var t8 = 0;
  // var t9 = 0;
  //
  //
  // var t1first = ["t5","t9","t7","t3"];
  // var t2first = ["t5","t8","t7","t9"];
  // var t3first = ["t5","t7","t9","t1"];
  // var t4first = ["t5","t6","t1","t7"];
  // var t5first = ["t1","t3","t7","t9"];
  // var t6first = ["t5","t4","t3","t9"];
  // var t7first = ["t5","t9","t1","t3"];
  // var t8first = ["t5","t2","t9","t7"];
  // var t9first = ["t5","t1","t3","t7"];
  //
  //
  //
  //   if (t1 = 1) {
  //     for (i=0; i<=t1first.length; i++) {
  //       if (t1first[i] === 0) {
  //         (t1first[i] === 1);
  //         $('#t3').prepend('<img src="https://images-na.ssl-images-amazon.com/images/I/41EpZZjOUWL.jpg" />');
  //       }
  //     }
  //   }
  //     else if (t2 = true) {
  //     for (i=0; i<=t2first.length; i++) {
  //       if (t2first[i] === false) {
  //       (t2first[i] === true && t2first[i] === X);
  //
  //       }
  //     }
  //   }
  //
  //   else if (t3 = true) {
  //     for (i=0; i<=t3first.length; i++) {
  //       if (t3first[i] === false) {
  //       (t3first[i] === true && t3first[i] === X);
  //
  //       }
  //     }
  //   }
  //
  //   else if (t4 = true) {
  //     for (i=0; i<=t4first.length; i++) {
  //       if (t4first[i] === false) {
  //       (t4first[i] === true && t4first[i] === X);
  //
  //       }
  //     }
  //   }
  //
  //   else if (t5 = true) {
  //     for (i=0; i<=t5first.length; i++) {
  //       if (t5first[i] === false) {
  //       (t5first[i] === true && t5first[i] === X);
  //
  //       }
  //     }
  //   }
  //
  //   else if (t6 = true) {
  //     for (i=0; i<=t6first.length; i++) {
  //       if (t6first[i] === false) {
  //       (t6first[i] === true && t6first[i] === X);
  //
  //       }
  //     }
  //   }
  //
  //   else if (t7 = true) {
  //     for (i=0; i<=t7first.length; i++) {
  //       if (t2first[i] === false) {
  //       (t7first[i] === true && t7first[i] === X);
  //
  //       }
  //     }
  //   }
  //
  //   else if (t8 = true) {
  //     for (i=0; i<=t2first.length; i++) {
  //       if (t8first[i] === false) {
  //       (t8first[i] === true && t8first[i] === X);
  //
  //       }
  //     }
  //   }
  //
  //   else if (t9 = true) {
  //     for (i=0; i<=t2first.length; i++) {
  //       if (t9first[i] === false) {
  //       (t9first[i] === true && t9first[i] === X);
  //
  //       }
  //     }
  //   }
