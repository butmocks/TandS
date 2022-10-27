import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import {
  DbProvider,
  EnsureDbLoaded,
  IInitDbClientConfig,
  reactiveQueriesPlugin,
  migrationsPlugin
} from "@kikko-land/react";
import { absurdWebBackend } from "@kikko-land/absurd-web-backend";
import { List } from "./List";
import { createNotesTableMigration } from "./migrations/createNotesTable";

// console.log(wasm.substring(0, 100));
// const url = URL.createObjectURL(
//  new Blob([atob(wasm.replace("data:application/octet-stream;base64,", ""))], {
//    type: "application/wasm"
//  })
// );

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const config: IInitDbClientConfig = {
  dbName: "helloWorld",
  dbBackend: absurdWebBackend({
    wasmUrl: "https://kikko-doc.netlify.app/wasm/sql-wasm.wasm"
  }),
  plugins: [
    migrationsPlugin({ migrations: [createNotesTableMigration] }),
    reactiveQueriesPlugin()
  ]
};

root.render(
  <StrictMode>
    <DbProvider config={config}>
      <EnsureDbLoaded fallback={<div>Loading db...</div>}>
        <List />
      </EnsureDbLoaded>
    </DbProvider>
  </StrictMode>
);
