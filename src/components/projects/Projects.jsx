const Projects = () => {
    const resources = [
        {
            img: "/projects/1.jpg"
        },
        {
            img: "/projects/2.jpg"
        },
        {
            img: "/projects/3.jpg"
        }
    ]
    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-2 md:grid-cols-3">
            {
                resources.map(
                    each => (
                        <button>
                             <img src={each.img} className="h-40" alt="" />
                        </button>
                )
                )
            }
            </div>
           
        </div>
    );
};

export default Projects;