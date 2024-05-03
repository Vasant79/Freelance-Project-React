import Button from "./Button";
import {
  CursorArrowRaysIcon,
  ArchiveBoxIcon,
  TrashIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function BottomButtonBar() {
  return (
    <div className=" max-w-screen-sm flex justify-around  rounded-md shadow">
      <Button>
        <CursorArrowRaysIcon className="h-6 w-6" />
        Selected
      </Button>

      <Button>
        <ArchiveBoxIcon className="h-6 w-6" />
        Archive
      </Button>

      <Button>
        <TrashIcon className="h-6 w-6" />
        Delete
      </Button>

      <Button>
        More
        <ChevronDownIcon className="h-6 w-6" />
      </Button>
    </div>
  );
}
