import Pocketbase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-typegen";

export const pb = new Pocketbase("http://185.216.25.92:8190/") as TypedPocketBase;