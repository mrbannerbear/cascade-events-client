import HomeHero from "../../../custom/HomeHero";

const HomeContent = () => {


    const homeContent = [
        
           { direction: "flex-row",
            img: "/homeSample1.jpg",
            title: "Lorem Ipsum Title",
            caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur 
            fuga ex vitae sapiente. Repudiandae vel dolorem, excepturi voluptatem sunt mollitia tempore aperiam illo numquam esse`},
           { direction: "flex-row-reverse",
            img: "/homeSample2.jpg",
            title: "Lorem Ipsum Title Second",
            caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur 
            fuga ex vitae sapiente. Repudiandae vel dolorem, excepturi voluptatem sunt mollitia tempore aperiam illo numquam esse`},
           { direction: "",
            img: "/homeSample3.jpg",
            title: "Lorem Ipsum Title Second",
            caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consectetur 
            fuga ex vitae sapiente. Repudiandae vel dolorem, excepturi voluptatem sunt mollitia tempore aperiam illo numquam esse`},

    ]

    return (
        <div>
            {
                homeContent.map(each => (
                    // eslint-disable-next-line react/jsx-key
                    <HomeHero direction={each?.direction} img={each?.img} title={each?.title} caption={each?.caption}></HomeHero>
                ))
            }
        </div>
    );
};

export default HomeContent;