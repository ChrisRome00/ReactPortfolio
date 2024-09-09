import './styles/Portfolio.css'
import Projects from '../components/Projects.jsx'

const portfolioData = [
  { 
      id: 1,
      repo: 'https://github.com/vmarorti/Team-Rocket-s-Warehouse',
      deployment : 'https://team-rocket-s-warehouse.onrender.com/',
      img: 'src/assets/images/pokemon.png',
      description: 'An online platform where Pokémon card enthusiasts can trade, buy, and sell their cards.',
      title: 'Team Rockets Warehouse'
  },
  {
    id: 2,
      repo: 'https://github.com/chrypixl/project-1',
      deployment: 'https://chrypixl.github.io/project-1/',
      img: 'src/assets/images/bookoSearch.png',
      description: 'An application where a user can search for a specific title based on categories and genres.',
      title: "Book Search"
  },
  {
    id: 3,
    title: "Weather Dashboard",
      repo: 'https://github.com/ChrisRome00/Challenge-06-WeatherDashboard',
      deployment: 'https://chrisrome00.github.io/Challenge-06-WeatherDashboard/',
      img: 'src/assets/images/weather.png',
      description: 'A weather dashboard where a user can search for weekly forecast data based upon city.'
  },
  { 
    id: 4,
    title: "E-Commerce Backend",
      repo: 'https://github.com/ChrisRome00/E-Connerce-Backend',
      deployment: 'Server Level Application',
      img: 'src/assets/images/ecommerce.png',
      description: 'A backend server level application that can control the addition of items for an E-commerce market.'
  },
  {
    id: 5,
    title: "Personal Blog",
      repo: 'https://github.com/ChrisRome00/Challenge-04-PersonalBlog',
      deployment: 'https://chrisrome00.github.io/Challenge-04-PersonalBlog/form.html',
      img: 'src\assets\images\selflog.png',
      description: 'This application is a personal blogging tool that utilizes a users local storage.'
  },
  {
    id: 6,
    title: "proffessional ReadME Generator",
      repo: 'https://github.com/ChrisRome00/ReadMe-Generator',
      deployment: 'Node.js Environment Application',
      img: 'src/assets/images/profReadme.png',
      description: 'This command line application allows the user to build a proffessional read me file (.md).'
  }

]

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <Projects portfolioData={portfolioData} />
    </div>
  );
}
