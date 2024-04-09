const optionSecList = document.querySelectorAll(".option");
const optnRevList = document.querySelectorAll(".option-overView");
const optnDetList = document.querySelectorAll(".option-details");

// Check if any elements are found
if (optnRevList.length > 0 && optnDetList.length > 0) {
    // Iterate over each element with class "option-overView"
    optnRevList.forEach((element, index) => {
        // Add event listener to each "option-overView" element
        element.addEventListener("click", () => {
            // Check if the clicked option is already open
            const isOpen = optionSecList[index].classList.contains("option-layout");

            // Remove classes from all options
            optionSecList.forEach(option => {
                option.classList.remove("option-layout");
            });
            optnDetList.forEach(optionDet => {
                optionDet.classList.remove("show");
            });

            // Toggle the open/close state of the clicked option
            if (!isOpen) {
                // Open the clicked option
                optionSecList[index].classList.add("option-layout");
                optnDetList[index].classList.add("show");
            }
        });
    });
}



