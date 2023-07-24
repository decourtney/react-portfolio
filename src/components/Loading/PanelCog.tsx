import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import panelCogBase from "../../images/panel_cog_base.png";
import loadingPanelLeft from "../../images/loading_panel_left.png";
import loadingPanelRight from "../../images/loading_panel_right.png";

export enum nextRoute {
    "/home" = 0,
    "/about" = 1,
    "/projects" = 2,
    "/contact" = 3,
}

const PanelCog = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const animTest = async () => {
            await animate(scope.current, { x: "1.5%" }, {duration: 3})
            await animate(scope.current, { y: "50%" })
        }
        animTest()
    })

    return (
        <motion.div
            ref={scope}
            key={"panelCog"}
            className="relative w-full h-full bg-green-400"
        >
            <img
                src={panelCogBase}
                className="absolute top-1/2 -left-[6.1%] w-[8.5%] h-[10%] -translate-y-[50%]"
            />
        </motion.div>
    )
}

export default PanelCog;