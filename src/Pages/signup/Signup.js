import React from 'react';

const Signup = () => {
    return (
        <div className="relative">
            <img
                src="https://cdn.pixabay.com/photo/2023/04/08/20/07/mimose-7910067_960_720.jpg"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="relative  z-10">

                <div className="container flex flex-col items-center justify-center  px-6 mx-auto py-10">
                    <div className="flex justify-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-people text-slate-300" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                        </svg>
                    </div>

                    <h1 className="mt-4 text-2xl font-semibold tracking-wide text-center text-slate-200 capitalize md:text-3xl">
                        Signup
                    </h1>



                    <div className="w-full max-w-lg mx-auto mt-6 ">
                        <form className="space-y-4">
                            <div>
                                <CustomeLabel name={"Username"} />
                                <input type="text" placeholder="Enter your username or email" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " required />
                            </div>
                            <div>
                                <CustomeLabel name={"Email"} />
                                <input type="email" placeholder="Enter your username or email" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " required />
                            </div>

                            <div>
                                <CustomeLabel name={"First Name"} />
                                <input type="text" placeholder="First Name" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>
                            <div>
                                <CustomeLabel name={"Last Name"} />
                                <input type="text" placeholder="Last Name" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>

                            <div>
                                <CustomeLabel name={"Password"} />
                                <input type="password" placeholder="password" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>

                            <div>
                                <CustomeLabel name={"Password Confirmation"} />
                                <input type="password" placeholder="Confirm password" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>
                            <div>
                                <CustomeLabel name={"Cell phone Number"} />
                                <input type="tel" placeholder="cell phone number" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>
                            <div>
                                <CustomeLabel name={"Birth Month and Year"} />
                                <input type="date" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>
                            <div>
                                <CustomeLabel name={"State"} />
                                <input type="text" placeholder="State" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>
                            <div>
                                <CustomeLabel name={"City"} />
                                <input type="text" placeholder="State" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>
                            <div>
                                <CustomeLabel name={"Country"} />
                                <input type="text" placeholder="Country" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>
                            <div>
                                <CustomeLabel name={"Political Affiliation"} />
                                <input type="text" placeholder="Democrate" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>
                            <div>
                                <CustomeLabel name={"Number of National Elections voted in"} />
                                <input type="text" placeholder="1" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>
                            <div>
                                <CustomeLabel name={"Number of State Elections voted in"} />
                                <input type="text" placeholder="1" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg " />
                            </div>

                            <div className="flex flex-col justify-start text-slate-300">
                                <div className="flex items-center gap-5">
                                    <input type="checkbox" name="remember" className="mr-1 rounded-sm focus:ring-violet-400 focus:ring-2 " />
                                    <label for="remember" className="text-sm ">
                                        Commitment to Engage in polite Political Discourse to help create a new "People's contract with america"
                                    </label>

                                </div>
                                <p for="remember" className="text-sm m-4 pl-4 ">
                                    I have read and agree the <span className='font-medium text-slate-50'>code of Ethics</span>
                                </p>

                            </div>
                            <button class="w-full mx-auto max-w-xs px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-blue-400 flex justify-between items-center gap-4">

                                <span>Sign in</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                        </form>
                        <div class="mt-6 text-center">
                            <a href="#" class="text-sm text-slate-300 hover:underline ">
                                Already have an account? Sign in
                            </a>
                        </div>
                    </div>



                </div>

                {/* main container */}
            </div>

        </div>
    );
};

export default Signup;



export const CustomeLabel = ({ name }) => {
    return (
        <label className="flex mb-2 text-sm text-slate-300">

            {name}

            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-asterisk text-red" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg></span>
        </label>
    )

}