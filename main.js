var canvas=new fabric.Canvas("canvas");
player_x=10;
player_y=50;
blockimageheight=50;
blockimagewidth=50;
var player_object="";
var blockimageobject="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaletoHeight(100);
player_object.set({
top:player_y,left:player_x
});
canvas.add(player_object);
});
}
function block_update(getImage){
    fabric.Image.fromURL(getImage,function(Img){
    block_object=Img;
    block_object.scaleToWidth(blockimagewidth);
    block_object.scaletoHeight(blockimageheight);
    block_object.set({
    top:player_y,left:player_x
    });
    canvas.add(block_object);
    });
}