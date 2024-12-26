import { FaEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Spin from "./Spin.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import { useState } from "react";

function TableSchedule({ data, isLoading, error }) {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/schedule/${id}`);
    };

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow">
                        <div
                            data-testid="table-element"
                            className="relative overflow-x-auto shadow-md sm:rounded-lg"
                        >
                            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="px-6 py-3">Title</th>
                                    <th className="px-6 py-3">Candidate Name</th>
                                    <th className="px-6 py-3">Interviewer</th>
                                    <th className="px-6 py-3">Schedule</th>
                                    <th className="px-6 py-3">Result</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Job</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                                </thead>

                                {data && (
                                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                    {data.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            data-testid="table-row-element"
                                            className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <td className="px-6 py-4">{item.title}</td>
                                            <td className="px-6 py-4">{item.candidateName}</td>
                                            <td className="px-6 py-4">{item.interviewer}</td>
                                            <td className="px-6 py-4">{item.schedule}</td>
                                            <td className="px-6 py-4">{item.result}</td>
                                            <td className="px-6 py-4">{item.status}</td>
                                            <td className="px-6 py-4">{item.job}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-x-3">
                                                    <button
                                                        className="text-blue-600 hover:text-blue-900"
                                                        title="View"
                                                    >
                                                        <FaEye />
                                                    </button>
                                                    <button
                                                        className="text-green-600 hover:text-green-900"
                                                        title="Edit"
                                                        onClick={() => handleEdit(item.id)}
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        className="text-red-600 hover:text-red-900"
                                                        title="Delete"
                                                    >
                                                        <FaRegTrashAlt />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                )}
                            </table>

                            {isLoading && <Spin />}
                            {error && (
                                <p className="text-center font-bold text-red-500">
                                    Cannot find any data!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableSchedule;
