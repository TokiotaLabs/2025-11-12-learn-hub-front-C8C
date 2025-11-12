import React from 'react';

import { NewsletterForm } from '../newsletter/NewsletterForm';

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col items-center px-20 pt-24 pb-6 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1176px] max-md:max-w-full">
        <h2 className="self-center text-xl font-semibold text-center text-white rotate-[2.4492937051703357e-16rad]">
          Subscribe to our newsletter
        </h2>
        <NewsletterForm />

        {/* Footer content */}
        <div className="flex flex-wrap gap-5 justify-between mt-20 w-full text-white max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-2 text-3xl font-bold whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5752f07aeb487626cf94aea5654fa25287ad863327678189446977fa13138c49?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a"
              alt="LearnHub footer logo"
              className="object-contain shrink-0 w-12 rounded-md aspect-square"
            />
            <div className="basis-auto rotate-[2.4492937051703357e-16rad]">
              LearnHub
            </div>
          </div>
          <nav className="flex flex-wrap gap-10 my-auto text-lg leading-loose max-md:max-w-full">
            {[
              'Pricing',
              'About us',
              'Features',
              'Help Center',
              'Contact us',
              'FAQs',
              'Careers',
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="rotate-[2.4492937051703357e-16rad] hover:text-indigo-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-wrap gap-5 justify-between items-center mt-6 w-full max-md:max-w-full">
          <button className="flex gap-10 self-stretch px-3 py-2 text-sm leading-loose whitespace-nowrap rounded-md border border-solid bg-black bg-opacity-0 border-neutral-300 text-zinc-200">
            <span>English</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/db82afa873dff1c194e8ec1ebdcafbca4bf30542c9e6c6efaeef2c8d2c861768?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a"
              alt=""
              className="object-contain shrink-0 my-auto w-4 aspect-square"
            />
          </button>
          <p className="self-stretch my-auto text-sm leading-loose text-center text-white rotate-[2.4492937051703357e-16rad]">
            © 2024 Brand, Inc. • Privacy • Terms • Sitemap
          </p>
          <div className="flex gap-6 self-stretch my-auto">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(
              (platform, index) => (
                <img
                  key={platform}
                  loading="lazy"
                  src={`http://b.io/ext_${17 + index}-`}
                  alt={`${platform} icon`}
                  className="object-contain shrink-0 w-6 aspect-square"
                />
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
