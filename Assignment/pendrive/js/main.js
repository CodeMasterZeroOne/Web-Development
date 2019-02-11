function sendMail() {
    var userName = document.getElementById('user').value;
    var email= document.getElementById('email').value;;
    var category = document.getElementById('category').value;;
    var subject = document.getElementById('subject').value;;
    var comments = document.getElementById('comments').value;;
    var link = "mailto:yourEmail@domain.com"
             + "?subject=" + category + ", Subject: " + subject
             + "&body=" + "Hi, I am " + userName + " my email is " + email + " I would like to ask about: " + comments
    ;

    window.location.href = link;
}