import { useState } from "react"
import { register, login } from '../../actions/loginRegisterActions'
import { useLoginRegistration } from "./LoginRegistrationContext"
import { Link, useNavigate } from "react-router-dom"

const LoginRegisterItem = () => {
    const { state, dispatch } = useLoginRegistration()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        dispatch({ type: 'UPDATE_FIELD', payload: { name, value } })
    }

    const validateForm = () => {
        const newErrors = {}
        if (!state.email) newErrors.email = 'Email is required'
        if (!state.password) newErrors.password = 'Password is required'
        if (!state.isLogin) {
            if (!state.username) newErrors.username = 'Username is required'
            if (state.password !== state.passwordConfirmation) newErrors.passwordConfirmation = 'Passwords must match'
        }
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = validateForm()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        setErrors({})
        const { username, email, password, passwordConfirmation } = state
        try {
            if (state.isLogin) {
                const credentials = { email, password }
                await login(dispatch, credentials)
                navigate('/')
            } else {
                const newUser = {
                    username,
                    email,
                    password,
                }
                if (password !== passwordConfirmation) {
                    alert('Password and password confirmation must match')
                    return
                } else {
                    await register(dispatch, newUser)
                    alert('User registered successfully')
                    navigate('/login')
                }
            }
        } catch (error) {
            setErrors({ form: error.message })
        }
    }

    const toggleLogin = (e) => {
        e.preventDefault()
        dispatch({ type: 'TOGGLE_LOGIN' })
    }

    return (
        state.isLogin ? (
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={state.email}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={state.password}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>
                    </div>

                    {errors.form && <p className="text-red-500 text-xs mt-1">{errors.form}</p>}

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Login</button>
                    </div>
                    <p className="mt-8 text-xs font-light text-center text-gray-700 dark:text-gray-200">
                        Don&apos;t have an account? <Link to="/signup" onClick={toggleLogin} className="font-medium text-blue-600 dark:text-blue-400 hover:underline">Sign up</Link>
                    </p>
                </form>
            </section>
        ) : (
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Register</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={state.username}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                            <input
                                id="emailAddress"
                                name="email"
                                type="email"
                                value={state.email}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={state.password}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Confirm Password</label>
                            <input
                                id="passwordConfirmation"
                                name="passwordConfirmation"
                                type="password"
                                value={state.passwordConfirmation}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            {errors.passwordConfirmation && <p className="text-red-500 text-xs mt-1">{errors.passwordConfirmation}</p>}
                        </div>
                    </div>

                    {errors.form && <p className="text-red-500 text-xs mt-1">{errors.form}</p>}

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Sign up</button>
                    </div>
                    <p className="mt-8 text-xs font-light text-center text-gray-700 dark:text-gray-200">
                        Already have an account? <Link to="/login" onClick={toggleLogin} className="font-medium text-blue-600 dark:text-blue-400 hover:underline">Login</Link>
                    </p>
                </form>
            </section>
        )
    )
}

export default LoginRegisterItem