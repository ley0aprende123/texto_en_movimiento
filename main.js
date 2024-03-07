noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
diferencia = 0;

function setup(){
    //sirve para la configuracion
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("purple");
    document.getElementById("text_side").innerHTML = "El tamaño del texto es : " + diferencia;
    fill("brown");
    square(10,10,450);
    fill("blue")
   textSize(diferencia)
    text('mueve las muñecas', 250,250);

}

function modelLoaded(){
    console.log("El modelo se cargó correctamente");
}

function gotPoses(results){
    
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;

        console.warn("seguarda valor de nariz X en" + noseX)
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        diferencia = floor(leftWristX - rightWristX);
    }
}