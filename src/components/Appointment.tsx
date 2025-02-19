import React from 'react'
import appointmentImage from "@/assets/images/appointment.jpeg"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Validation Schema
const AppointmentSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    secondName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Second name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    city: Yup.string()
        .required('City is required'),
    country: Yup.string()
        .required('Country is required'),
    phone: Yup.string()
        .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
        .required('Phone number is required'),
    gender: Yup.string()
        .required('Gender is required')
})

const Appointment: React.FC = () => {
    const initialValues = {
        firstName: '',
        secondName: '',
        email: '',
        city: '',
        country: 'USA',
        phone: '',
        gender: 'Male'
    }

    const handleSubmit = (values: typeof initialValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        console.log(values)
        // Handle form submission here
        setSubmitting(false)
    }

    return (
        <div className="relative w-full min-h-screen">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${appointmentImage})` }}
            />

            {/* Content */}
            <div className="relative z-10 w-full h-full flex items-center justify-center px-6 py-24">
                <div className="bg-white rounded-2xl shadow-lg py-10 px-5 sm:px-16 lg:px-32 w-full lg:w-[80%]">
                    <h1 className="text-primary-red text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-center mb-4 tracking-[-0.05em]">
                        Appointment
                    </h1>
                    <p className="text-center text-sm sm:text-xl lg:text-2xl font-medium text-dark-gray mb-5 lg:mb-8">
                        Provide us with your information and we will contact you as soon as possible.
                    </p>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={AppointmentSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-600 mb-2">First Name</label>
                                        <Field
                                            name="firstName"
                                            type="text"
                                            placeholder="Name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                        />
                                        <ErrorMessage
                                            name="firstName"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Second Name</label>
                                        <Field
                                            name="secondName"
                                            type="text"
                                            placeholder="Name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                        />
                                        <ErrorMessage
                                            name="secondName"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-600 mb-2">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="example@email.com"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-600 mb-2">City</label>
                                        <Field
                                            name="city"
                                            type="text"
                                            placeholder="New York"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                        />
                                        <ErrorMessage
                                            name="city"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Country</label>
                                        <Field
                                            as="select"
                                            name="country"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                        >
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                            {/* Add more countries as needed */}
                                        </Field>
                                        <ErrorMessage
                                            name="country"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-600 mb-2">Phone</label>
                                        <Field
                                            name="phone"
                                            type="tel"
                                            placeholder="+92 321 123 4567"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-2">Gender</label>
                                        <Field
                                            as="select"
                                            name="gender"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Field>
                                        <ErrorMessage
                                            name="gender"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary-red text-white py-4 rounded-md hover:bg-[#d64444] transition-colors disabled:bg-gray-400"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit!'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Appointment