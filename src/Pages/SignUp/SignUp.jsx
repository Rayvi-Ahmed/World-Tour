
import { useForm } from "react-hook-form";
const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = data => {
        console.log(data)
        reset()
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="hero min-h-screen bg-base-200 mt-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                {/* first name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input {...register("firstName", { required: true })} type="text" name="firstName" placeholder="Write your name " className="input input-bordered" />
                                    {errors.firstName && <span className="text-red-500">Fist name is required</span>}
                                </div>

                                {/* Last Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input {...register("lastName", { required: true })} type="text" name="lastName" placeholder="Write your last name " className="input input-bordered" />
                                    {errors.lastName && <span className="text-red-500">Last name is required</span>}
                                </div>

                                {/* PhotoUrl */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input {...register("photoUrl", { required: true })} type="text" name="photoUrl" placeholder="Write your last name " className="input input-bordered" />
                                    {errors.photoUrl && <span className="text-red-500">Photo URL is required</span>}
                                </div>

                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" name="email" placeholder="Write your Email " className="input input-bordered" />
                                    {errors.email && <span className="text-red-500">Email is required</span>}
                                </div>

                                {/* Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: true })} type="text" name="password" placeholder="Write your accurate password" className="input input-bordered" />
                                    {errors.password && <span className="text-red-500">Password is required</span>}
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;