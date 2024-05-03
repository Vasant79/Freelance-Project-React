export default function Table({ data, filterValue = null }) {
  return (
    <div className=" overflow-auto rounded-lg shadow">
      <table className="w-full   border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="w-24  border border-gray-200 p-1 ">Brand</th>
            <th className="w-26  border border-gray-200 p-1">Description</th>
            <th className="w-24  border border-gray-200 p-1">Members</th>
            <th className="w-24  border border-gray-200 p-1">Categories</th>
            <th className="w-24  border border-gray-200 p-1">Tags</th>
            <th className="w-24  border border-gray-200 p-1">Next Meetings</th>
          </tr>
        </thead>
        <tbody>
          {/* if filter value exist gives filtered result else all data shown */}
          {filterValue
            ? data
                .filter((eachData) =>
                  eachData.brands
                    .toLowerCase()
                    .includes(filterValue.toLowerCase())
                )
                .map((eachData) => (
                  <tr
                    key={eachData.brand}
                    className="border border-gray-200 p-2"
                  >
                    <td className="border border-gray-200 p-2">
                      <div className=" flex  w-full items-center">
                        <input type="checkbox" className="m-2" />
                        {eachData.brands}
                      </div>
                    </td>
                    <td className="border border-gray-200 p-2 ">
                      <div className=" flex m-1 w-48 truncate overflow-x-auto">
                        {eachData.description}
                      </div>
                    </td>
                    <td className="border border-gray-200 p-2">
                      {eachData.members}
                    </td>
                    <td className="border border-gray-200 p-2">
                      {eachData.categories}
                    </td>
                    <td className="border border-gray-200 p-2">
                      {eachData.tags}
                    </td>
                    <td className="border border-gray-200 p-2">
                      {eachData.nextMeeting}
                    </td>
                  </tr>
                ))
            : data.map((eachData) => (
                <tr key={eachData.brand} className="border border-gray-200 p-2">
                  <td className="border border-gray-200 p-2">
                    <div className=" flex  w-full items-center">
                      <input type="checkbox" className="m-2" />{" "}
                      {eachData.brandIcons ? eachData.brandIcons : null}
                      {eachData.brands}
                    </div>
                  </td>
                  <td className="w-48 border border-gray-200 p-2 ">
                    <p className="truncate overflow-x-auto">
                      {eachData.description}
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2">
                    {eachData.members}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {eachData.categories}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {eachData.tags}
                  </td>
                  <td className="border border-gray-200 p-2">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50s">
                      {eachData.nextMeeting}
                    </span>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
