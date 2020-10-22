var staticUrl = 'https://private-anon-1f4633fba3-wad20postit.apiary-mock.com/users/1';
$.getJSON(staticUrl, function(data) {
    var profileImage = data.avatar;
    var userEmail = data.email;
    var userFirstName = data.firstname;
    var userLastName = data.lastname;
    var userName = userFirstName.concat(" " + userLastName);
    document.getElementById('nameArea').innerHTML = userName;
    document.getElementById('emailArea').innerHTML = userEmail;
    document.getElementById('profileImage').src = profileImage;
    console.log(data);

});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}