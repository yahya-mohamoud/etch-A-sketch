const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
let size = 16;

const gridCell = (size) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let j = 0; j < size; j++) {
            const wdAndht = 660 / size;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${wdAndht}px`;
            gridBox.style.height = `${wdAndht}px`;
            gridBox.addEventListener("mouseover", () => {
                // gridBox.style.backgroundColor = 'black';
                gridBox.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            });
            gridRow.appendChild(gridBox);
        }
        wrapper.appendChild(gridRow);
    }
    container.appendChild(wrapper);
};

btn.addEventListener("click", () => {
    let userSize = Number(prompt("Enter any number between 1-100"));

    while (userSize > 100 || userSize < 1 || isNaN(userSize)) {
        userSize = Number(prompt("Enter a number between 1 and 100"));
    }

    const wrapper = document.querySelector(".wrapper");
    if (wrapper) {
        wrapper.remove();
    }
    
    gridCell(userSize);
});

colorBtn.addEventListener("click", () => {
    const colorWheel = document.querySelector("#colorWheel")
    colorWheel
})

const colorPicker = () =>{
    const colorBtn = document.getElementsByClassName("colorBtn")
    const colorWheel = document.querySelector(".colorWheel")

    colorWheel.addEventListener("click", () =>{
        colorWheel.click();
    })

}


// Initial grid creation
gridCell(size);
