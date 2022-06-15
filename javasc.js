var image=null;
var canvas=document.getElementById("can");
var redimage,windowimage=null;
var grayimage,rainbowimage=null;
var x1 = 0;
var y1 = 0;

function loadimage(){
 //canvas=document.getElementById("can");
  var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
  grayimage=new SimpleImage(fileinput);
  redimage=new SimpleImage(fileinput);
  rainbowimage=new SimpleImage(fileinput);
  windowimage=new SimpleImage(fileinput);
  image.drawTo(canvas);
}
// function doGray() {
//   if ( imageIsLoaded(grayImage) ) {     // check if image is loaded
//     grayscale();	                      // function performs the grayscale work
//     grayImage.drawTo(canvas);	          // display image
//   }
// }
function grayscale(){
  imageisloaded();
  for(var p of grayimage.values()){
    
    var av =(p.getRed()+p.getGreen()+p.getBlue())/3;
    
    p.setRed(av);
    p.setGreen(av);
    p.setBlue(av);
  }
  grayimage.drawTo(canvas);
}

function imageisloaded()
{
  if (image == null || ! image.complete())
{
  alert("Image is not loaded");
}
  
}

function ResetImage(){
  canvas = document.getElementById("can");

var context = canvas.getContext("2d");
context.clearRect(0,0,canvas.width,canvas.height);
  image.drawTo(canvas);
}

function Red(){
  imageisloaded();
  for(var p of redimage.values()){
    var avg=(p.getRed()+p.getGreen()+p.getBlue())/3;
  // var r=p.getRed();
  //   var g=p.getGreen();
  //   var b=p.getBlue();
  if (avg<128){
    p.setRed(2*avg);
    p.setGreen(0);
    p.setBlue(0);
  }
  else{
    p.setRed(255);
    p.setGreen(2*avg-255);
    p.setBlue(2*avg-255);
  }}
  redimage.drawTo(canvas);
 
  
}
function color(){
  imageisloaded();
  for(var p of redimage.values()){
    var avg=(p.getRed()+p.getGreen()+p.getBlue())/3;
  var r=p.getRed();
    var g=p.getGreen();
    var b=p.getBlue();
  if (avg<128){
    p.setRed(r/127.5*avg);
    p.setGreen(g/127.5*avg);
    p.setBlue(b/127.5*avg);
  }
  else{
    p.setRed((2-r/127.5)*avg+2*r-255);
    p.setGreen((2-g/127.5)*avg+2*g-255);
    p.setBlue((2-b/127.5)*avg+2*b-255);
  }}
  redimage.drawTo(canvas);
 
  
}
function rainbow()
{
  imageisloaded();  
  for (var pixel of rainbowimage.values() )
{
  var av = (pixel.getBlue()+pixel.getGreen()+pixel.getRed())/3;
   var width= image.getWidth();
  var height = image.getHeight();
var x = pixel.getX();
var y = pixel.getY();  
if (av < 128 ) 
{
  if (y < height / 7)
  {
    pixel.setRed(2*av);
    pixel.setBlue(0);
    pixel.setGreen(0);
  
     }
   
//    if (y < height / 7)
//   {
//     pixel.setRed(2*av);
//     pixel.setBlue(0);
//     pixel.setGreen(0);
  
//      }
  
   if (y >= height / 7 && y < 2*height/7 )
  {
    pixel.setRed(2*av);
    pixel.setBlue(0);
    pixel.setGreen(0.8*av);
  
     }
  
   if ( y >= 2*height/7 && y < 3*height/7)
  {
    pixel.setRed(2*av);
    pixel.setBlue(0);
    pixel.setGreen(2*av);
  
     }
  
   if ( y >= 3*height/7 &&  y < 4*height/7 )
  {
    pixel.setRed(0);
    pixel.setBlue(2*av);
    pixel.setGreen(0);
  
     }
  
   if ( y >= 4*height/7 && y <5*height/7)
  {
    pixel.setRed(0);
    pixel.setBlue(2*av);
    pixel.setGreen(0);
  
     }
  
   if ( y >= 5*height/7 && y < 6*height/7 )
  {
    pixel.setRed(0.8*av);
    pixel.setBlue(2*av);
    pixel.setGreen(0);
  
     }
   if (y > 6*height/7 )
  {
    pixel.setRed(1.6*av);
    pixel.setBlue(1.6*av);
    pixel.setGreen(0);
   }
  
  }
  
  else 
    {
      if (y < height / 7)
  {
    pixel.setRed(255);
    pixel.setBlue(2*av-255);
    pixel.setGreen(2*av-255);
  
     }
   
  //  if (y < height / 7)
  // {
  //   pixel.setRed(255);
  //   pixel.setBlue(2*av-255);
  //   pixel.setGreen(1.2*av-51);
  
     
  
   if (y >= height / 7 && y < 2*height/7 )
  {
    pixel.setRed(255);
    pixel.setBlue(2*av-255);
    pixel.setGreen(1.2*av-51);
  
     }
  
   if ( y >= 2*height/7 && y < 3*height/7)
  {
    pixel.setRed(255);
    pixel.setBlue(2*av-255);
    pixel.setGreen(255);
  
     }
  
   if ( y >= 3*height/7 &&  y < 4*height/7 )
  {
    pixel.setRed(2*av-255);
    pixel.setBlue(2*av-255);
    pixel.setGreen(255);
  
     }
  
   if ( y >= 4*height/7 && y <5*height/7)
  {
    pixel.setRed(2*av-255);
    pixel.setBlue(255);
    pixel.setGreen(2*av-255);
     }
  
   if ( y >= 5*height/7 && y < 6*height/7 )
  {
   pixel.setRed(1.2*av-51);
    pixel.setBlue(255);
    pixel.setGreen(2*av-255);
  
     }
   if (y > 6*height/7 )
  {
    pixel.setRed(0.4*av + 153);
    pixel.setBlue(0.4*av + 153);
    pixel.setGreen(2*av-255);
   }
    }
 }
  rainbowimage.drawTo(canvas);
}


