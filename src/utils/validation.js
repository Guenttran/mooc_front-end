import * as yup from "yup";

export const validateCandidate = yup.object({
    firstname: yup.string().required("First name is required!"),
    lastname: yup.string().required("Last name is required!"),
    username: yup.string().required("Username is required!"),
    password: yup.string().required("Password is required!")
        .min(12, "Password must be at least 12 characters!")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
            "Password must be contain uppercase, lowercase, special character and number!"),
    email: yup.string().required("Email is required!").email("Invalid email format!"),
    phone: yup.string().required("Phone is required!").matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    avatar: yup.mixed().test("fileType", "File must be an image!", (value)=>{
        // console.log(value[0])
        return value && value?.type.startsWith("image/")
    }).test("fileSize","File size must be less than 10MB", (value) => {
        return value && value?.size <= 50 * 1024 * 1024;
    }),
})

