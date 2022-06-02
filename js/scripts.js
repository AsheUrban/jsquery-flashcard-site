$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#definition1").toggle();
    $("#hidedefinition1").toggle();
  });


  $(".clickable2").click(function() {
    $("#definition2").toggle();
    $("#hidedefinition2").toggle();
  });
});

//from derrak's project
// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $(".definition1").toggle();
//   });
// });