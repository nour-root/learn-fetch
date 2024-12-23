const handleData = (user) => {
  return `<div
        id="${user.id}"
        class="bg-gray-200 py-4 px-3 w-fit flex flex-col items-center gap-4 rounded-lg h-full"
      >
        <div class="image p-2 border-4 border-solid border-black rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0Z"
            />
          </svg>
        </div>
        <div class="title text-center">
          <h2 class="font-bold text-xl text-gray-800">Title</h2>
          <p class="mt-2">
            ${user.title}
          </p>
        </div>
        <div class="body text-center">
          <h2 class="font-bold text-xl text-gray-800">Body</h2>
          <p class="mt-2">
            ${user.body}
          </p>
        </div>
      </div>`;
};
export default handleData;
