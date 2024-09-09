

// document.addEventListener('click', function(){
    const seatName = document.getElementsByClassName("seat");
const total =0;
for (const seat of seatName){
    seat.addEventListener("click", function(event){
        const selectedSeat=event.target;
        selectedSeat.classList.remove("bg-gray-100");
        selectedSeat.classList.add("bg-bus-main", "text-white");
        
        const selectedContainer = document.getElementById("selected-seat-container");
        const div= document.createElement("div");
        div.classList.add("flex", "justify-between", "py-4");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText=selectedSeat.innerText;
        p2.innerText = "Economoy";
        p3.innerText= "550";
        
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);
        //  next btn enable
        const enableBtn = document.getElementById("btn-next");
        enableBtn.classList.remove("btn-disabled");

        // update price
        updateTotalPrice("550");
        updateGrandTotal();
        updateSeat();
        availableSeat();

        
        

       
        console.log(selectedSeat.innerText);
        // console.log(available);
    })
    
}



