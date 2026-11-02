import * as yup from "yup"

export const registerSchema = yup.object({
    userName: yup.string().required("User name is required").min(3, "User name must be at least 3 characters"),
    fullName: yup.string().required("Full name is required").min(10, "Full name must be at least 10 characters"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required").matches(/^05\d{8}$/, "Phone number must be 10 digits"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters").matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[^A-Za-z0-9]/, "Must contain at least one special character"),
     confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm password is required"),


})
export const loginSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),


})



