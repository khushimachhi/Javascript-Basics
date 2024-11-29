function myFunction(){
    function abc(){
        console.log("HTML");
        function blah(){
            console.log("JS");
        }
        return blah;
    }
    return abc;
}

console.log(myFunction()()())