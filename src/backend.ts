import Pocketbase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-typegen";

export const pb = new Pocketbase("http://0.0.0.0:8190/") as TypedPocketBase;
