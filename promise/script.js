// //promises

// let myPromise = new Promise((resolve,reject) => {
//     let isCakeAvailable = false;

//     if(isCakeAvailable){
//         resolve("promise resolve");
//     }
//     else{
//         reject("promise rejected");
//     }
// });

// console.log(myPromise);



// // myPromise.then((msg)=>{
// //   console.log(msg);
// // })

// myPromise.catch((msg)=>{
//    console.log(msg);
// })

// fetch("https://fakeapi.net/products").then((res)=>{
//     console.log(res);
// });


// fetch("https://fakeapi.net/products").then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })



// async function hello(){
    //     return "hello world";
    // }
    
    // hello().then((res)=>{
        //     console.log(res);
        // })
        
        
        // async await

        async function fetchData(){
            try{
            let response=(await fetch("https://fakeapi.net/products"));
            console.log(await response.json());
            }
            catch(error)
            {
             console.log(error);
            }
        }

        fetchData();

        