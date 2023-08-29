const heading=["FirstName","Lastname","Address","Pincode","gender","food","Country","state"]
const maindiv= document.createElement('div')
const table=document.createElement('table')
table.setAttribute("class","table")
const tablehead=document.createElement('th')
const tablebody = document.createElement('tbody')
const tdata = document.createElement('td')


function headingsarrange(data=[]){
    const headingdata =[];
    for(i=0; i<data.length; i++){
        const newtd= document.createElement('td')
        newtd.innerText= heading[i]
        headingdata.push(newtd)
    }
     return headingdata;
} 
const orders = {};
function newrowcreate(data={}){
     const trow = document.createElement('tr')
     const values= Object.values(data)
     for(let i=0; i<values.length; i++){
        let tdatacell = document.createElement('td')
        tdatacell.innerText = values[i]
        trow.append( tdatacell)
     }
       return trow
}
tablebody.append(newrowcreate({
   
}))

 function newrowscreate(data=[]){
         const row = [];
         if (data.length > 0) {
           for (let i = 0; i < data.length; i++) {
             const item = newrowcreate(data[i]);
             row.push(item);
           }
         }
         return row;
         }

 function handleinput(e){
     if(e.type === "text"){
     orders[e.id] = e.value
     }else if(e.type ==="select"){
      orders.value = e.value
     }else if(e.type==="radio"){
        orders[e.name] = e.id
     }else if(e.type==="checkbox"){
        orders[e.name] = (e.id)
     }else {
        var x = document.getElementById('country').value
       orders[e.id] = e.value
     }
      console.log(orders)
      
 }
const dataarray=[];
function inputsubmit(){
    if(Object.values(orders).length > 2){
            dataarray.push(orders)
         } else{
             alert("Invalid form");
         }   
         tableadded(dataarray);
}

function tableadded(data=[]){
    tablebody.innerHTML=""
    tablebody.append(...newrowscreate(dataarray));
    document.body.appendChild(table)

    //after submit the form
    const inputs = document.querySelectorAll('#first-name, #last-name, #address, #pincode, #country, #State');

    inputs.forEach(input => {
      input.value = '';
    });
    
    
document.getElementById("male").checked = false;
document.getElementById("Female").checked = false;
document.getElementById("pizza").checked = false;
document.getElementById("Burger").checked = false;
document.getElementById("Briyani").checked = false;
document.getElementById("Grillchicken").checked = false;
document.getElementById("Fried Rice").checked = false;
}

tableadded(dataarray);
tablehead.append(...headingsarrange(heading))
tablehead.append(tablebody)

table.append(tablehead)