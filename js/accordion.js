$(function() {
  $("#accordion1,#accordion2,#accordion3,#accordion4,#accordion5").accordion({
    heightStyle: "content"
  });
  $("#accordion1,#accordion2,#accordion3,#accordion4,#accordion5").accordion({
    collapsible: true
  });
  $(".selector").accordion({
    active: 1
  });
  $("#accordion1,#accordion2,#accordion3,#accordion4,#accordion5").accordion({
    icons: false
  })
});
