
function start() {
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yW1c63h9C/model.json',modelLoaded);
}
function modelLoaded() {
    classifier.classify(gotResults);
}
function gotResults(error,results){
if(error) {
console.log(error);
}
else{
console.log(results);
red=Math.floor(Math.random()*255)+1;
green=Math.floor(Math.random()*255)+1;
blue=Math.floor(Math.random()*255)+1;
document.getElementById("sound").innerHTML="Detected voice is of-  "  +results[0].label;
document.getElementById("dog").innerHTML="Detected Dog-  "  +(results[0].confidence*100).toFixed(2)+" %";
document.getElementById("cat").innerHTML="Detected Cat-  "  +(results[1].confidence*100).toFixed(2)+" %";
document.getElementById("pig").innerHTML="Detected Pig-  "  +(results[2].confidence*100).toFixed(2)+" %";
document.getElementById("cow").innerHTML="Detected Cow-  "  +(results[3].confidence*100).toFixed(2)+" %";
document.getElementById("dog").style.color="rgb("+red+","+green+","+blue+")";
document.getElementById("cat").style.color="rgb("+red+","+green+","+blue+")";
document.getElementById("pig").style.color="rgb("+red+","+green+","+blue+")";
document.getElementById("cow").style.color="rgb("+red+","+green+","+blue+")";
img1=document.getElementById("animal");
if(results[0].label=="Barking") {
img1.src="dog.jpeg"

}
 else if(results[0].label=="Meowing") {
    img1.src="cat.jpg"

    }
else if(results[0].label=="Mooing") {
img1.src="cow.jpg"

}
else if(results[0].label=="Oink") {
    img1.src="pig.jpg"

    }
else {
img1.src="listen.gif"
}
}
}