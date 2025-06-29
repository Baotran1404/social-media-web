import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserAction, getProfileAction } from '../../Redux/Auth/auth.action';



// ✅ Khai báo giá trị khởi tạo form
const initialValues = {
  email: '',
  password: ''
};

// ✅ Schema xác thực bằng Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

const Login = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const token = useSelector((state) => state.auth.jwt);
const user = useSelector((state) => state.auth.user);

useEffect(() => {
  if (token && !user) {
    dispatch(getProfileAction(token));
  }
  if (user) {
    navigate("/");
  }
}, [token, user, dispatch, navigate]);

  // ✅ Submit form
  const handleSubmit = (values) => {
    console.log("handle submit", values);
    dispatch(loginUserAction(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} // Bạn có thể tắt tạm dòng này nếu cần
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>

            <Button
              sx={{ padding: ".8rem 0rem" }}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </div>
        </Form>
      </Formik>

      <div className="flex gap-2 items-center justify-center pt-5">
        <p>If you don't have account?</p>
        <Button onClick={() => navigate("/register")}>Register</Button>
      </div>
    </>
  );
};

export default Login;
