function TableOffer({ data }) {
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Candidate</th>
                    <th scope="col" className="px-6 py-3">Position</th>
                    <th scope="col" className="px-6 py-3">Result</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((candidate, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">{candidate.name}</td>
                        <td className="px-6 py-4">{candidate.position}</td>
                        <td className="px-6 py-4">{candidate.result}</td>
                        <td className="px-6 py-4">
                            <button className="text-blue-600 hover:underline dark:text-blue-500">View Offer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableOffer;
