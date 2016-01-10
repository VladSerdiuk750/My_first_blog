var Pen = Object();

Pen.name = "Parker";
Pen.write = true;
Pen.price = 2;
Pen.par = [
    200,
    100
];

Pen.show = function () {
    alert(Pen.name+" cost "+Pen.price+" $");
}

if(Pen.write) {
    alert("Pen is writing now");
}
else {
    alert("Pen was to be writed");
}

console.log(Pen);