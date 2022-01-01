function runSpeechRecognition() {
var output = document.getElementById("output");
var action = document.getElementById("action");
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.onstart = function() {
    action.innerHTML = "<small>Speak Now</small>";
};
                
recognition.onspeechend = function() {
    action.innerHTML = "<small>Loaded</small>";
    recognition.stop();
}
              
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    password.value =  transcript ;
    password.classList.remove("hide");
};
              
recognition.start();
	        }
            var password=document.getElementById("password");
            function genPassword() {
                var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var passwordLength = 12;
                var password = "";
                for (var i = 0; i <= passwordLength; i++) {
                    var randomNumber = Math.floor(Math.random() * chars.length);
                    password += chars.substring(randomNumber, randomNumber +1);
                }
                var a=document.getElementById("password").value
                document.getElementById("password").value =a.split(' ').join('')+ password;
        
            }
            function copyPassword() {
          var copyText = document.getElementById("password");
          copyText.select();
          copyText.setSelectionRange(0, 999);
          document.execCommand("copy");
          
        }