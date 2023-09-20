
const Features = () => {

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center gap-4">
                <div>
                    <img className="w-[200vw]" src="https://img.freepik.com/free-photo/rear-view-couple-enjoying-sunset_1098-2921.jpg?t=st=1693806166~exp=1693806766~hmac=768457bc660c4e5a7a6902f1b843aca6df9be261f6acb50c36b6605d997c488c" alt="" />
                </div>
                <div>
                    <h1 className="lg:my-3 font-serif font-semibold text-4xl text-orange-400">Find your tour partner, <span className="text-gray-800"> lets tour your dream place</span> </h1>
                    <img className="lg:w-[120vw] rounded-[30%] shadow-lg" src="https://img.freepik.com/free-photo/couple-traveling-together-country-side_23-2149406481.jpg" alt="" />
                    <p className="my-4 text-orange-500 font-semibold ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam provident atque eum molestiae earum inventore vel delectus molestias nisi consequuntur!</p>
                    <button className="bg-orange-700 text-gray-300 p-3 rounded-md">Visit Now </button>
                </div>
            </div>
        </div>
    );
};


export default Features;