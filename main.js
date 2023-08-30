noseX=0;
noseY=0;
function preload(){
    mustach=loadImage(' https://i.postimg.cc/htPtQsFQ/m.png ');
}   
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(250, 250);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); 
}
function draw(){
   image(video, 0 , 0 ,300, 300);
   image(mustach, noseX+15, noseY+30,30, 30);
}
function take_snapshot(){
    save('filter.png')
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}