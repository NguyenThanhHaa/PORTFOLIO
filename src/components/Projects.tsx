import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { cloudinaryConfig } from '../config/Cloudinary';
import { fit } from '@cloudinary/url-gen/actions/resize';


// Custom styles for Swiper
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: #0ea5e9 !important;
  }
  
  .swiper-pagination-bullet {
    background:rgb(3, 80, 115) !important;
  }
  
  .swiper-pagination-bullet-active {
    background:rgb(2, 68, 101) !important; 
  }
`;

type Project = {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  github: string;
  isDeployed: boolean;
};

type ProjectTranslation = {
  title: string;
  description: string;
};

type Translations = {
  projects: {
    title: string;
    viewAll: string;
    project1: ProjectTranslation;
    project2: ProjectTranslation;
    project3: ProjectTranslation;
    modal: {
      snapshots: string;
      exploreDeployed: string;
      here: string;
      orCheckCode: string;
      viewSourceCode: string;
      github: string;
    };
  };
};

const projects: Project[] = [
  {
    title: 'HeeEstate (Fullstack)',
    description: 'HeeEstate is a real estate web app with secure authentication, CRUD operations, image uploads, and advanced property search.',
    images: [
      'estate-project_vumwnh',
      'estate-project2_af6izg',
      'estate-project3_dw57fk',
      'estate-project5_aajutw',
      'estate-project8_qtp03a',
      'estate-project7_d8vbjr',
      'estate-project6_rcav06',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS','Redux', 'Firebase','axios'],
    github: 'https://github.com/NguyenThanhHaa/ESTATE-MERN-PROJECT',
    isDeployed: false,
  },
  {
    title: 'Selecting Renewable Energy Investment Project (Frontend)',
    description: 'Collaborated with the backend team to develop front-end features for an AHP-based renewable energy project selection web, including criteria comparison, calculation history, and CSV/XLSX file upload.',
    images: [
      'ahp-project1_ixw6vu',
      'ahp-project2_zzreza',
      'ahp-project6_iagwuu',
      'ahp-project3_b7mcnn',
      'ahp-project4_wfay0d',
      'ahp-project5_qq4hdk',
    ],
    tags: ['React', 'Typescript', 'TailwindCSS', 'MUI','axios'],
    github: 'https://github.com/cycastic-cumberland/ahp-frontend',
    isDeployed: false,
  },
  {
    title: 'StormyGram (Frontend)',
    description: 'A simple real-time chat app built with the MERN stack, enabling instant messaging between users. I was responsible for developing the frontend interface and ensuring smooth user interaction.',
    images: [
      'chatapp-logo_kteqic',
      'stormygram-2_klglbf',
      'stormygram-3_qmnmmj',
      'stormygram-4_pjvoso',
      'stormygram-1_rh3hti',
      'stormygram-5_jdk70s',
    ],
    tags: ['Javascript','React', 'TailwindCSS','Styled Component','axios'],
    github: 'https://github.com/NguyenThanhHaa/RealtimeChatApp',
    isDeployed: false,
  },
];

const Projects = () => {
  const { translations } = useLanguage() as { translations: Translations };
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getProjectTranslation = (index: number): ProjectTranslation => {
    const projectKey = `project${index + 1}` as keyof typeof translations.projects;
    return translations.projects[projectKey] as ProjectTranslation;
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <style>{swiperStyles}</style>
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
        
          <h2 className="text-4xl font-bold text-white mb-8 text-center">{translations.projects.title}</h2>
       
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => {
              const projectTranslation = getProjectTranslation(index);
              return (
                <div
                  key={project.title}
                  className="block no-underline"
                  onClick={() => openModal(project)}
                  style={{ cursor: 'pointer' }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative z-10 backdrop-blur-lg bg-gray-700/30 rounded-3xl p-4 shadow-2xl border border-gray-700/30 hover:bg-gray-700 shadow-xl transition-all duration-300 cursor-pointer h-[500px] flex flex-col"
                  >
                    <div className="relative w-full h-40 bg-gray-200 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                      <AdvancedImage
                        cldImg={cloudinaryConfig.image(project.images[0]).resize(fit().width(900).height(600))}
                        className="w-full h-full object-fit"
                        alt={projectTranslation.title}
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => console.error('Image loading error:', e)}
                      />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {projectTranslation.title}
                      </h3>
                      <p className="text-gray-300">
                        {projectTranslation.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-500/50 text-gray-200 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              to="https://github.com/NguyenThanhHaa?tab=repositories"
              className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {translations.projects.viewAll}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Modal Popup for Image Slider */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-transparent overflow-hidden"
          onClick={closeModal}
        >
          <div 
            className="relative z-10 backdrop-blur-md bg-gray-800/40 rounded-3xl p-8 md:p-8 shadow-2xl border border-gray-700/30 max-w-3xl w-full flex flex-col md:flex items-center md:items-stretch gap-8 "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
              aria-label="Close"
            >
              &times;
            </button>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-95 text-sky-800"
            >
              {selectedProject.images.map((image: string, idx: number) => (
                <SwiperSlide key={idx}>
                  <div className="w-full h-96 rounded-2xl overflow-hidden">
                    <AdvancedImage
                      cldImg={cloudinaryConfig.image(image).resize(fit().width(900).height(600))}
                      className="w-full h-96 object-fit"
                      alt={`${selectedProject.title} - Image ${idx + 1}`}
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => console.error('Image loading error:', e)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300">
                {translations.projects.modal.snapshots} <br/>
                {selectedProject.isDeployed ? (
                  <>
                    {translations.projects.modal.exploreDeployed}{' '}
                    <a href={selectedProject.github} className="text-sky-600 hover:text-sky-500">
                      {translations.projects.modal.here}
                    </a>{' '}
                    {translations.projects.modal.orCheckCode}{' '}
                    <a href={selectedProject.github} className="text-sky-600 hover:text-sky-500">
                      {translations.projects.modal.github}
                    </a>.
                  </>
                ):(
                  <>
                    {translations.projects.modal.viewSourceCode}{' '}
                    <a
                      href={selectedProject.github}
                      className="text-sky-600 hover:text-sky-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {translations.projects.modal.github}
                    </a>.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 