function windowpane()
{
 imageisloaded();
  for(var pixel of windowimage.values() )
  {
     var width= image.getWidth();
  var height = image.getHeight();
  var x = pixel.getX();
  var y = pixel.getY();
      if (x > width - 50 || x < 50 || ( x > ( 1/4 *width) && x < (1/4 * width + 50) ) || ( x > (2/4 *width) && x < (2/4 * width + 50) ) || ( x > (3/4 *width) && x < (3/4 * width + 50) )  )
  {
    pixel.setRed(239);
    pixel.setGreen(228);
    pixel.setBlue(176);
  }
    
   if ( y < 50 || (y > height/2 && y < (height/2)+ 50 ) ||y > (height-50)  )
  {
    pixel.setRed(239);
    pixel.setGreen(228);
    pixel.setBlue(176);
  }
    
    }
windowimage.drawTo(canvas);
}
function RandomInt(min,max){
  return Math.floor(Math.random()*(max-min+1) + min);
}
function Blur(){
	var blurimage = new SimpleImage(image.getWidth(),image.getHeight());
	for(var pixel of image.values()){
		var x = pixel.getX();
		var y = pixel.getY();
    var width = image.getWidth();
    var height = image.getHeight();
		var rand = Math.random();
		if (rand < .5){
			blurimage.setPixel(x,y,pixel);
		}
    if (rand >= .5){
      var x1 = x + RandomInt(-10,10);
      var y1 = y + RandomInt(-10,10);
      if (x1 < 0){
        x1 = 0;
      }
      if (x1 > width - 1){
        x1 = width - 1;
      }
      if (y1 < 0){
        y1 = 0;
      }
      if (y1 > height - 1){
        y1 = height - 1;
      }
      var pix = image.getPixel(x1,y1);
      blurimage.setPixel(x,y,pix);
    }
	}
	blurimage.drawTo(canvas);
}
