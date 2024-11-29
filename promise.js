function Display(){
    let promise = new Promise(function(resolve,reject){
        let x = 0;

        if(x == 0){
            resolve("Correct");
        }else{
            reject("Error");
        }
    });

    promise.then(
        function(value){
            console.log(value);
        },
        function(error){
            console.log(error);
        }
    );

}
Display();