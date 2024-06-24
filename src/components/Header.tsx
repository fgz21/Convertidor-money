import React from 'react';

const Header: React.FC = () => {
    return (

       <header className="bg-base-200 text-white py-4">
        <div className="navbar bg-base-100 justify-around">
          <div className="flex">
            <a className="btn btn-ghost text-xl border-cyan-400 hover:bg-cyan-700 ">Developing by Ynx</a>
          </div>
          <div className="flex-none border-cyan-400">
            <ul className="menu menu-horizontal px-1">
              <li className = "flex justify-center ">
                <a href="https://github.com/fgz21" target="_blank" rel="noopener noreferrer" className="border-cyan-400 hover:bg-cyan-700 ">
                  <i className="fab fa-github fa-2x" />
                </a>
              </li>
              <li>
                <details className= "flex justify-center hover:bg-cyan-700 ">
                  <summary>
                    More info
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li className="hover:bg-cyan-700"><a>Nothing here yet</a></li>
                    <li className="hover:bg-cyan-700"><a>Nothing here yet</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </header>

    );
};

export default Header;

