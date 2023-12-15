noseX = 0;
noseY = 0;

function preload(){
clown_nose = loadImage("https://i.postimg.cc/28M2szpz/clown-nose-2.png") 
}

function setup(){
 canvas = createCanvas(350, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(350, 300);
 video.hide()
 poseNet = ml5.poseNet(video, modelLoaded)
 poseNet.on('pose' ,gotPoses)
}

function draw(){
   image(video, 0,0,350,300);
   image(clown_nose, noseX, noseY, 30,30);
}

function take_snapshot(){
    save('filter_website.png')
}

function modelLoaded(){
    console.log("model loaded!")
}

function gotPoses(results){
   if(results.length > 0){
    console.log(results)
    noseX = results[0].pose.nose.x - 15;
    noseY = results[0].pose.nose.y - 15;
    console.log("noseX = "+noseX);
    console.log("noseY = "+noseY);
   }

}