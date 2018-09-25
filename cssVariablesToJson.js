// Converts CSS Variables (or Custom Properties) to a JSON list

const fs = require("fs");

const outputFile = "./src/Customizer/properties.json";

const css = fs.readFileSync("./src/styles/_variables.scss").toString();
const lines = css.split("\n");

const outputObjects = [];

let currentSectionIndex = -1;
let nextSectionIndex;
lines.forEach(line => {
    line = line.trim();

    if (line.startsWith("//")) {
        currentSectionIndex++;

        // New section
        outputObjects[currentSectionIndex] = {
            sectionTitle: line.replace("//", "").trim(),
            properties: []
        };


    }

    if (line.startsWith("--")) {
        // new var
        const match = line.match(/\--(.*?):(.*?);/);

        if (match && match[1] && match[2]) {
            outputObjects[currentSectionIndex].properties.push({
                property: "--" + match[1],
                defaultValue: match[2].trim(),
                value: ""
            });
        }
    }
});

console.log("Write file to " + outputFile);
// fs.writeFileSync(outputFile, JSON.stringify(outputObjects));
fs.writeFileSync(outputFile, JSON.stringify(outputObjects, null, 4));