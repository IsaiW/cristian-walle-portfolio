/**
 * @copyright 2025 IsaiW_
 * @license Apache-2.0
 */

// copmonents
import SkillCard from "./SkillCard.jsx";


const skillItem = [
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Backend Framework'
  },
  {
    imgSrc: '/images/net-framework.svg',
    label: '.NET Framework',
    desc: 'Backend Framework'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'JavaScript Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'UI Framework'
  }
];

const Skill = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => 
                    (
                        <SkillCard 
                          key={key}
                          imgSrc={imgSrc}
                          label={label}
                          desc={desc}  
                          classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 

export default Skill;