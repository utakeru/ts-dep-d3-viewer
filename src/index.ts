import express from "express";
import { IReporterOutput, cruise } from "dependency-cruiser";
import { hoge } from "./test/hoge";

const app = express();
const port = 3001;

app.get("/", async (req, res) => {
  const ARRAY_OF_FILES_AND_DIRS_TO_CRUISE: string[] = ["src"];
  try {
    const cruiseResult: IReporterOutput = await cruise(
      ARRAY_OF_FILES_AND_DIRS_TO_CRUISE
    );
    console.dir(cruiseResult.output, { depth: 10 });
  } catch (error) {
    console.error(error);
  }

  res.send("Hello World!" + hoge());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
