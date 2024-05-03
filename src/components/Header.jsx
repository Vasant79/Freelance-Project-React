import {
  MagnifyingGlassIcon,
  CogIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

import { useRecoilState } from "recoil";
import searchAtom from "../state/searchAtom";

export default function Header() {
  const [filter, setFilter] = useRecoilState(searchAtom);

  function handleChange(event) {
    // state of what user want to filter
    setFilter(event.target.value);
  }

  return (
    <div className="flex justify-between shadown-lg broder-gray-200 overflow-auto rounded-md">
      <h4 className="text-lg mt-5 mx-7 my-2 font-medium">Product</h4>

      <div className="mx-5  my-5 flex">
        <div className="flex">
          {/* Search hero icon */}
          <MagnifyingGlassIcon className="mt-1.5 h-5 w-5" />
          <input
            className="mr-4 rounded-md p-1"
            placeholder="Search for.."
            onChange={handleChange}
          />
        </div>
        {/* Server hero icon */}
        <ServerIcon className=" mr-2 h-6 w-6" />

        {/* Cog hero icon */}
        <CogIcon className="h-6 w-6" />
      </div>
    </div>
  );
}
