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

var postsURL = 'https://private-anon-a074136cc9-wad20postit.apiary-mock.com/posts';
$.getJSON(postsURL, function (data) {
    $.each(data, function () {
        let firstName = this.author.firstname;
        let lastName = this.author.lastname;
        let avatar = this.author.avatar;

        let fullName = firstName.concat(" " + lastName);

        let createTime = this.createTime;
        let likes = this.likes;

        var postHTML =
            `<div class="post">
            <div class="post-author">
              <span class="post-author-info">
                <img src=` + avatar + ` alt="Post author">
                <small>` + fullName + `</small>
              </span>
              <small>` + createTime + `</small>
            </div>`;

        var type;
        var source;
        if (this.media !== null) {
            type = this.media.type;
            source = this.media.url;

            if (type === "image") {
                postHTML = postHTML.concat(`<div class="post-image">
                                 <img src=` + source + ` alt="">
                                 </div>`);
            }
            else if (type === "video") {
                postHTML = postHTML.concat(`<div class="post-video">
                                 <video controls>
                                 <source src=` + source + `>
                                 </video>
                                 </div>`);
            }
        }

        if (this.text !== null) {
            postHTML = postHTML.concat(`<div class="post-title">
                             <h3>` + this.text + `</h3>
                             </div>`);
        }

        postHTML = postHTML.concat(`<div class="post-actions">
                        <button type="button" name="like" class="like-button">` + likes +`</button>
                        </div>
                        </div>`);

        $('.main-container').append(postHTML);

    });
    console.log(data);
});

$(document).on("click", '.like-button', function () {
    $(this).toggleClass('liked');
});



var usersUrl = 'https://private-anon-b7a1f38408-wad20postit.apiary-mock.com/profiles';
$.getJSON(usersUrl, function(data){
    $.each(data, function () {
        var firstName = this.firstname;
        var lastName = this.lastname;
        var avatar = this.avatar;
        var name = firstName.concat(" " + lastName);
        
        let userInfo = `<div class="grid-item">
                            <div class="avatar">
                                <img src=` + avatar + ` alt="User">
                            </div>
                            <div class="name">
                                <h3>` + name + `</h3>
                            </div>
                            <div class="profile-actions">
                                <button type="button" name="Follow" class="followButton">Follow</button>
                            </div>
                        </div>`

        $('.grid-container').append(userInfo);
    });

    console.log(data);
});

$(document).on("click", '.followButton', function () {
    $(this).toggleClass('followed');
    if ($(this).text() == "Follow") {
        $(this).text("Followed");
    }
    else {
        $(this).text("Follow");
    }
    
});
