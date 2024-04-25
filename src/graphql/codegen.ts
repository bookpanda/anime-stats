import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql.anilist.co",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
    "src/generated/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
