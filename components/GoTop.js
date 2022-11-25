import { TbHandFinger } from 'react-icons/tb'
import * as React from 'react';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

export default function GoTop() {
    
    React.useEffect(() => {
        tippy('[data-tippy-content]:not(#avatar)', {
            placement: 'bottom',
            theme: 'material'
          }
        );

        var scrollSmoothTo = function (position) {
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = function(callback, element) {
                    return setTimeout(callback, 17);
                };
            }
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var step = function () {
                var distance = position - scrollTop;
                scrollTop = scrollTop + distance / 5;
                if (Math.abs(distance) < 1) {
                    window.scrollTo(0, position);
                } else {
                    window.scrollTo(0, scrollTop);
                    requestAnimationFrame(step);
                }
            };
            step();
        };

        const gotop = document.getElementById('gotop');
        gotop.addEventListener('click', function(){
            scrollSmoothTo(0);
        }) 

        window.addEventListener('scroll', function(){
            if (document.documentElement.scrollTop > 600) {
                gotop.classList.remove('scale-0')
            } else {
                gotop.classList.add('scale-0')
                
            }
        })
    }, [])

    return (
        <div id="gotop-box" className="fixed right-10 bottom-16">
            <button id="gotop" className="sacle-0 transition duration-300 hidden lg:block">
                <span className="block text-3xl text-gray-500 hover:text-gray-700
                transition duration-300" data-tippy-content="返回顶部"><TbHandFinger /></span>
            </button>
        </div>
    )
}