import Button from "./Button";
import {
  ArrowsPointingInIcon,
  AdjustmentsVerticalIcon,
  AdjustmentsHorizontalIcon,
  VideoCameraIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function ButtonBar() {
  return (
    <div className=" flex justify-between  overflow-auto ">
      <div className="px-1 flex justify-between items-center">
        <Button>
          <ArrowsPointingInIcon className="mx-1 h-6 w-5 " /> All Brands
          <ChevronDownIcon className="mx-1 h-6 w-5 " />
        </Button>
        <Button>
          Desk
          <ChevronDownIcon className="mx-1 h-6 w-5" />
        </Button>
        <Button>
          Tags
          <ChevronDownIcon className="mx-1 h-6 w-5" />
        </Button>
        <Button>
          <AdjustmentsVerticalIcon className="mx-1 h-6 w-5" />
          Sort
        </Button>
        <Button>
          <AdjustmentsHorizontalIcon className="mx-1 h-6 w-5" />
          Filter
        </Button>
      </div>
      <div className="mr-3 px-2  flex justify-between items-center">
        <Button>
          <VideoCameraIcon className="mx-1 h-6 w-5" />
          Meeting
        </Button>
        <Button>
          <ArrowDownOnSquareIcon className="mx-1 h-6 w-5" />
          Import/Export
        </Button>
      </div>
    </div>
  );
}
