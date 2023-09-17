// This will be the temporary mobile page until I can create/rewrite for mobile devices
import construction_site from "../images/gears_bg.jpg"

const MobileHome = () => {
  return (
    <main className="w-full h-[100vh] bg-[#00afff]">
      <section className="flex w-full h-full">
        <img src={construction_site} className="w-full h-full blur-[2px]" alt="Under Construction"/>
        <div className="mobile-construction absolute w-full h-full" />
      </section>
    </main>
  );
};

export default MobileHome;
