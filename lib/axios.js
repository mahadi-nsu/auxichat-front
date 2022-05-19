import axi from "axios";

import { baseURL } from "../config";

export const axios = axi.create({
  withCredentials: true,
  credentials: "include",
  baseURL: `http://${baseURL}`,
});
