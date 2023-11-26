export default function SignIn() {
    return (
        //     <div className="flex">
        //     <div className="bg-black text-white text-7xl font-bold  w-[588px] h-screen flex justify-center items-center">{/* Left side */}
        //     <p className="font-montserrat "> Board</p>.
        //     </div>
        //     <div className="bg-neutral-100 w-[852px] h-screen">{/* Right side */}

        //     </div>
        //   </div>
        // <!-- Example -->
        <div className="flex min-h-screen">

            {/* <!-- Container --> */}
            <div className="flex flex-row w-full">

                {/* <!-- Sidebar --> */}
                <div className='hidden lg:flex flex-col justify-between bg-black lg:max-w-sm xl:max-w-lg'>
                    <div className="flex items-center justify-start space-x-3">
                        <p className="text-white font-montserrat text-7xl">Board.</p>
                    </div>
                    
                </div>

                {/* <!-- Login --> */}
                <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                    <div className="flex lg:hidden justify-between items-center w-full py-4">
                        <div className="flex items-center justify-start space-x-3">
                            <p className="font-montserrat text-lg">Board.</p>
                        </div>
                        
                    </div>
                    {/* <!-- Login box -->
                    <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                        <div className="flex flex-col space-y-2 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
                            <p className="text-md md:text-xl">Sign up or log in to place the order,no password require!</p>
                        </div>
                        <div className="flex flex-col max-w-md space-y-5">
                            <input type="text" placeholder="Username"
                                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
                            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Confirm
                                with email</button>
                            <div className="flex justify-center items-center">
                                <span className="w-full border border-black"></span>
                                <span className="px-4">Or</span>
                                <span className="w-full border border-black"></span>
                            </div>
                            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                                <span className="absolute left-4">
                                   
                                </span>
                                <span>Sign in with Google</span>
                            </button>
                        </div>
                    </div>

                 */}

                </div>
            </div>

        </div>
    )
}
