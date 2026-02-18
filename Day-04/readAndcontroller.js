import { readFile, writeFile } from "./readAndwritefile.js";

const data = {
  id: 13,
  first_name: "nitin kumar",
  last_name: "Edards",
  email: "bedards0@amafihjhfs.com",
  gender: "Male"
};

const writeFileData = async (path, data) => {
    try {
        let fileData = await readFile(path);

        let updatedData;

        if (!fileData || fileData.error) {
            updatedData = [{ id: 1, ...data }];
        } else {
            updatedData = [...fileData, { id: fileData.length + 1, ...data }];
        }

        await writeFile(path, updatedData);

        console.log("File written successfully");

    } catch (error) {
        console.log("Error writing file:", error);
    }
};

const readFileData = async (path) => {
    try {
        const filedata = await readFile(path);
        console.log("File data:", filedata);
    } catch (error) {
        console.log("Error reading file:", error);
    }
};

await writeFileData("./student.json", data);
await readFileData("./student.json");
