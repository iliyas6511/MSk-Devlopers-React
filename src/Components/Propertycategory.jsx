import React from "react";

const categories1 = [
    {
        title: "Apartments",
        listings: 17,
        image: "https://main.wpresidence.net/wp-content/uploads/2014/05/white_living.webp",
    },
    {
        title: "Flats",
        listings: 5,
        image: "https://main.wpresidence.net/wp-content/uploads/2014/05/4.3-2-980x682.webp",
    },
    {
        title: "Duplexes",
        listings: 9,
        image: "https://main.wpresidence.net/wp-content/uploads/2014/06/2.1-1-980x682.webp",
    },
];

const categories2 = [
    {
        title: "Houses",
        listings: 6,
        image: "https://main.wpresidence.net/wp-content/uploads/2014/05/white_living.webp",
    },
    {
        title: "Offices",
        listings: 4,
        image: "https://main.wpresidence.net/wp-content/uploads/2014/06/2.1-1-980x682.webp",
    },
    {
        title: "Villas",
        listings: 23,
        image: "https://main.wpresidence.net/wp-content/uploads/2014/06/2.1-1-980x682.webp",
    },
];

const PropertyCategory = () => (
    <div className="bg-lightblue py-[40px]">
        <section className="max-w-6xl mx-auto px-4 py-10 text-center">
            <div className="space-y-2 mb-12">
                <h1 className="text-3xl font-medium">Properties by Category</h1>
                <p className="text-lightgray max-w-2xl mx-auto">
                    Highlight the best of your properties by using the List Category shortcode. You can list specific properties categories, types, cities, areas.
                </p>
            </div>
            {/* Desktop grid (1280px+) */}
            <div className="hidden lg:flex flex-col gap-3 ">
                {/* ROW 1 */}
                <div className="flex flex-1 gap-3 ">
                    {/* Left large image */}
                    <div className="flex-1 relative rounded-sm overflow-hidden h-[300px]">
                        <img src={categories1[0].image} alt={categories1[0].title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-left text-white">
                            <span className="text-lg font-semibold block">{categories1[0].title}</span>
                            <span className="text-sm font-medium block">{categories1[0].listings} Listings</span>
                        </div>
                    </div>
                    {/* Right: two images, side by side */}
                    <div className="flex-1 flex flex-row gap-3 h-[300px]">
                        {[categories1[1], categories1[2]].map((cat) => (
                            <div key={cat.title} className="flex-1 relative rounded-sm overflow-hidden h-full">
                                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-left text-white">
                                    <span className="text-lg font-semibold block">{cat.title}</span>
                                    <span className="text-sm font-medium block">{cat.listings} Listings</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* ROW 2 - opposite arrangement */}
                <div className="flex flex-1 gap-3 ">
                    {/* Left: two images, side by side */}
                    <div className="flex-1 flex flex-row gap-3 h-[300px]">
                        {[categories2[0], categories2[1]].map((cat) => (
                            <div key={cat.title} className="flex-1 relative rounded-sm overflow-hidden h-full">
                                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-left text-white">
                                    <span className="text-lg font-semibold block">{cat.title}</span>
                                    <span className="text-sm font-medium block">{cat.listings} Listings</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right large image */}
                    <div className="flex-1 relative rounded-sm overflow-hidden h-[300px]">
                        <img src={categories2[2].image} alt={categories2[2].title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-left text-white">
                            <span className="text-lg font-semibold block">{categories2[2].title}</span>
                            <span className="text-sm font-medium block">{categories2[2].listings} Listings</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile/Tablet view: single column */}
            <div className="lg:hidden grid grid-cols-1 gap-5">
                {[...categories1, ...categories2].map((cat) => (
                    <div key={cat.title} className="relative w-full h-60 rounded-xl overflow-hidden">
                        <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col items-start gap-1 text-white">
                            <span className="text-lg font-semibold">{cat.title}</span>
                            <span className="text-sm font-medium">{cat.listings} Listings</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export default PropertyCategory;
