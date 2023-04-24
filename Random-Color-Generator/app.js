'use strict';
const mainButton = document.querySelector('.change-bg');
const copyButton = document.querySelector('.copy-to-clipboard')
const currentColor = document.querySelector('.current-color');
const heading = document.querySelector('h1');
const body = document.body;

// Function to generate random color
const randomColorGenerator = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const black = Math.floor(Math.random() * 256);
  const randomColor = ` RGB(${red},${green},${black})`;
  return randomColor;
};

// Adding click listener to change background as per color value
mainButton.addEventListener("click", () => {
  const randomBgColor = randomColorGenerator();
  body.style.backgroundColor = randomBgColor;
  currentColor.textContent = randomBgColor;
});

// Adding a click listener on copy Button
copyButton.addEventListener("click", () => {
  let colorValue = currentColor.textContent;
  copyToClipboard(colorValue);
});

// copyToClipboard Fxn to achieve copy to clipboard functionality
async function copyToClipboard(colorValue) {
    try {
        await navigator.clipboard.writeText(colorValue);
        alert(`Copied ${colorValue} Successfully!`)
    } catch (err) {
        alert(`Copy failed` + err)
    }
};
