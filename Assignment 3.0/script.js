let form = document.getElementById("get_token")
form.onclick= async function(){
    let url = 'http://localhost:12345/get_token';
    let response = await fetch(url);
    let commits = await response.text();
    var para = document.createElement("p");                 // Create a <p> element
    para.innerHTML = "Copy this Token"+commits;                
    document.getElementById("div1").appendChild(para);
}
let submitform = document.getElementById("Register")
submitform.onclick= async function(){
    let user = {
        "username" : String(document.getElementById("username").value),
        "data" : String(document.getElementById("data").value),
        "token" : String(document.getElementById("token").value)
      };
      
      let response2 = await fetch('http://localhost:12345/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      console.log(response2);
      if (response2.ok) {
        alert("Successfully registered!");
    }
}
let submitform2 = document.getElementById("get_data")
submitform2.onclick= async function(){
    let user2 = {
        "token" : String(document.getElementById("token2").value)
      };
      
      let response_new = await fetch('http://localhost:12345/get_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user2)
      });
      console.log(response_new);
      if (response_new.ok) {
        let url = 'http://localhost:12345/get_token';
        
        let commits2 = await response_new.text();
        var para2 = document.createElement("p");                 // Create a <p> element
        para2.innerHTML = "Here is your data:"+"<br>"+commits2;                
        document.getElementById("div2").appendChild(para2);
    }
}