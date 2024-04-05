import fs from "fs";
import { parseString } from "xml2js";

function loadAndModifySVG(
    filePath: string,
    replacements: { [key: string]: string },
    callback: (err: Error | null, result?: string) => void
) {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            callback(err);
            return;
        }

        parseString(data, (parseErr, result) => {
            if (parseErr) {
                callback(parseErr);
                return;
            }

            for (const [key, value] of Object.entries(replacements)) {
                const regex = new RegExp(key, "g");
                result.svg._ = result.svg._.replace(regex, value);
            }

            const modifiedSVG = new XMLSerializer().serializeToString(
                new DOMParser().parseFromString(result.svg._, "text/xml")
            );

            callback(null, modifiedSVG);
        });
    });
}
