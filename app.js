var first_value = 0;
var operator1 = "";
var check_operating = 0;

function add_input(x) {
    var old_value = document.getElementsByClassName("inp")[0].value;
    if (!Number(old_value)) {
        document.getElementsByClassName("inp")[0].value = x;
    }
    else if (check_operating == 0) {
        document.getElementsByClassName("inp")[0].value = old_value + x;
    }
    else if (check_operating == 1) {
        document.getElementsByClassName("inp")[0].value = '';
        document.getElementsByClassName("inp")[0].value = x;
        check_operating = 0;
    }
}

function add_operator(operator) {
    if (first_value == 0) {
        first_value = document.getElementsByClassName("inp")[0].value;
        document.getElementsByClassName("inp")[0].value = '';
        operator1 = operator;
        document.getElementById("calc_string").innerHTML = document.getElementById("calc_string").innerHTML = first_value + operator1;
        index = 1;
    }
    else if (operator1 != operator && check_operating == 1) {
        operator1 = operator;
        var str1 = document.getElementById("calc_string").innerHTML;
        var res = str1.substring(0, str1.length - 1);
        document.getElementById("calc_string").innerHTML = res + operator;
    }
    else {
        claculation(operator);
    }
}

function claculation(operator) {
    switch (operator1) {
        case "/":
            if (check_operating==0) {
                    document.getElementById("calc_string").innerHTML=document.getElementById("calc_string").innerHTML + document.getElementsByClassName("inp")[0].value +operator;
                    first_value=document.getElementsByClassName("inp")[0].value= Number(first_value) / Number (document.getElementsByClassName("inp")[0].value)  ;
                    document.getElementsByClassName("inp")[0].value=first_value;
                    operator1=operator;
                    check_operating=1;
            }
            break;

        case "*":
            if (check_operating==0) {
                    document.getElementById("calc_string").innerHTML=document.getElementById("calc_string").innerHTML + document.getElementsByClassName("inp")[0].value +operator;
                    first_value=document.getElementsByClassName("inp")[0].value= Number(first_value) * Number (document.getElementsByClassName("inp")[0].value)  ;
                    document.getElementsByClassName("inp")[0].value=first_value;
                    operator1=operator;
                    check_operating=1;
            }
            break;

        case '-':
            if (check_operating==0) {
                document.getElementById("calc_string").innerHTML=document.getElementById("calc_string").innerHTML + document.getElementsByClassName("inp")[0].value +operator;
                first_value=document.getElementsByClassName("inp")[0].value= Number(first_value) - Number (document.getElementsByClassName("inp")[0].value)  ;
                document.getElementsByClassName("inp")[0].value=first_value;
                operator1=operator;
                check_operating=1;
                }
            break;

        case  "+":
            if (check_operating==0) {
                    document.getElementById("calc_string").innerHTML=document.getElementById("calc_string").innerHTML + document.getElementsByClassName("inp")[0].value +operator;
                    first_value=document.getElementsByClassName("inp")[0].value= Number (document.getElementsByClassName("inp")[0].value) + Number(first_value);
                    document.getElementsByClassName("inp")[0].value=first_value;
                    operator1=operator;
                    check_operating=1;
            }
            break;
        case "=":
            document.getElementById("calc_string").innerHTML='';
            add_operator(operator);
            break;
            
        }
}

function clac_clear() {
    first_value=0;
    operator1="";
    check_operating=0;
    document.getElementsByClassName("inp")[0].value='0';
    document.getElementById("calc_string").innerHTML='';
}

function calc_inp_clear() {
    document.getElementsByClassName('inp')[0].value=0;
    check_operating=0;

}

function backspase() {
    var str1 = document.getElementsByClassName("inp")[0].value;
    if (str1 != 0) {
        var res = str1.substring(0, str1.length - 1);
        if (res != '') {
            document.getElementsByClassName("inp")[0].value = res;
        }
        else {
            document.getElementsByClassName("inp")[0].value = 0;
        }
    }
}

function neg_pos() {
         document.getElementsByClassName("inp")[0].value=Number(document.getElementsByClassName("inp")[0].value)*-1;
}



