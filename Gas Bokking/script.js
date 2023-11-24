const PLACE = document.querySelector("#place");
const NUMBER = document.querySelector("#phone");
const NAME = document.querySelector("#cName");
const DISPLAY_TABLE = document.querySelector(".displayTable");
const C_NO_FIELD = document.querySelector("#cId");

if(!localStorage.getItem('consumers')){
    let consumerArray = [
        {
            "id": 123456,
            "name": "Random Name 1",
            "place": "Place A",
            "phone": "1234567890",
            "booking": "False"
        }
    ]
    localStorage.setItem(
        'consumers',
        JSON.stringify(consumerArray)
    )
    location.reload();
    display();
}else{
    consumerArray = JSON.parse(
        localStorage.getItem('consumers')
    )
    // console.log(consumerArray);
    display();
}

// function validates phoneNo and consumer number 

function validation(id, phone) {
    var phoneno = /^\d{10}$/;
    var cNo = /^\d{6}$/;
    if(id.match(cNo) && phone.match(phoneno)){
        console.log('matced');
        return 1;
    }
}
function validation(id) {
    var cNo = /^\d{6}$/;
    if(id.match(cNo)){
        console.log('matced');
        return 1;
    }
}



function display(){
    HTML = ``;
    // console.log(consumerArray);
    consumerArray.forEach((element, index)=> {
        if(element.id && element.booking == 'True'){
            HTML += `
                <div class="bill">
                    <div class="field">${element.id}</div>
                    <div class="field">${element.place}</div>
                    <div class="field">${element.phone}</div>
                    <div class="field">${element.name}</div>
                    <div class="field"><input type="button" value="O"" onclick="deleteBill(${index})"></div>
                </div>
            `
        }
    });
    console.log(HTML);
    DISPLAY_TABLE.innerHTML = HTML;
}



function store(id, place, phone, name){
    var valid = validation(id, phone);
    if(valid){
        bill = {
            "id" : id,
            "place" : place,
            "phone" : phone,
            "name" : name
        };
        saveToLocalStorage(bill);
    }else{
        console.log('input err');
    }
    display();
}


function saveToLocalStorage(bill) {
    if (bill) {
        console.log(bill);
        consumerArray.push(bill);
    }
    localStorage.setItem(
        'consumers',
        JSON.stringify(consumerArray)
    )
}


function deleteBill(index) {
    console.log(index);
    consumerArray.splice(index, 1);
    saveToLocalStorage();
    display();
}


C_NO_FIELD.onkeypress = (e)=>{
    if (e.key == 'Enter') {
        if (validation(C_NO_FIELD.value)) {
            checkBill(C_NO_FIELD.value);
        }
    }
}

function checkBill(cNo) {
    console.log(typeof(cNo));
    bill = consumerArray.filter(
        (bill)=> parseInt(bill.id) == cNo
    )
    bill = bill[0]
    if (bill) {
        NAME.value = bill.name;
        PLACE.value = bill.place;
        NUMBER.value = bill.phone;
        //console.log(bill);
    }
}




