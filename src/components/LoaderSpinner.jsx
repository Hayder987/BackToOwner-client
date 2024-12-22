import { CirclesWithBar } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="flex justify-center">
      <CirclesWithBar
        height="100"
        width="100"
        color="#0795f1"
        outerCircleColor="#0795f1"
        innerCircleColor="#0795f1"
        barColor="#0795f1"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
