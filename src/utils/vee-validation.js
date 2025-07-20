import * as yup from 'yup';

export const employeeSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Please enter a valid email address').required('Email is required'),
  phone: yup.string()
    .required('Phone number is required')
    .matches(/^\+90\d{10}$/, 'Phone number must be in format: +905451111111'),
  birthDate: yup.date().required('Birth date is required'),
  employmentDate: yup.date().required('Employment date is required'),
  department: yup.string().oneOf(['Analytics', 'Tech'], 'Please select a valid department').required('Department is required'),
  position: yup.string().oneOf(['Junior', 'Medior', 'Senior'], 'Please select a valid position').required('Position is required')
});

export function validateEmployeeForm(formData) {
  try {
    employeeSchema.validateSync(formData, { abortEarly: false });
    return {};
  } catch (error) {
    const errors = {};
    if (error.inner) {
      error.inner.forEach(err => {
        errors[err.path] = err.message;
      });
    }
    return errors;
  }
} 