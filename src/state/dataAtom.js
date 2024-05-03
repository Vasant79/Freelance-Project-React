import { atom } from "recoil";
import mockData from "../../mock_data.js";

const dataAtom = atom({
  key: "mockAtom",
  default: mockData,
});

export default dataAtom;
