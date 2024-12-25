import {NavLink} from "react-router-dom";
import {IoIosWarning, IoMdHome} from "react-icons/io";
import {GrNext} from "react-icons/gr";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validateCandidate} from "../../utils/validation.js";
import {IoCloudUploadOutline} from "react-icons/io5";
import {useState} from "react";
import {FaWindowClose} from "react-icons/fa";
import {useAddEmployeeMutation} from "../../service/employeeService.js";


function EmployeeAdd() {
    const {register,
        handleSubmit,
        setValue,
        getValues,
        formState:{ errors, isValid, isDirty}} =
        useForm({
        resolver: yupResolver(validateCandidate),
    });

    const [preview, setPreview] = useState("");
    // const {cities, countries} = useSelectCityAndCountry();

    const [addEmployee] = useAddEmployeeMutation();

    const handleSubmitData = (data)=>{
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
        console.log(formData);
        if(isValid){
            addEmployee(formData);
        }
    }

    const handleFileChange = (event) => {

        const file = event.target.files[0];
        console.log(file);

        setValue("avatar", file);// Đặt giá trị cho field avatar
        setPreview(URL.createObjectURL(file));

    };
    const handleClosePreview = (e)=>{
        e.stopPropagation()
        setPreview(null);
        setValue("avatar", null);
    }
    return (
        <div
            className="block items-center justify-between bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <div className="mb-1 w-full">
                <div className="mb-4">
                    <nav aria-label="Breadcrumb" className="mb-4">
                        <ol className="flex items-center">
                            <li className="group flex items-center">

                                <NavLink to={"/"}
                                         className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                         data-testid="flowbite-breadcrumb-item" href="#">
                                    <div className="flex items-center gap-x-3">
                                        <IoMdHome className="text-xl"/>
                                        <span className="dark:text-white m-2">Home</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="group flex items-center">
                                <GrNext/>
                                <NavLink to={"/candidates"}
                                         className="flex items-center text-sm m-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                         data-testid="flowbite-breadcrumb-item">
                                    Candidates
                                </NavLink>
                            </li>
                            <li className="group flex items-center">
                                <GrNext/>
                                <span
                                    className="flex items-center m-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                    data-testid="flowbite-breadcrumb-item ">
                                            Add candidate
                                        </span>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="flex h-full flex-col justify-center gap-4 p-2"><h3
                    className="mb-4 text-xl font-bold dark:text-white">General Information</h3>
                    <form onSubmit={handleSubmit(handleSubmitData)}>
                        <div className="mb-6 grid grid-cols-3 grid-rows-5 gap-3 md:grid-cols-3">
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="first-name">First name <span
                                    className="text-red-500">*</span></label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input type="text" {...register("firstname")}
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="first-name" placeholder="Bonnie..."/>

                                    </div>
                                </div>
                                <p className="text-red-500">{errors?.firstname?.message}</p>
                            </div>
                            <div>
                                <label
                                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                    htmlFor="lastname">Last name<span className="text-red-500">*</span></label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input type="text" {...register("lastname")}
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="lastname" name="lastname" placeholder="Green"/>
                                    </div>
                                </div>
                                <p className="text-red-500">{errors?.lastname?.message}</p>

                            </div>
                            <div><label
                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                htmlFor="username">Username <span className="text-red-500">*</span></label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input type="text" {...register("username")}
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="username" name="username" placeholder="Bonnie..."/>

                                    </div>
                                </div>
                                <p className="text-red-500 pt-2 pb-2">{errors?.username?.message}</p>

                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="password">Password <span className="text-red-500">*</span></label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input type="text" {...register("password")}
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="password" name="password" placeholder="More than 8 characters"
                                               required=""/>
                                        <p className="text-red-500 pt-2 pb-2">{errors?.password?.message}</p>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="department">Department <span className="text-red-500">*</span></label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <select {...register("department")}
                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                id="department" name="department">
                                            <option value="hr">HR</option>
                                            <option value="it">IT</option>
                                        </select>
                                        <p className="text-red-500 pt-2 pb-2">{errors?.department?.message}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="role">Role <span className="text-red-500">*</span></label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input type="text" {...register("role")}
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="role" name="role" required=""/>
                                        <p className="text-red-500 pt-2 pb-2">{errors?.role?.message}</p>

                                    </div>
                                </div>
                            </div>
                            <div><label
                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                htmlFor="phone">Phone</label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input type="text" {...register("phone")}
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="phone" name="phone" placeholder="Phone"
                                               required=""/>
                                        <p className="text-red-500 pt-2 pb-2">{errors?.phone?.message}</p>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="email">Email <span className="text-red-500">*</span> </label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input type="email" {...register("email")}
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="email" name="email" placeholder="example@gmail.com" required=""/>
                                        <p className="text-red-500 pt-2 pb-2">{errors?.email?.message}</p>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                       htmlFor="city">City</label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input {...register("city")}
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="city" name="city" placeholder="" required=""/>
                                        <p className="text-red-500 pt-2 pb-2">{errors?.city?.message}</p>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <label
                                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                    htmlFor="country">Country</label>
                                <div className="flex mt-2">
                                    <div className="relative w-full">
                                        <input type="text" {...register("country")}
                                               className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                               id="country" name="country" placeholder="" required=""/>
                                        <p className="text-red-500 pt-2 pb-2">{errors?.country?.message}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="row-start-1 row-end-5 col-start-3 flex-col items-center justify-center w-full ">
                                {preview ? <label htmlFor="dropzone-file" className="relative">
                                        <FaWindowClose className="text-2xl text-red-500 absolute right-0 m-2"
                                        onClick={handleClosePreview}/>
                                        <img className="h-auto max-w-full rounded-lg"
                                                                               src={preview}
                                                                               alt="image description"/></label>
                                    :
                                    <label htmlFor="dropzone-file"
                                           className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <IoCloudUploadOutline className="text-2xl"/>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF
                                                (MAX.
                                                800x400px)</p>
                                        </div>
                                    </label>}
                                <input {...register("avatar")} id="dropzone-file" type="file" accept="image/*"
                                       className="hidden" onChange={handleFileChange}/>
                                {errors?.avatar &&
                                    <p className="text-red-500 flex justify-center align-middle"><IoIosWarning
                                        className="text-2xl"/>{errors.avatar.message}</p>}
                            </div>

                        </div>

                        <button style={{marginLeft: "30.3%"}}
                                className=" text-white bg-blue-700 pl-4 pr-4 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 p-0 font-medium rounded-lg"
                                type="submit">
                            <span className="flex items-center rounded-md text-sm px-3 py-2">Create</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmployeeAdd;