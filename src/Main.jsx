import ListeProjets from './ListeProjets';
import './sass/components/Main.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Main(props){
    return (
        <main className="Main">
            <section className="apropos">
                <h2>À propos</h2>
            </section>
            <ListeProjets/>
            <section className="contact">
                <h2>Contact</h2>
            </section>
        </main>
    );
}