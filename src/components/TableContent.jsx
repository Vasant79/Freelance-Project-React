import { useState } from "react";
import ButtonBar from "./ButtonBar";
import Header from "./Header";
import Table from "./Table";
import { useRecoilValue } from "recoil";
import dataAtom from "../state/dataAtom";
import searchAtom from "../state/searchAtom";
import BottomButtonBar from "./BottomButtonBar";

export default function TableContent() {
  const fullData = useRecoilValue(dataAtom);

  //getting data from atom full data & incase user wants filter
  const [data, setData] = useState(fullData);
  const filterValue = useRecoilValue(searchAtom);

  return (
    <div className="gird grid-col-10 gap-2  ">
      <div className="col-span-1">
        <Header />
      </div>
      <div className="col-span-1">
        <ButtonBar />
      </div>
      <div className="col-span-4">
        <Table data={data} filterValue={filterValue} />
      </div>
      <div className="mt-16 h-full w-full flex justify-center">
        <BottomButtonBar />
      </div>
    </div>
  );
}
