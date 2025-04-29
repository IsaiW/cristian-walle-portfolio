/**
 * @copyright 2025 IsaiW_
 * @license Apache-2.0
 */

// Components
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: './images/project-1.jpg',
      title: 'Full stack sells app with admin panel',
      tags: ['Database', 'Development'],
      projectLink: 'https://opticaalfaro.online/'
    },
    {
      imgSrc: './images/project-2.jpg',
      title: 'Inventory management system',
      tags: ['API', 'MVC', 'Database'],
      projectLink: 'https://isaiw.github.io/tindog-copycat/'
    },
    {
      imgSrc: './images/project-3.jpg',
      title: 'Single page application',
      tags: ['Development', 'SPA'],
      projectLink: ''
    },
    {
      imgSrc: './images/project-4.jpg',
      title: 'Landing page',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://acllsolutions.com.mx/'
    },
    {
      imgSrc: './images/project-5.jpg',
      title: 'Landing page',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://gemaconsultores.mx/inicio/'
    },
    {
      imgSrc: './images/project-6.jpg',
      title: 'Landing page',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://isaiw.github.io/web-page-simple/'
    },
  ];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="project-card reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Work;