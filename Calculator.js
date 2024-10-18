function key(num) {
    if(document.getElementById('textscreen').value!="0")
    {
        document.getElementById('textscreen').value+=num;
    }
    else
    {
        document.getElementById('textscreen').value=num;
    }   
}

function reset() {
    document.getElementById('textscreen').value="0";
}

function del() {
    var previous=document.getElementById('textscreen').value;
    var del=previous.slice(0,-1);
    document.getElementById('textscreen').value=del;
}

var num1;
var num2;
var op;

function add() {
        num1=document.getElementById('textscreen').value;
        document.getElementById('textscreen').value=0;
        op=1;
    }
    
    function sub() {
        num1=document.getElementById('textscreen').value;
        document.getElementById('textscreen').value=0;
        op=2;
    }
    
    function multi() {
        num1=document.getElementById('textscreen').value;
        document.getElementById('textscreen').value=0;
        op=3;
    }
    
    function div() {
        num1=document.getElementById('textscreen').value;
        document.getElementById('textscreen').value=0;
        op=4;
    }

    function per() {
        num1=document.getElementById('textscreen').value;
        document.getElementById('textscreen').value=0;
        op=5;
    }
    
    function eq() {
        num2=document.getElementById('textscreen').value;
        if (op==1) {
            document.getElementById('textscreen').value=parseFloat(num1)+parseFloat(num2);
        }
        else if (op==2) {
            document.getElementById('textscreen').value=parseFloat(num1)-parseFloat(num2);
        }
        else if (op==3) {
            document.getElementById('textscreen').value=parseFloat(num1)*parseFloat(num2);
        }
        else if (op==4) {
            document.getElementById('textscreen').value=parseFloat(num1)/parseFloat(num2);
        } 
        else if (op==5) {
            document.getElementById('textscreen').value=parseFloat(num1)/100;
        }
        else {
            document.getElementById('textscreen').value="invalid";
        }
    }

