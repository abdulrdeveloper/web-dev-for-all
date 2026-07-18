const formatSelect = document.getElementById('format');
const toneSelect = document.getElementById('tone');
const button = document.getElementById('generate-btn');
const palette = document.getElementById('palette');

function randomRGB(tone) {
    let min = 0;
    let max = 255;

    if (tone === "white") {
        min = 180;
        max = 255;
    } else if (tone === "black") {
        min = 0;
        max = 90;
    } else {
        min = 0;
        max = 255;
    }

    const r = Math.floor(Math.random() * (max - min) + min);
    const g = Math.floor(Math.random() * (max - min) + min);
    const b = Math.floor(Math.random() * (max - min) + min);
    return { r, g, b };
}

function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function generatePalette() {

    palette.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        const { r, g, b } = randomRGB(toneSelect.value);
        let color;

        if (formatSelect.value === "hex") {
            color = rgbToHex(r, g, b);
        }
        else {
            color = `rgb(${r},${g},${b})`;
        }

        const div = document.createElement("div");
        div.classList.add("color");
        div.style.background = `rgb(${r},${g},${b})`;
        div.textContent = color;

        div.addEventListener("mouseenter", function () {
            div.title = "Click to copy " + color;
        })

        function copyColor() {
            navigator.clipboard.writeText(color);

            const span = document.createElement("span");
            span.textContent = "Copied: " + color;
            span.id = "copy-color";
            span.style.background = `rgb(${r},${g},${b})`;
            document.body.appendChild(span);

            setTimeout(() => {
                span.remove();
            }, 1000);
        }

        div.addEventListener('click', copyColor);

        palette.appendChild(div);
    }
}
button.addEventListener('click', generatePalette)

