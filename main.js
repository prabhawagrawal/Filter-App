noseX = 0;
noseY = 0;

function preload(){
    moustache_filter = loadImage("m.png")
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 300);
    image(moustache_filter, noseX, noseY, 50, 50)
}

function takeSnapshot(){
    save("Picture.jpg");
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y-10;
        console.log("Nose X: " + noseX);
        console.log("Nose Y: " + noseY);
    }
}