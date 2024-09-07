import './styles/NavTabs.css'

export default function NavTabs() {
    return (
        <div className='navBody'>
            <h1 className='title'>
                Christopher Romero
            </h1>
            <ul className='navBar'>
                <li>
                    <a href="/">About Me</a>
                </li>
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="/resume">Resume</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
        
    )
}