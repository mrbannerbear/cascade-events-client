import Banner from "../home/homeComps/Banner";

const Projects = () => {
  const resources = [
    { id: 1, img: "/projects/1.jpg" },
    { id: 2, img: "/projects/2.jpg" },
    { id: 3, img: "/projects/3.jpg" },
    { id: 4, img: "/projects/4.jpg" },
    { id: 5, img: "/projects/5.jpg" },
    { id: 6, img: "/projects/6.jpg" },
    { id: 7, img: "/projects/7.jpg" },
    { id: 8, img: "/projects/8.jpg" },
    { id: 9, img: "/projects/9.jpg" },
    { id: 10, img: "/projects/10.jpg" },
    { id: 11, img: "/projects/11.jpg" },
    { id: 12, img: "/projects/12.jpg" },
  ];
  return (
    <div className="min-h-screen">
      <Banner />
      <div className="grid grid-cols-2 md:grid-cols-3 py-12">
        {resources.map((each) => (
          <div className="w-full h-full" key={each.id}>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
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
