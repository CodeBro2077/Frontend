import './Content.scss'

import Category from "../../constructor/category/Category";
import Cards from "../../constructor/cards/Cards";

function Content() {
    return (
        <div className="main__content content-main">
            <Category />

            <Cards />
        </div>
    );
}

export default Content;
