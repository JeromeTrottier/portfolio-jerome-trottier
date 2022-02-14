import './sass/components/MenuBurger.scss';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuBurger(props){
    return (
        <div className="MenuBurger">
            <label htmlFor="burgerCheck">
            <MenuIcon color="primary"/>
            </label>
            <input name="burgerCheck" id="burgerCheck"type="checkbox"/>
        </div>
    );
}