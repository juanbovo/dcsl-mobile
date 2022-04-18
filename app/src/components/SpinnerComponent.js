function SpinnerComponent() {
  return (
    <div className="flex mt-4 my-auto">
      <div className="relative flex-col mr-24">
        {/* Outer Ring */}
        <div className="w-24 h-24 rounded-full absolute border-4 border-solid border-gray-200"></div>
        {/* Inner Ring */}
        <div className="w-24 h-24 rounded-full animate-spin absolute border-4 border-solid border-primary-500 border-t-transparent"></div>
      </div>
    </div>
  );
}

export default SpinnerComponent;
