import ListeProjets from './ListeProjets';
import './sass/components/Main.scss';
import Contact from './Contact';
import FiltreProjets from './FiltreProjets';
import { useState } from 'react';


export default function Main(props){

    const [orderByAge, setOrderByAge] = useState('asc');
    const [orderByType, setOrderByType] = useState([]);

    return (
        <main className="Main">
            <h2 id="portfolio">Mes Projets</h2>
            <FiltreProjets orderByAge={orderByAge} setOrderByAge={setOrderByAge} orderByType={orderByType} setOrderByType={setOrderByType}/>
            <ListeProjets orderByAge={orderByAge} orderByType={orderByType}/>
            <h2 id="contact">Me contacter</h2>
            <Contact/>
        </main>
    );
}