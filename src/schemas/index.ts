/* eslint-disable no-useless-escape */
import * as yup from "yup";
export const authLoginSchemas = yup.object({
  studentId: yup
    .string()
    .required("Required student ID")
    .matches(/^[A-Za-z0-9]+$/, "Cannot contain special characters."),
  password: yup
    .string()
    .required("Required password")
    .min(6, "Password must be at least 6 characters"),
});

export const authForgotPasswordSchemas = yup.object({
  email: yup.string().email("invalid email").required("Required email"),
});

export const authRegisterSchemas = yup.object({
  email: yup.string().email("invalid email").required("Required email"),
  studentId: yup
    .string()
    .required("Required student ID")
    .matches(/^[A-Za-z0-9]+$/, "Cannot contain special characters."),
  password: yup
    .string()
    .required("Required password")
    .min(6, "Password must be at least 6 characters"),
  userName: yup.string().required("Required user name"),
});

export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm your password"),
});

export const licenseSchema = yup.object({
  licenseInput: yup
    .string()
    .required("Vui lòng nhập biển số xe")
    .matches(
      /^[0-9]{2}[A-Z]{1,2}[0-9]?(?:[\.-][0-9]{2,3}){1,2}$/,
      "Biển số xe không hợp lệ. Ví dụ: 29S1.371-94"
    ),
});
