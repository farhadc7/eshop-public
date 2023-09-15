import axios from "axios";
import { data } from "../../db";
const CategoryFilter = () => {
  // const categoryList = await fecthData();
  return (
    <div className="grid space-y-2">
      {data.category.map((item) => (
        <label
          key={item.id}
          htmlFor="hs-vertical-checkbox-in-form"
          className="max-w-xs flex p-3 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        >
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-vertical-checkbox-in-form"
          />
          <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">
            {item.title}
          </span>
        </label>
      ))}
    </div>
  );
};
export default CategoryFilter;

// async function fecthData() {
//   const { data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/category`
//   );
//   return data;
// }
