let logins=[], passwords=[], points=[];

function register(){
    let login = document.getElementById("login").value
    let password = document.getElementById("password").value

    logins.push(login);
    passwords.push(password);
}
function login(){
    let login = document.getElementById("login").value
    let password = document.getElementById("password").value

    for(i=0; i<logins.length; i++){
        if(login==logins[i]){
            if(password==passwords[i]){
                alert("zalogowałeś się poprawnie");
                index=i;
                location.href = "main.html";
                break;
            }else{alert("złe hasło"); break}
        }
        if(i==logins.length-1){alert('nie odnaleziono maila')}
    }
}