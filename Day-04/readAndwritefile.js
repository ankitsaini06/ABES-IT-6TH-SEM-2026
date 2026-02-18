import fs from "fs/promises";

export const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return { error: "Unable to read file" };
    }
};

export const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, JSON.stringify(data, null, 2), "utf-8");
        return "File written successfully";
    } catch (error) {
        return { error: "Unable to write file" };
    }
};
