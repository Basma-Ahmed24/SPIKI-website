<!DOCTYPE html>
<html >
    <head>
        <title>Login.SPIKI</title>
        <meta charset="UTF-8">
        <meta name="enroll" content="">  
        <style>
            body{background: white url(BGINPUT.jpg) no-repeat fixed ;
               background-size: cover;}  

               form{ margin:50px auto; width: 450px;height:450px;
                border-radius: 20px;border: 5px solid rgb(224, 187, 116) ;margin-right: 100px;}
              h1{color: rgb(226, 210, 121);text-align: center;font-size: 60px; font-weight:bold ;}
              h2{color: rgb(226, 210, 121);text-align: center;font-size: 30px;font-weight:bold ;}
              input[type="text"],[type="password"]  {border:1px solid #2183a7;margin-bottom: 20px;
                margin-left: 45px;width: 350px;height:8%;border-radius: 10px;outline: none; color: rgb(20, 20, 20)}  
                #button1{text-align: center;padding: 6px 0px 6px 5px ;margin: 5px 5px 5px 5%; width: 40%;height: 10%;
                border: none;border-radius: 4px;background-color: rgb(228, 226, 119) ;border: 5px solid rgb(185, 57, 17);
             font-size: 25px; color: rgb(42, 25, 141);}

        </style>
        <script>

            function valiation(){
           var username =document.getElementById("name").value;
           var password =document.getElementById("pass").value;
           if(username=="user1" && password=="user1"){
               window.location.href="index.html";
           } 
           else if(username=="user2" && password=="user2"){
               window.location.href="index.html";
           } 
           else if(username=="admin" && password=="admin"){
            window.location.href="admin.html";
           } 
           else{
            alert("But correct username and password or regist if you new");
           }
            }
        </script>
    </head>
    <body>
         <form>
          <h1>SPIKI</h1>
          <h2>login</h2>
            
         <input type="text" placeholder="User Name" id="name" >
         <input type="password" placeholder="Enter password" id="pass">
            
        <div> 
            <input type="button" id="button1" onclick="valiation()" value="login">
            <button id="button1"><a href="register.html">Register</a></button>
        </div>
         </form>
 </BODY>
</html>