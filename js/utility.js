function getConvertValue(elementId) {
    const totalSeat = document.getElementById(elementId).innerText;
    const convertTotal = parseInt(totalSeat);
    return convertTotal;

}
function updateGrandTotal(status) {
    const totalCost = getConvertValue("total-cost");
    if (status) {
        
        const couponCode = document.getElementById("coupon-code").value;
       
        if(couponCode === "NEW15"){
            const discounted = totalCost * 0.15;
            document.getElementById("grand-total").innerText =totalCost -discounted;

        }
        else if(couponCode === "Couple 20"){
            const discounted = totalCost * 0.2;
            document.getElementById("grand-total").innerText =totalCost -discounted;
        }
        else{
            alert("Please Enter valid coupon code");
        }
       
    }
    else {
       
        document.getElementById("grand-total").innerText = totalCost;
    }


}


function updateTotalPrice(value) {
    const totalCost = getConvertValue("total-cost");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
    
}

function updateSeat() {
    const seatCount = getConvertValue("seat-count");
 
    
    const sum = seatCount + 1;
    const selectedSeat = document.getElementById("seat-count");
    selectedSeat.classList.add("bg-bus-main", "text-white", "px-1", "rounded");
    selectedSeat.innerText = sum
    

}

function availableSeat() {
    const totalSeat = getConvertValue("total-seat");
    const availableSeat = totalSeat - 1;
    document.getElementById("total-seat").innerText = availableSeat;
}

// const totalSeat = document.getElementById("total-seat").innerText;
// const convertTotal = parseInt(totalSeat);
// const available = convertTotal-1;
//    const available= availableSeat("total-seat");