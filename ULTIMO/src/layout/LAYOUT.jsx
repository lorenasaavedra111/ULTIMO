import { Outlet, useNavigation } from "react-router-dom";

import "../styles/Base.sass"
import FOOTER from "../components/FOOTER";
import HEADER from "../components/HEADER";


const LAYOUT = () => {
  return (
    <div className="LAYOUT">
        <HEADER/>
        <main className="MAIN">
            {
                Navigation.state==="Loading"&&(
                    <div className="Loading"></div>
                )
            }
            <Outlet/>
        </main>
        <FOOTER/>
    </div>
  )
}

export default LAYOUT