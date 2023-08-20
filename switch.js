function showmessage(){
    alert('hello everyone');
// showmessage();
}
showmessage();

function calculateSum() {
    var sum = 0;
    var input;
    
    while (true) {
        input = prompt("Enter a number (or cancel to finish):");
        
        if (input === null) {
            break;
        }
        
        var num = parseFloat(input);
        
        if (isNaN(num)) {
            document.getElementById("result").textContent = "Invalid input. Sum: " + sum;
            break;
        } else {
            sum += num;
        }
    }
    
    document.getElementById("result").textContent = "Sum: " + sum;
}

function calculatenum() {
    let arg= prompt("enter a value");
    switch (arg) {
        case '0':
        case '1':
            alert('one or zero');
            break;
            case '2':
            alert('two');
            break;
            case '3':
                alert('never executes!');
                break;
                default:
                alert('an unknown value');
                    
    
    }

    document.getElementById("result1").textContent = "arg: " + arg;


}

