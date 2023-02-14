import { atom } from "recoil";

export const userInfo = atom<string>({
  key: "userInfo",
  default: ""
});