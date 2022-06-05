var canvas = document.getElementById("can1");
var ctx = canvas.getContext('2d');
	
	
var width = canvas.clientWidth;
var height = canvas.clientHeight;

var position = {
    min_x : width * 0.1,
    max_x : width * 0.9,
    max_y : height * 0.9,
    min_y : height * 0.1
}

var value = 90;  //사용자가 입력한 값
var wid = 50;  //바 차트 1개의 넓이	
ctx.save();
//시작, 시작, 넓이, 높이

//시작점 x는 position에서 옆으로 띄울 최소값
//시작점 y는 최대높이값에서 비율을 곱해서 나온 값
//사각형의 넓이는 wid 값으로 고정
//사각형의 높이는 최대 높이에서 비율을 곱해나온 값을 빼 준 값
ctx.beginPath();

var lvalue = [66.5, 56.9, 46];  //사용자가 입력한 값
var lname = ["Java","C","Python"];
lvalue.forEach( (data, idx) => {
    //x좌표의 시작은 최소x값에 비율을 더해준 값
    var devide = idx / lvalue.length ; 
    ctx.strokeRect(position.min_x + position.max_x*devide, position.max_y* ( 1-(data/100) ), wid, position.max_y - position.max_y* ( 1-(data/100) ));
});

function dataText(){
    lvalue.forEach((data, idx) =>{
        var devide = idx / lvalue.length ;
        var len = (wid/2) - ctx.measureText(data+'').width / 2;  //텍스트 길이의 절반!
        ctx.strokeText(data, position.min_x + position.max_x*devide + len, 250);
        len = (wid/3) - ctx.measureText(data+'').width / 4;  //텍스트 길이의 절반!
        ctx.strokeText(lname[idx], position.min_x + position.max_x*devide + len, position.max_y + position.min_y);
    });
} 

dataText();