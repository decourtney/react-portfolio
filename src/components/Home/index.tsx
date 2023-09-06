import label from "../../images/home_label.png"
import cert from "../../images/home_cert.png"

const HomeLeft = () => {
  return (
    <>
      <div className="panel-bg flex justify-center items-center w-full ml-[0%] mr-[4%] -z-10">
        <div className="w-full h-fit mx-[5%]">
          <img src={label} className=" w-full drop-shadow-[0px_0px_3px_black]" />
        </div>
      </div>
    </>
  );
};

const HomeRight = () => {
  return (
    <>
      <div className="panel-bg flex justify-center items-center w-full ml-[4%] mr-[0%] -z-10">
        <div className="w-full h-fit mx-[5%]">
          <img src={cert} className="w-full drop-shadow-[0px_0px_2px_black]" />
        </div>
      </div>
    </>
  );
};

export { HomeLeft, HomeRight };
