import {Link} from "react-router-dom";
import DCSLlogo from '../assets/DCSL-logo.png'

function HeaderComponent() {
  return (
    <header className="bg-black">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <Link to='/' className="flex flex-row">
        <img className="w-6 mx-2" src={DCSLlogo} alt=""></img>
        <h1 className="text-2xl leading-6 text-primary">
          DCSL Phone Catalog
        </h1>
      </Link>
      <Link to="/add/">
        <button className="bg-primary">Add New!</button>
      </Link>
      </div>
    </header>
  );
}

export default HeaderComponent;
