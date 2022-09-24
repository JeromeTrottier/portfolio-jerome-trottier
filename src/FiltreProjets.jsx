import './sass/components/FiltreProjets.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Multiselect from 'multiselect-react-dropdown';

export default function FiltreProjets(props){

    const changeAgeOrder = () => {
        switch (props.orderByAge) {
            case 'desc':
                props.setOrderByAge('asc');
                break;
            default:
                props.setOrderByAge('desc');
                break;
        }
    }

    const onSelect = (selectedList, selectedItem) => {
        props.setOrderByType(selectedList.map(item => item.id));
    }

    const onRemove = (selectedList, removedItem) => {
        props.setOrderByType(selectedList.map(item => item.id));
    }

    const projectTypes = {
        options: [{name: 'Jeux Vidéo', id: 'Jeu'},{name: 'Web', id: 'Web'}, {name: 'Design', id: 'Design'}, {name: '3D', id: '3D'}],

    };

    return (
        <div className="FiltreProjets">
            <button onClick={changeAgeOrder} className='orderByAge'>Date <ArrowBackIcon className={props.orderByAge}/></button>
            <Multiselect options={projectTypes.options} 
                         displayValue={"name"} 
                         showCheckbox={true} 
                         className={'multiSelect'} 
                         placeholder={'Filtrer par type :'} 
                         avoidHighlightFirstOption={true}
                         onSelect={onSelect}
                         onRemove={onRemove}
                         />
            {/* https://www.npmjs.com/package/multiselect-react-dropdown */}
        </div>
    );
}