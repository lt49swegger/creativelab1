
var lastNum = 0;

function changeElement()
{
    switch(lastNum){
        case 1:
        document.getElementById("joke1").style.display= "none";
        break;
        case 2:
        document.getElementById("joke2").style.display= "none";
        break;
        case 3:
        document.getElementById("joke3").style.display= "none";
        break;
        case 4:
        document.getElementById("joke4").style.display= "none";
        break;
        case 5:
        document.getElementById("joke5").style.display= "none";
        break;
    }
    
    
    var randNum = Math.floor((Math.random() * 5) + 1);
    if(randNum === lastNum)
    {
        randNum += 1;
        
        if(randNum > 5)
        {
            randNum = 1;
        }
    }
    
    
    switch(randNum){

        case 1:
        console.log(1);
        document.getElementById("joke1").style.display= "block";
        lastNum = 1;
        break;

        case 2:
        console.log(2);
        document.getElementById("joke2").style.display= "block";
        lastNum = 2;
        break;

        case 3:
        console.log(3);
        document.getElementById("joke3").style.display= "block";
        lastNum = 3;
        break;

        case 4:
        console.log(4);
        document.getElementById("joke4").style.display= "block";
        lastNum = 4;
        break;

        case 5:
        console.log(5);
        document.getElementById("joke5").style.display= "block";
        lastNum = 5;
        break;
    }
}