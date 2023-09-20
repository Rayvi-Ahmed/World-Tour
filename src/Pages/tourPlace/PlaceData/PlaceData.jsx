

const PlaceData = ({ place }) => {
    const { name, _id, image, country, rating, description } = place
    return (
        <section className="mx-auto w-fit p-5">
            {/* <!-- Card --> */}
            <div className="w-[320px] h-fit group border-2 shadow-lg transform hover:scale-105 duration-500">
                <div className="relative overflow-hidden">
                    <img className="h-[300px]" src={image} alt="" />
                    <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-black text-white py-2 px-5">Booking Now</button>
                    </div>
                </div>
                <div className="text-start p-5 h-[200px] overflow-hidden">
                    <h2 className="mt-3 text-xl capitalize">{name}</h2>
                    <h2 className="text-xl text-orange-500">{country}</h2>
                    <p className="text-sm text-gray-700">{description}</p>

                </div>
            </div>
        </section>



    );
};

export default PlaceData;