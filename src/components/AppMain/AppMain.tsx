
import Content from './MainContent/Content'
import Sidebar from './MainSidebar/Sidebar'

import './AppMain.scss'
const AppMain = () => {
    return (
        <div className="main">
            <div className="main__container">
                <Content />
                <Sidebar />
            </div>
        </div>
    );
};

export default AppMain;
