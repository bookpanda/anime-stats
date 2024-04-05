import { GraphQLClient } from "graphql-request";
import fs from "node:fs/promises";
import {
    InputMaybe,
    MediaListStatus,
    MediaType,
    ScoreFormat,
    getSdk,
} from "./generated/types";

export const loadAnilistData = async (username: string, status: string) => {
    const gqlClient = new GraphQLClient("https://graphql.anilist.co");

    const sdk = getSdk(gqlClient);

    let result;
    try {
        result = await sdk.GetAnimeHistory({
            userName: username,
            type: "ANIME" as InputMaybe<MediaType>,
            status: status as InputMaybe<MediaListStatus>,
            format: "POINT_10_DECIMAL" as InputMaybe<ScoreFormat>,
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

    const data: Entry[] = [];

    for (const entry of result.MediaListCollection?.lists ?? []) {
        for (const media of entry?.entries ?? []) {
            if (!media || !media.startedAt || !media.completedAt) continue;
            if (
                !media.startedAt.year ||
                !media.startedAt.month ||
                !media.startedAt.day ||
                !media.completedAt.year ||
                !media.completedAt.month ||
                !media.completedAt.day
            )
                continue;

            data.push({
                ...media,
                startedAt: {
                    ...media.startedAt,
                    date: new Date(
                        media.startedAt.year,
                        media.startedAt.month,
                        media.startedAt.day
                    ),
                },
                completedAt: {
                    ...media.completedAt,
                    date: new Date(
                        media.completedAt.year,
                        media.completedAt.month,
                        media.completedAt.day
                    ),
                },
            } as Entry);
        }
    }

    data.sort((a, b) => {
        if (a.startedAt.year !== b.startedAt.year)
            return a.startedAt.year - b.startedAt.year;
        if (a.startedAt.month !== b.startedAt.month)
            return a.startedAt.month - b.startedAt.month;
        return a.startedAt.day - b.startedAt.day;
    });

    await fs.writeFile("data/data.json", JSON.stringify(data, null, 2));

    return data;
};
