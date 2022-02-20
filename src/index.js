function openCity(evt, cityName) {
  // Declare all variables
  var i, fundContent, fundLink;

  // Get all elements with class="fundContent" and hide them
  fundContent = document.getElementsByClassName("fundContent");
  for (i = 0; i < fundContent.length; i++) {
    fundContent[i].style.display = "none";
  }

  // Get all elements with class="fundLink" and remove the class "active"
  fundLink = document.getElementsByClassName("fundLink");
  for (i = 0; i < fundLink.length; i++) {
    fundLink[i].className = fundLink[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "grid";
  evt.currentTarget.className += "active";
}

// Show a particular tab to be active on load
document.getElementById("defaultOpen").click();
