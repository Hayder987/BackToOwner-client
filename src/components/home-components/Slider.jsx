

const Slider = ({banner, header, desc}) => {
  return (
    <div>
        <div
          className="flex flex-col h-[400px] lg:h-[700px]"
          style={{
            backgroundImage:
              `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="mb-4 text-4xl md:text-6xl text-center font-bold text-white">
            {header}
          </h1>
          <p className="w-full text-center text-gray-300 lg:w-6/12">
           {desc}
          </p>
        </div>
    </div>
  );
};

export default Slider;
