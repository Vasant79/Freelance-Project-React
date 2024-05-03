import TableContent from "../TableContent.jsx";
import Menu from "../Menu.jsx";

export default function LandingPage() {
  return (
    <div className="flex lg:grid lg:grid-cols-5 lg:gap-1">
      <div className=" m-2 lg:col-span-1 lg:h-full ">
        <Menu />
      </div>
      <div className="m-4 lg:col-span-4  lg:h-full ">
        <TableContent />
      </div>
    </div>
  );
}
