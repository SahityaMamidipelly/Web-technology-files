var allimg=document.images;
console.log(allimg)
for(i=0;i<=allimg.length-1;i++)
{
    allimg[i].src=`./Images/${i}.jpg`;

}
var imagefilepath;
function imgcontainer(Imagepath)
{
    document.querySelector("#bigImgContainer").style.display="flex"
    document.querySelector("#image").style.backgroundImage=`url(${Imagepath})`
    imagefilepath=Imagepath;
}
function closecontainer()
{
    document.querySelector('#bigImgContainer').style.display="none"
}

function editWindowEnable()
{
    document.querySelector("#editContainer").style.display="flex"
    document.getElementById("imageTag").style.backgroundImage=`url(${imagefilepath})`
    console.log(imagefilepath)
}

function effects(){
    var blurval=document.getElementById("a").value
    var brightval=document.getElementById("b").value
    var contrastval=document.getElementById("c").value
    var grayscale=document.getElementById("d").value
    var hueval=document.getElementById("e").value
    var invertval=document.getElementById("f").value
    var opacityval=document.getElementById("g").value
    var saturateval=document.getElementById("h").value
    var sepiaval=document.getElementById("i").value
    document.getElementById('imageTag').style.filter=`blur(${blurval}px) brightness(${brightval}%) contrast(${contrastval}%) grayscale(${grayscale}%)
     hue-rotate(${hueval}deg) invert(${invertval}%)  opacity(${opacityval}%)  saturate(${saturateval}%) sepia(${sepiaval}%)`

    var rotz=document.getElementById("j").value
    var rotx=document.getElementById("k").value
    var roty=document.getElementById("l").value
    var Scale=document.getElementById("m").value
    var Scalex=document.getElementById("n").value
    var Scaley=document.getElementById("o").value
    var sk=document.getElementById("p").value
    var skx=document.getElementById("q").value
    var sky=document.getElementById("r").value
    document.getElementById('imageTag').style.transform=`rotateZ(${rotz}deg) rotateX(${rotx}deg) rotateY(${roty}deg) scale(${Scale}) 
    scaleX(${Scalex}) scaleY(${Scaley}) skew(${sk}deg)  skewX(${skx}deg) skewY(${sky}deg)`
}
function editWindowClose()
{
    document.getElementById("editContainer").style.display="none"
}
