import * as React from 'react';

export const NewsletterForm: React.FC = () => {
  return (
    <form
      className="flex items-start self-center mt-2 max-w-full text-base leading-loose w-[376px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-auto gap-2 px-4 py-2.5 rounded-3xl border border-solid bg-black bg-opacity-0 border-neutral-300 text-zinc-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b3fd1735d78503ab1b62ff8660c61d0a76bb3dc0ad5be19bdbc9a4dcde8a1e?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a"
          alt=""
          className="object-contain shrink-0 my-auto w-5 aspect-square"
        />
        <label htmlFor="emailInput" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="emailInput"
          className="bg-transparent border-none outline-none text-zinc-200 w-full"
          placeholder="Input your email"
          aria-label="Email address"
        />
      </div>
      <button
        type="submit"
        className="overflow-hidden text-white px-5 py-2.5 whitespace-nowrap bg-indigo-500 rounded-xl border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad]"
      >
        Subscribe
      </button>
    </form>
  );
};
