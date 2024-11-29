// all substrings
function myArray(){
    let text ="vidyavardhini";
    let array = text.split("");
    let result = "";

    
        for (let i = 0; i < array.length; i++) {
            let current = "";
            for (let j = i; j < array.length; j++) {
                current += array[j];
                result += current + "\n";
            }
        }
        return result;
}

let subString = myArray();
console.log(subString);




/*  let text = "adsa";
    const myArray = text.split("");
    document.getElementById("demo").innerHTML = myArray.join(" , ");
    </script>   */