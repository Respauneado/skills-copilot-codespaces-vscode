function skillMember() {
    var x = document.getElementById("skillMember");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("skillMember").style.display = "block";
      document.getElementById("skillMember").style.transition = "all 2s";
    } else {
      x.style.display = "none";
    }
  }

   