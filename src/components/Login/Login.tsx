import { Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
        // Handle form submission logic here
    }

    return (
        <div className="flex w-full bg-gray text-white rounded-lg shadow-lg overflow-hidden">
            <div
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}
            ></div>
            <div className="space-y-[20px] flex-col flex justify-center  w-full p-8 lg:w-1/2">
                <h2 className="text-start text-2xl font-semibold text-gray-700">
                    Login to your account
                </h2>
                <p className="text-start text-xl text-gray-600">
                    Unify identity governance and privileged access with the converged
                    Enterprise Identity Cloud.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'Email is required' })}
                            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <input
                                type="checkbox"
                                id="remember"
                                className="mr-2 leading-tight"
                            />
                            <label htmlFor="remember" className="text-sm">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-gray-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="rounded-default w-full px-4 py-2 mt-4 text-white hover:bg-red"
                    >
                        Sign In
                    </button>
                </form>
                <div className="text-center">
                    <p className="text-sm">Or</p>
                    <div className="flex justify-center mt-4">
                        <button className="rounded-default items-center flex px-4 py-2 mx-2  text-white bg-transparent">
                            <Linkedin /> <p>LikedIn Account</p>
                        </button>
                        <button className="rounded-default items-center  flex px-4 py-2 mx-2 bg-red-500 text-white">
                            <Mail /> <p>Google Main</p>
                        </button>
                    </div>
                </div>
                <p className=" text-sm text-center text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    )
}

export default LoginForm
