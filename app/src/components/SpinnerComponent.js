function SpinnerComponent() {
  return (
    <div className="flex">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
        {/* Inner Ring */}
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-green-500 border-t-transparent"></div>
      </div>
    </div>
  );
}

export default SpinnerComponent;
