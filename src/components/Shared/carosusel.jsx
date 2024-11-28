
import React, { useState, useEffect } from "react";

const Carousel = () => {
    const slides = [
        {
            id: 1,
            image: "https://globalinst.in/wp-content/uploads/2022/02/computerlab.png",
            title: "Slide 1",
            description: "This is the description for Slide 1.",
        },
        {
            id: 2,
            image: "https://globalinst.in/wp-content/uploads/2022/02/lecture-hall.jpg",
            title: "Slide 2",
            description: "This is the description for Slide 2.",
        },
        {
            id: 3,
            image: "https://globalinst.in/wp-content/uploads/2022/02/Liberry.png",
            title: "Slide 3",
            description: "This is the description for Slide 3.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        setIntervalId(interval);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        clearInterval(intervalId);
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        setIntervalId(interval);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="flex justify-evenly items-center">
            <div className="text-l bg-[#18397C] text-white px-5 py-3 gap-1">
                <div className="border-b-2">The GLOBAL EDUCATIONAL INSTITUES Advantages</div>
                <br />
                <div>
                    <h4>- Linkages with academia and industries.</h4>
                    <h4>- Scholarship for meritorious students.</h4>
                    <h4>- Separate hostels for boys and girls at economic costs.</h4>
                    <h4>- 24x7 Internet facility and WIFI campus.</h4>
                    <h4>- Seminars, confrences & Industrial vists.</h4>
                    <h4>- Communication skills & personality development programs.</h4>
                    <h4>- State-of-art labs.</h4>
                    <h4>- Rich library with thousands of books and journals.</h4>
                    <h4>- Free admissions for SC/ST Students.</h4>
                    <h4>- Dedicated, skilled, experienced and high quality faculty.</h4>
                </div>
            </div>

            <div className="relative  w-full max-w-2xl ">
                {/* Slide */}
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="w-full h-64 object-cover"
                    />
                    {/* <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-xl font-bold">{slides[currentIndex].title}</h3>
          <p>{slides[currentIndex].description}</p>
        </div> */}
                </div>

                {/* Buttons */}
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                    onClick={handlePrev}
                >
                    ❮
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                    onClick={handleNext}
                >
                    ❯
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-4">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                                }`}
                            onClick={() => handleDotClick(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;