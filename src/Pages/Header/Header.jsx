
import '../Header/Header.css'
const Header = () => {
    return (
        <div className="my-7">
            <div className="banner-image bg-cover lg:h-[800px]">
                <div className='flex flex-col relative top-60 right-50  justify-start items-center p-5 lg:w-[400px]'>
                    <h1 className='text-6xl  font-bold font-mono text-cyan-700'>Lets tour the whole world <span>with your partner</span></h1>
                    <p className='text-xl font-sans font-semibold text-orange-800 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta corporis error laudantium fuga ullam repellat culpa assumenda nostrum magnam?</p>
                    <div className="flex items-center justify-center gap-2">
                        <button className=' bg-green-700 text-gray-300 p-3 rounded-md'>Get Eplore</button>
                        <button className='bg-orange-700 text-gray-300 p-3 rounded-md'>Booking</button>
                    </div>
                </div>



            </div>




        </div>
    );
};

export default Header;