function preload{

}

function setup{
    canvas = createCanvas(700 , 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(700 , 600);
    video.hide();
}