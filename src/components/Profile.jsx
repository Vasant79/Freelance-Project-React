import { CubeIcon } from "@heroicons/react/24/outline";

export default function Profile() {
  return (
    <div className="mb-5 flex justify-around items-center">
      {/* img */}
      <CubeIcon className="h-12 w-12" />
      {/* text */}
      <div>
        INC
        <br /> Inovative Hub
      </div>

      {/* circular img */}

      <div className="h-8 w-8 hover:border-2 rounded-full bg-pink-500"></div>
    </div>
  );
}
