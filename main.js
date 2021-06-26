noseX = 0;
noseY = 0;

function preload()
{

    clown_image= loadImage("https://i.postimg.cc/8ckyNL7d/clown-nose-and-mustache.png");

}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    img = createCapture(VIDEO);
    img.size(350, 350);
    img.hide();
    poseNet = ml5.poseNet(img, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-31;
        noseY = results[0].pose.nose.y-31;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoaded()
{
    console.log("PoseNet has Started");
}

function draw()
{
    image(img, 0, 0, 350, 350);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    //circle(noseX, noseY, 20);
    image(clown_image, noseX, noseY, 70, 70);

}

function take_snapshot()
{
    save('My-Clown-Face.jpg');
}