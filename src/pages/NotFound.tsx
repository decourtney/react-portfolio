import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg, setIsLoading } from "../reducers/projectSlice";
import { motion, useAnimate } from "framer-motion";
import namePlateButtonFrame from "../images/proj_nameplate_button_frame.png";
import namePlateButton from "../images/proj_nameplate_button.png";
import loadingPanelLeft from "../images/loading_panel_left.png";
import loadingPanelRight from "../images/loading_panel_right.png";
import notfound_gearbox_bg from "../images/notfound_gearbox_bg.png";
import notfound_gearbox_fg from "../images/notfound_gearbox_fg.png";

const NotFound = () => {
  const dispatch = useAppDispatch();
  const [foreground, animForeground] = useAnimate();
  const navigate = useNavigate();

  useEffect(() => {
    // disable menu button
    dispatch(setIsLoading(true));
    dispatch(setMarqueeMsg(`PAGE NOT FOUND`));

    const openGearbox = async () => {
      await animForeground(
        foreground.current,
        { rotateZ: [0, 20] },
        { type: "spring", delay: 2 }
      );
      await animForeground(
        foreground.current,
        { y: "100%" },
        { duration: 0.5, ease: "easeIn" }
      );
    };

    openGearbox();
  }, []);

  const handleButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        id="gear-box"
        className="gear-bg absolute flex items-center justify-center inset-0 top-0 left-0 w-full h-full bg-slate-900 overflow-hidden"
      >
        <div className="relative w-full h-full">
          <img
            src={notfound_gearbox_bg}
            className={
              "absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2"
            }
            alt="Gearbox Background"
          />

          <div className="absolute top-1/2 left-1/2 h-full -translate-x-[300%] -translate-y-[30%] z-10">
            <div className="relative h-[10%] roudned-full z-50 group">
              <img
                src={namePlateButtonFrame}
                className="h-[100%] pointer-events-none"
                alt="Nameplate button frame"
              />
              <motion.img
                src={namePlateButton}
                className="absolute top-0 left-0 rounded-full pointer-events-auto z-50 group-hover:scale-[102%] group-active:scale-[95%]"
                alt="Nameplate button"
                style={{ filter: "hue-rotate(120deg) saturate(3) invert(90%)" }}
                onClick={handleButtonClick}
              />
            </div>
          </div>

          <motion.img
            ref={foreground}
            src={notfound_gearbox_fg}
            className="absolute top-1/2 left-1/2 h-full origin-top-left z-20"
            alt="Gearbox Foreground"
            initial={{ x: "-50%", y: "-50%" }}
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={loadingPanelLeft}
          className="absolute top-[50%] -left-[0%] h-full transform -translate-y-[50%]"
          alt="Left Loading Panel"
        />
        <img
          src={loadingPanelRight}
          className="absolute top-[50%] -right-[0%] h-full transform -translate-y-[50%]"
          alt="Right Loading Panel"
        />
      </div>
    </>
  );
};

export default NotFound;
