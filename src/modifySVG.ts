import fs from "fs";

export const modifySVG = (
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
        console.log(data);
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

        // parseString(data, (parseErr, result) => {
        //     if (parseErr) {
        //         callback(parseErr);
        //         return;
        //     }
        //     console.log(result.svg.g[0].g[0].foreignObject[0].div[0].div);

        //     // Apply modifications
        //     for (const selector in modifications) {
        //         if (result.svg[selector]) {
        //             console.log(result.svg[selector][0]);
        //             result.svg[selector][0] = modifications[selector];
        //         } else {
        //             console.error(`Selector ${selector} not found in SVG.`);
        //         }
        //     }

        //     const builder = new xml2js.Builder();
        //     const modifiedSVG = builder.buildObject(result);

        //     fs.writeFile(outputFilePath, modifiedSVG, (writeErr) => {
        //         if (writeErr) {
        //             callback(writeErr);
        //             return;
        //         }
        //         callback(null);
        //     });
        // });
    });
};
