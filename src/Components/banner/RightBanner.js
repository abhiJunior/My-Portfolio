const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0">
      <img
        src="/Photos/banner_image.jpg"
        alt="Abhishek Banner"
        className="w-40 h-55 sm:w-56 sm:h-56 md:w-72 md:h-96 lg:w-[420px] lg:h-[600px] xl:w-[500px] xl:h-[680px] rounded-3xl object-cover z-10 shadow-lg"
      />
    </div>
  );
};

export default RightBanner;
