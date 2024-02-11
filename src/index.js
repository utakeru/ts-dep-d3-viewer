var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { cruise } from "dependency-cruiser";
import { hoge } from "./test/hoge";
const app = express();
const port = 3001;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ARRAY_OF_FILES_AND_DIRS_TO_CRUISE = ["src"];
    try {
        const cruiseResult = yield cruise(ARRAY_OF_FILES_AND_DIRS_TO_CRUISE);
        console.dir(cruiseResult.output, { depth: 10 });
    }
    catch (error) {
        console.error(error);
    }
    res.send("Hello World!" + hoge());
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
