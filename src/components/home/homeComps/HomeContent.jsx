import { NavLink } from "react-router-dom";
import HomeHero from "../../../custom/HomeHero";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const HomeContent = () => {


    const homeContent = [
        
           { direction: "flex-row",
            img: "/homeSample1.jpg",
            title: "State-of-the-Art Events",
            caption: `From weddings to corporate events, make your most important moments special with us. 
            From concept to celebration- where every detail matters. Let us turn your vision into reality.`,
            cta: <NavLink to={"/about"}>
                <button className="border-[1.5px] py-1 px-3 rounded-md">About Us</button>
            </NavLink>
            },
           { direction: "flex-row-reverse",
            img: "/homeSample2.jpg",
            title: "Wonderfully Designed",
            caption: `We treat each event like a piece of art, carefully crafting each keeping your special moments in mind.`,
            cta: <NavLink to={"/projects"}>
                <button className="border-[1.5px] py-1 px-3 rounded-md">Explore Projects</button>
            </NavLink>},
           { direction: "",
            img: "/homeSample3.jpg",
            title: "",
            caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur 
            fuga ex vitae sapiente. Repudiandae vel dolorem, excepturi voluptatem sunt mollitia tempore aperiam illo numquam esse`,
            cta: <NavLink to={"/contact"}>
                <button className="border-[1.5px] py-1 px-3 rounded-md">Contact Us</button>
            </NavLink>},

    ]

    return (
        <div>
            {
                homeContent.map(each => (
                    // eslint-disable-next-line react/jsx-key
                    <HomeHero direction={each?.direction} img={each?.img} title={each?.title} caption={each?.caption} cta={each?.cta}></HomeHero>
                ))
            }
            
        <FloatingWhatsApp phoneNumber="+8801909221681" avatar="/logo-2.png" accountName="Cascade Events"></FloatingWhatsApp>
        </div>
    );
};

export default HomeContent;