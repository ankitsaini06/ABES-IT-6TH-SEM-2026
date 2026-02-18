import fs from "fs/promises";

const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data);
        console.log("File written successfully");
    } catch (error) {
        console.log("Error writing file");
    }
};

const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        console.log("File read successfully");
        console.log(data);
    } catch (error) {
        console.log("Error reading file");
    }
};

const appendFile = async (path, data) => {
    try {
        await fs.appendFile(path, data);
        console.log("File appended successfully");
    } catch (error) {
        console.log("Error appending file");
    }
};

const main = async () => {
    console.log("Before write");
    await writeFile("example.txt", "Hello World1\n");

    console.log("Before read");
    await readFile("example.txt");

    console.log("Before append");
    await appendFile("example.txt", "Hello World2\n");

    console.log("After append");
};

main();
