
    const seats = document.getElementsByClassName("seat");
    for (const seat of seats) {
        sum = 0;
        seat.addEventListener("click", function (event){
        const seatName = event.target.innerText;

        seat.classList.add("bg-[#1DD100]", "text-white");

        const tableBody = document.getElementById("tableBody");
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        td1.innerText = seatName;
        td2.innerText = "Economy";
        td3.innerText = "550";

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tableBody.appendChild(tr);
        event.target.setAttribute("disabled", true);

        const amount = parseInt(td3.innerText);
        let total_Cost = totalCost(amount);
        grandTotal();
        stopSelectingSeat()
        incrementSeat();
        decrementSeat();

        });
    }


function totalCost(amount) {
    sum = sum + amount;
    totalPrice.innerText = sum;
    const total_Cost = totalPrice.innerText;
    return total_Cost;
}

function grandTotal(status) {
    if (status) {
        const cuponCode = document.getElementById("cuponCode").value;
        if(cuponCode == "NEW15") {
            const totalPrice = document.getElementById("totalPrice");
            let total = parseInt(totalPrice.innerText);
            const discount = total * 0.15;
            console.log(discount);

            const discountDiv = document.getElementById("discountDiv");
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            div1.innerText = "Discount";
            div2.innerText = discount;
            discountDiv.appendChild(div1);
            discountDiv.appendChild(div2);
            discountDiv.classList.add("text-secondary", "font-bold", "text-lg");

            const grand = total - discount;
            const grandTotal = document.getElementById("grandTotal");
            grandTotal.innerText = grand;

            const cuponParent = document.getElementById("cuponParent");
            cuponParent.classList.add("hidden");

            const nextButton = document.getElementById("nextButton");
            nextButton.classList.remove("btn-disabled");

        }

        else if (cuponCode == "Couple 20") {
            const totalPrice = document.getElementById("totalPrice");
            let total = parseInt(totalPrice.innerText);
            const discount = total * 0.20;
            console.log(discount);

            const discountDiv = document.getElementById("discountDiv");
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            div1.innerText = "Discount";
            div2.innerText = discount;
            discountDiv.appendChild(div1);
            discountDiv.appendChild(div2);
            discountDiv.classList.add("text-secondary", "font-bold", "text-lg");

            const grand = total - discount;
            const grandTotal = document.getElementById("grandTotal");
            grandTotal.innerText = grand;

            const cuponParent = document.getElementById("cuponParent");
            cuponParent.classList.add("hidden");

            const nextButton = document.getElementById("nextButton");
            nextButton.classList.remove("btn-disabled");
        }

        else{
            alert("Please enter a valid cupon code");
        }
    }
    else {
        const totalPrice = document.getElementById("totalPrice");
        const grandTotal = document.getElementById("grandTotal");
        grandTotal.innerText = totalPrice.innerText;

        const nextButton = document.getElementById("nextButton");
        nextButton.classList.remove("btn-disabled");
    }
}

function stopSelectingSeat(){
    const firstCount = document.getElementById('totalSeat');
    let firstSeatCount = parseInt(firstCount.innerText);
    const firstSeat = document.getElementById('availableSeat');
    let firstAvailabeSeat = parseInt(firstSeat.innerText);
    if(firstSeatCount + 1 >= 4) {
        alert("Your seat limit is 4");
        const seatButtons = document.getElementsByClassName('seat');
        for (const button of seatButtons) {
            button.setAttribute("disabled", true);
        }
        return;
    }
    if(firstAvailabeSeat - 1 < 0)
    {
        alert("No seat available");
        return;
    }
}

function incrementSeat() {
    const totalSeat = document.getElementById('totalSeat');
    let totalSeatCount = parseInt(totalSeat.innerText);
    totalSeatCount = totalSeatCount + 1;
    totalSeat.innerText = totalSeatCount;
    if(totalSeatCount == 4){
        const discountApply = document.getElementById('discountApply');
        discountApply.classList.remove('btn-disabled');
    }
}

function decrementSeat() {
    const availableSeat = document.getElementById('availableSeat');
    let availableSeatCount = parseInt(availableSeat.innerText);
    availableSeatCount = availableSeatCount - 1;
    availableSeat.innerText = availableSeatCount;   
}


