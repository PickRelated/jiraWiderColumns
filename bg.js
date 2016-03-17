window.onload = function() {
  var width = 100;
  var jiraTable = document.getElementById('ghx-pool-column');
  if (jiraTable != null) {
    jiraTable.style.display = 'table';

    document.onkeydown = function(e) {
      if (e.keyCode == 39) {
        width += 10;
      } else if (e.keyCode == 37) {
        width -= 10;
      }
      if (width <= 0) {
        width = 0;
      }
      jiraTable.style.width = width + '%';
    };
  }
}
