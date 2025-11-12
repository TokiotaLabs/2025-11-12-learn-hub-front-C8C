import React from 'react';

const TestimonialSlider: React.FC = () => {
  return (
    <div className="bg-white flex w-full px-[70px] py-24 flex-col items-center justify-center">
      <div className="w-full max-w-[1144px] flex gap-5">
        <div className="w-1/4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e5f2f78af6e9eb9bf3641ac24b36eeff3743f5961d03b70a581c768250997bc"
            className="aspect-[0.9] object-contain object-center w-[280px] rounded-2xl flex-shrink-0 max-w-full flex-grow"
            alt="Testimonial"
          />
        </div>
        <div className="w-3/4">
          <div className="mt-auto mb-auto w-full self-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b10257ab599273f170217c89803f7bfc0ce65c4c58c468be3c957d09493ae36"
              className="aspect-[5] object-contain object-center w-[180px] max-w-full"
              alt="Rating"
            />
            <p className="transform rotate-0 text-[#171a1f] text-xl font-inter font-normal leading-[30px] mt-8">
              This course exceeded my expectations! The content was thorough and
              the instructors were engaging and knowledgeable. I highly
              recommend it to anyone looking to enhance their skills.
            </p>
            <div className="flex mt-8 w-full items-stretch gap-[100px] flex-wrap">
              <div className="flex flex-col items-stretch font-inter flex-1">
                <h4 className="transform rotate-0 text-[#171a1f] text-xl font-bold self-start">
                  Emily Johnson
                </h4>
                <p className="transform rotate-0 text-[#909590] text-lg font-normal leading-8">
                  Software Developer
                </p>
              </div>
              <div className="flex mt-auto mb-auto items-center gap-1 flex-1">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b534601d007320f6771351236592144b24d4f30705bbd1beaee32856f6e07cdf"
                  className="aspect-square object-contain object-center w-9 rounded-[18px] self-stretch flex-shrink-0"
                  alt=""
                />
                <div className="rounded-md bg-[#636ae8] self-stretch flex mt-auto mb-auto w-5 flex-shrink-0 h-2.5" />
                <div className="rounded-md bg-[#dee1e6] self-stretch flex mt-auto mb-auto w-2.5 flex-shrink-0 h-2.5" />
                <div className="rounded-md bg-[#dee1e6] self-stretch flex mt-auto mb-auto w-2.5 flex-shrink-0 h-2.5" />
                <div className="rounded-md bg-[#dee1e6] self-stretch flex mt-auto mb-auto w-2.5 flex-shrink-0 h-2.5" />
                <div className="rounded-md bg-[#dee1e6] self-stretch flex mt-auto mb-auto w-2.5 flex-shrink-0 h-2.5" />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/14baac12a803cbb249b47f837210b7afa8b81fed0f3b6c6eef1cf78292d259b0"
                  className="aspect-square object-contain object-center w-9 rounded-[18px] self-stretch flex-shrink-0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
