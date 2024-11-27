import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";


const AllArtAndCraftsItem = () => {
    const users = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Crafty Palette All Art & Craft Items</title>
      </Helmet>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          AllArtAndCraftsItem
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Item Name</th>
                <th className="p-3">Rating</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {users?.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{user.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.email}</p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-600">{user.itemName}</p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-600">{user.rating}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>${user.price}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-600 dark:text-gray-50">
                      <Link to={`/cardDetails/${user._id}`}>
                        <button>view Details</button>
                      </Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArtAndCraftsItem;
