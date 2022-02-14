import ListeProjets from './ListeProjets';
import './sass/components/Main.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Contact from './Contact';


export default function Main(props){
    return (
        <main className="Main">
            <h2 id="portfolio">Mes Projets</h2>
            <ListeProjets/>
            <h2 id="contact">Me contacter</h2>
            <Contact/>
        </main>
    );
}