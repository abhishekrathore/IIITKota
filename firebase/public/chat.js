angular.module("chatApp", ["firebase"])
.controller("chatCtrl", chatCtrl)

function chatCtrl($firebaseArray,$firebaseAuth,$http){
    var chat = this;
    
    var auth = $firebaseAuth();
     var chatRef =  firebase.database().ref("chats")
     chat.messages   =   $firebaseArray(chatRef);

    console.log("hi");

chat.send = function(t,n){




     chat.messages.$add({"text":t,"name":chat.name,"photo":chat.photo})
     
}

chat.login = function(){

    var url = "https://api.genderize.io/?name=peter"
    
        $http.get(url).then(function(data){
           console.log(data)
        })



  auth.$signInWithPopup("google").then(function(firebaseUser) {
    console.log("Signed in as:", firebaseUser.user);
    console.log(firebaseUser.user.displayName,firebaseUser.user.photoURL)
    chat.name = firebaseUser.user.displayName;
    chat.photo = firebaseUser.user.photoURL;

   


  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });

  console.log("test")
}


}