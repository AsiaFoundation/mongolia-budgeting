$(function() {
  $.getJSON("json/chingeltei.json", function(data) {
    var khoroos = Object.keys(data);
    var years = Object.keys(data["9"]);
    for (var y = 0; y < years.length; y++) {
      $("table").append("<tr><td span='4'>" + years[y] + "</td></tr>");
      for (var row = 0; row < data["9"][years[y]].length; row++) {
        var newrow = $("<tr>").append('<td>' + data["9"][years[y]][row].join('</td><td>') + '</td>');
        $("table").append(newrow);
      }
    }
  });
});
