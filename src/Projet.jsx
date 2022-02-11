import './sass/components/Projet.scss';

export default function Projet(props){
    return (
        <article className="Projet">
            <img src={"images/projets/" + props.pid + ".png"} alt=""/>
            <div className="contenu">
                <h2 className="nom">{props.nom}</h2>
                <p className="desc">{props.desc}</p>
                <div className="liens">
                    <a href={props.github_link}  target="_blank"> -&gt; GitHub</a>
                    <a href={props.project_link} target="_blank"> -&gt; Projet</a>
                </div>
                <p className="date">{props.date}</p>
            </div>
        </article>
    );
}