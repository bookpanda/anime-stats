import fs from "fs";

export const modifyFile = (
  filePath: string,
  outputFilePath: string,
  modifications: { [selector: string]: string },
  callback: (err: Error | null) => void
) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    for (const selector in modifications) {
      const regex = new RegExp(selector, "g");
      const replacement = modifications[selector];

      if (regex.test(data)) {
        data = data.replace(regex, replacement);
      } else {
        console.log(`Regex pattern "${selector}" not found.`);
      }
    }

    fs.writeFile(outputFilePath, data, (writeErr) => {
      if (writeErr) {
        callback(writeErr);
        return;
      }
      callback(null);
    });
  });
};
