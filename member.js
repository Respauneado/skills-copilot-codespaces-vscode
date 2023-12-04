function skillMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    if (memberValue == "Yes") {
        document.getElementById("skillMember").style.display = "block";
    } else {
        document.getElementById("skillMember").style.display = "none";
    }
}