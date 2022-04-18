import {Link} from "react-router-dom";
import DCSLlogo from '../assets/DCSL-logo.png'

function HeaderComponent() {
  return (
    <header className="bg-slate-800 flex">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly min-w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <Link to='/' className="flex flex-row m-auto px-auto w-[260px]">
          <img className="w-8 h-8" src={DCSLlogo} alt=""></img>
          <h1 className="text-2xl leading-8 text-primary-500 font-semibold">
            DCSL Phone Catalog
          </h1>
        </Link>
        <Link to="/add/" className="m-auto bg-primary-500 hover:bg-primary-700 text-white text-sm mt-2 px-4 py-2 border rounded-full hover:border-primary-300 active:transform active:translate-y-1 active:bg-primary-300 transition">
          Add a new phone!
        </Link>
      </div>
    </header>
  );
}

export default HeaderComponent;
