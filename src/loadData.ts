import { GraphQLClient } from "graphql-request";
import fs from "node:fs/promises";
import {
    InputMaybe,
    MediaListStatus,
    MediaType,
    ScoreFormat,
    getSdk,
} from "./generated/types";

const gqlClient = new GraphQLClient("https://graphql.anilist.co");

const sdk = getSdk(gqlClient);

let result;
try {
    result = await sdk.GetAnimeHistory({
        userName: "bookpanda",
        type: "ANIME" as InputMaybe<MediaType>,
        status: "COMPLETED" as InputMaybe<MediaListStatus>,
        format: "POINT_10_DECIMAL" as InputMaybe<ScoreFormat>,
    });
} catch (error) {
    console.error(error);
    process.exit(1);
}

const data: Entry[] = [];

console.log(result);
for (const entry of result.MediaListCollection?.lists ?? []) {
    for (const media of entry?.entries ?? []) {
        console.log(media);
        data.push(media as Entry);
    }
}

await fs.writeFile("data/data.json", JSON.stringify(data, null, 2));
