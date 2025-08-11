import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    {
        question: 'Where is MSK Builders located in Goa?',
        answer: 'MSK Builders Goa is located at 8th Floor 817, Patto Panaji, Goa - 403001. It is easily accessible via various modes of transport.',
    },
    {
        question: 'What services do MSK Builders in Goa provide?',
        answer: 'They offer services including civil contracting, building development, waterproofing coating, and roof fitting. Their team is known for timely project delivery and strong construction.',
    },
    {
        question: 'Do I need to make an advance payment?',
        answer: 'Yes, like most builders, MSK Builders typically require an advance payment. It is recommended to confirm the exact terms directly with them.',
    },
    {
        question: 'Does MSK Building Systems inspect the site before construction?',
        answer: 'Yes, they conduct thorough site inspections to design effectively and assess all necessary factors before beginning work.',
    },
    {
        question: 'Do MSK Builders need a license to operate?',
        answer: 'Yes. Like all professional builders, they are required to hold a valid construction license, passing state licensure exams and registering with the appropriate state board.',
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="w-full mx-auto py-10 md:py-26">
            <h2 className="text-2xl text-lightblack font-semibold mb-6 uppercase tracking-wide">Frequenty Asked Question</h2>
            <div className='space-y-6'>
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 px-5 py-1.5 transition-all duration-300 ease-in-out"
                    >
                        <button
                            className="flex justify-between items-center w-full p-4 text-left text-lg font-medium text-lightblack"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.question}
                            {activeIndex === index ? <FaMinus /> : <FaPlus />}
                        </button>
                        {activeIndex === index && (
                            <div className="px-4 pb-4 text-gray-500">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
