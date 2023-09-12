import home_icon from "../images/panel_home_icon.png";
import about_icon from "../images/panel_about_icon.png";
import projects_icon from "../images/panel_work_icon.png";
import contact_icon from "../images/panel_contact_icon.png";

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

export const GetRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
