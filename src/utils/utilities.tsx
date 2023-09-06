import home_icon from "../images/home_icon.png";
import about_icon from "../images/about_icon.png";
import projects_icon from "../images/work_icon.png";
import contact_icon from "../images/contact_icon.png";

export const GetIcon = (location: string) => {
  const cleanLocation = location.replace(/[/]/g, "");

  switch (cleanLocation) {
    case "home":
      return home_icon;
    case "about":
      return about_icon;
    case "projects":
      return projects_icon;
    case "contact":
      return contact_icon;
    default:
      return home_icon;
  }
};

export const GetIconVariants = (color: string = "0072ff") => {
  const iconVariants = {
    display: {
      filter: [
        `drop-shadow(0 0 5px #${color}) drop-shadow(0 0 10px #${color})
    drop-shadow(0 0 20px #${color}) drop-shadow(0 0 30px #${color})`,
      ],
      // opacity: [1, 0, 1, 0, 1],
    },
    enter: {
      filter: [
        `drop-shadow(0 0 5px #${color}) drop-shadow(0 0 10px #${color})
    drop-shadow(0 0 20px #${color}) drop-shadow(0 0 30px #${color})`,
      ],
    },
    exit: {
      filter: [
        `drop-shadow(0 0 5px #${color}) drop-shadow(0 0 10px #${color})
    drop-shadow(0 0 20px #${color}) drop-shadow(0 0 30px #${color})`,
      ],
    },
  };

  return iconVariants;
};
