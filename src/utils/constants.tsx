import { preview_ml,preview_web_1,preview_web_2,preview_web_3 } from "../assets/preview"
import {WebProject1Detail, WebProject2Detail, WebProject3Detail, MLProject1Detail} from "../components/DetailPage"

export const PROJECTS_WEB = [
    {
        preview: preview_web_3,
        title: 'Oh My Assistant',
        description: 'An Assistant AI service for webtoon artists that leverages generative AI to create webtoon backgrounds and modify character poses. The project was planned and executed end-to-end.',
        githubLink: 'https://github.com/jh7316/AI_Comics_Assistant',
        role: ['UI/UX Design','FE'],
        techStack: ['Javascript','React','Figma','React-Query','Python','FastAPI','PyTorch','MySQL','AWS'],
        teamSize: 6,
        serviceLink: 'http://www.gangyub.site/auth?mode=signup',
        period: 'Jan 2024 - March 2024',
        detail: <WebProject3Detail />
    },
    {
        preview: preview_web_2,
        title: 'New York Outlet Map Web Application',
        description: 'A service that provides information on locations in New York where public power outlets are available.',
        githubLink: 'https://github.com/jh7316/outlet-map-web-application',
        role: ['BE'],
        techStack: ['Javascript','Java','React','Spring Boot','MySQL'],
        teamSize: 5,
        period: 'March 2023 - May 2023',
        detail: <WebProject2Detail />
    },
    {
        preview: preview_web_1,
        title: 'VR Forest Environment',
        description: 'A Web-VR project that implemented a forest environment using a VR framework.',
        githubLink: 'https://github.com/jh7316/VR_Forest_Environment',
        role: ['dev'],
        techStack: ['Javascript','A-Frame','Web-VR'],
        teamSize: 2,
        period: 'Nov 2021 - Dec 2021',
        detail: <WebProject1Detail />
    },
]

export const PROJECTS_ML = [
    {
        preview: preview_ml,
        title: 'Image Classification: Detecting Mask, Gender, Age ',
        description: 'Competition for developing a model to classify gender, age, and mask-wearing status of individuals in images using the dataset provided by the Naver Connect Foundation.',
        githubLink: 'https://github.com/jh7316/Mask-Image-Classification-Competition',
        role: ['EDA','Data Preprocessing','Modelling'],
        techStack: ['Python','PyTorch','WandB'],
        teamSize: 6,
        period: 'Nov 2023 - Dec 2023',
        detail: <MLProject1Detail />
    },
]

export const ROLE_BADGE_COLORS = [
    '#f8f8f8',
    '#d4d5d4',
    '#a9abaa',
    '#838685',
]

export const TECH_STACK_BADGE_COLORS = [
    '#ba4f45',
    '#dba84c',
    '#c23da3',
    '#7840bf',
    '#3161ce',
    '#36a7c9',
    '#25da4b',
    '#a0e41b',
    '#c8a237',
]