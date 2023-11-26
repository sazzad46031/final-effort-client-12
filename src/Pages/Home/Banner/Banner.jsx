

const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full h-[700px] bg-cover" src="./banner.jpg" alt="" />
            </div>
            <div className="absolute top-1/4 left-1/3">
                <h2 className="text-8xl font-semibold mb-10">Fair caring and <br></br>Knowledge sharing</h2>
                <p className="text-2xl font-semibold">Education is the key to knowledge, growth, and opportunity.<br></br> It empowers individuals, cultivates critical thinking,<br></br> and shapes future generations, fostering progress and societal development.</p>
            </div>
                        
        </div>
    );
};

export default Banner;