import {useParams} from "react-router-dom";
import {useGetUserByIdQuery} from "../../service/usersService.js";

function EmployeeDetail() {
    const params = useParams()
    const {data, isLoading, error} = useGetUserByIdQuery(params.id);
    return (
        <div> User with  {data?.fullname}</div>
    );
}

export default EmployeeDetail;