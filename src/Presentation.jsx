import './sass/components/Presentation.scss';

export default function Presentation(props){
    return (
        <section id="apropos" className="Presentation">
            <img src="images/autres/photo_profil.jpg" alt="Profil"/>
            <h1>Jérôme Trottier</h1>
            <h4>Passionné par la technologie, j’ai décidé de me lancer dans ce domaine pour en faire carrière. Que ce soit de la programmation web, jeu ou du design, j'aime avoir à relever des défis pour agrandir davantage mes connaissances sur ces sujets. Toujours en train d'apprendre, toujours en train de m'améliorer.
            </h4>
            <a href="Trottier_Jerome_CV_2022.pdf" download>Télécharger CV</a>
        </section>
    );
}