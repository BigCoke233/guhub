import * as React from 'react';
import Link from 'next/link';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

export default function Nav() {
    React.useEffect(() => {
        const main = document.getElementsByTagName('body')[0];
        const navButton = document.getElementById('menu-icon');
        navButton.addEventListener('click', function(){
            if(main.classList.contains('menu-open')){
                main.classList.remove('menu-open');
                navButton.classList.remove('change')
            }else{
                main.classList.add('menu-open');
                navButton.classList.add('change')
            }
        })

        tippy('[data-tippy-content]:not(#avatar)', {
            placement: 'bottom',
            theme: 'material'
          }
        );
    }, []);

    return(
        <nav id="navigation" className="absolute top-0 inset-x-0 p-6 z-50">
            <style jsx>{`
              .container {
                display: inline-block;
                cursor: pointer;
                user-select: none;
                transition: 0.4s
              }
              .bar1, .bar2, .bar3 {
                width: 2em;
                height: 3px;
                background-color: #777;
                margin: 6px 0;
                transition: 0.4s;
              }
              .change {
                transform: rotate(180deg)
              }
              .change .bar1 {
                transform: translate(0, .55em) rotate(-45deg);
              }
              .change .bar2 {opacity: 0;}
              .change .bar3 {
                transform: translate(0, -.55em) rotate(45deg);
              }
            `}</style>
            <div className="flex flex-row justify-between" id="navigation-container">
                <div id="navigation-left">
                    <Link href="/" className="select-none">
                        <img src="avatar.jpg" data-tippy-content="Hi!" alt="navigation icon, a cartoon koala"
                        className="block rounded-full w-10 h-10 bg-slate-500 hover:scale-110 duration-300 transition" />
                    </Link>
                </div>
                <div id="navigation-right">
                    <div className="container" id="menu-icon">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}