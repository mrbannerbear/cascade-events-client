import Banner from "../home/homeComps/Banner";

const Projects = () => {
  const resources = [
    { id: 1, img: "/projects/1.webp" },
    { id: 2, img: "/projects/2.webp" },
    { id: 3, img: "/projects/3.webp" },
    { id: 4, img: "/projects/4.webp" },
    { id: 5, img: "/projects/5.webp" },
    { id: 6, img: "/projects/6.webp" },
    { id: 7, img: "/projects/7.webp" },
    { id: 8, img: "/projects/8.webp" },
    { id: 9, img: "/projects/9.webp" },
    { id: 10, img: "/projects/10.webp" },
    { id: 11, img: "/projects/11.webp" },
    { id: 12, img: "/projects/12.webp" },
  ];
  return (
    <div className="min-h-screen">
      <div className="z-40">
      <Banner />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 py-12">
        {resources.map((each) => (
          <div className="w-full h-full" key={each.id}>
            <button
              onClick={() => document.getElementById(`my_modal_${each.id}`).showModal()}
            >
              <img src={each.img} className="h-40 lg:h-80" alt="" />
            </button>
            <dialog id={`my_modal_${each.id}`} className="modal bg-themeBlack">
              <div className="modal-box bg-themeBlack">
                <img src={each.img} className="h-56 lg:h-96" alt="" />
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
