// Array to store each diya (bulb) image element
let imgEl1 = document.getElementById('bulb1');
let imgEl2 = document.getElementById('bulb2');
let imgEl3 = document.getElementById('bulb3');
let imgEl4 = document.getElementById('bulb4');

let list = [imgEl1, imgEl2, imgEl3, imgEl4];

let litimg = "https://res.cloudinary.com/dpvrtbqxt/image/upload/v1730295734/360_F_565930741_OIrUw7YQ05weSqdTQ4RmgkdieCUruF8A_1_ispj8e-removebg-preview_u6gume.png";
let unlitimg = "https://res.cloudinary.com/dpvrtbqxt/image/upload/v1730295961/image_2_obxncf-removebg-preview_ovnniz.png";
let updatedWish="May your Diwali sparkle with joy, laughter, and endless blessings! 🪔🌟";
let Wish="HAPPY DIWALI!";


// Select the heading element to dynamically update the text
let headingEl = document.getElementById('heading');

// Track the state for the "Light Up All" button
let diaStatus = false;


// Function to toggle each bulb's state and update the heading text
function toggleBulb(bulb) {

    // Toggle the bulb's source image between lit and unlit
    if (bulb.target.src === unlitimg) {
        bulb.target.src = litimg;
        diaStatus = true;
    } else {
        bulb.target.src = unlitimg;
        diaStatus = false;
    }
    // Change the heading text based on the toggle action
    if (diaStatus === true) {
        headingEl.textContent = updatedWish;
        headingEl.style.fontSize="28px";
    } else {
        headingEl.textContent = Wish;
        headingEl.style.fontSize="50px";
    }
}

// Attach click event listeners to each bulb to allow individual toggling
imgEl1.addEventListener('click', toggleBulb);
imgEl2.addEventListener('click', toggleBulb);
imgEl3.addEventListener('click', toggleBulb);
imgEl4.addEventListener('click', toggleBulb);

// Add event listener to "Light Up All" button to toggle all bulbs at once
document.getElementById('lightUpAllBtn').addEventListener('click', () => {
    // Toggle the isAllLit state
    for (let image of list) {
        console.log(image);
        if (image.src === unlitimg) {
            image.src = litimg;
            headingEl.textContent = updatedWish;
            headingEl.style.fontSize="28px";
        } else {
            image.src = unlitimg;
            headingEl.textContent = Wish;
            headingEl.style.fontSize="50px";
        }
    }
    // Set all bulbs to either lit or unlit based on the current state of isAllLit

    // Update the heading text based on the all-lit state

});