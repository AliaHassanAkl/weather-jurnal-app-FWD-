/* Global Variables */
const baseURL ='https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey ='6a2009b6b3356e4c0d7d45bdd6884581';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+ '.'+ d.getDate()+'.'+ d.getFullYear();
//add event listener
const btn = document.getElementById('generate');
btn.addEventListener('click',preformAction );
function preformAction(){
    const clientZip = document.getElementById('zip').value;
    const clientfeeling = document.getElementById('feelings').value;
    getData(baseURL,clientZip,apiKey)
        .then((info)=>{
            console.log(info);
            postData('/new',{date:d, temp:info.list[0].main.temp, content:clientfeeling});
            updateUI();
        } )
};
// get data api from weathermap
const getData = async(baseURL,zip,key) => {
    //fetch the data method code
    const req = await fetch(baseURL+zip+key)
    try {
        //convert json data and return result 
        const response= await req.json();
        return response; 
    }catch (erorr){
        //find the erorr
        console.log("erorr",erorr)
    }
}
const postData = async(url='', info ={})=> {
    console.log(info);
    // await fetch method
     const response = await fetch (url,{
        method : "post",
        Credentials: "same-origin",
        Headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(info )
     });
     try{
        const newDate = await response.json();
        return newDate;
     }catch(erorr){
        console.log("error",error)
     }
}
// get  data from server and update ui
const updateUI= async()=>{
    const req = await fetch('/main');
    //await function 
    await fetch ('/')
    try {
        //convert json data 
        const finalData = await req.json();
        document.getElementById('date').innerHTML= `Date: ${newData.date}`;
        document.getElementById('temp').innerHTML = `Temperature : ${newData.temp}`;
        document.getElementById('content').innerHTML = ` Client Feeling : ${newData.content}`;

    }catch(erorr){
        console.log("erorr",erorr);
    }
}
