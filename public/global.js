(function(){

    /**
     * 导航栏动态样式
     */
    var headroom = function(){
        const nav = document.getElementById('nav');
        if(document.documentElement.scrollTop!=0){
            nav.setAttribute('style', 'box-shadow: 0 1px 4px 0 rgb(0 0 0 / 0.05)');
        }else{
            nav.setAttribute('style', 'box-shadow: 0 0 0 0 #fff');
        }
    }
    headroom();
    window.addEventListener('scroll', headroom);

    /**
     * 头像点击动画
     */
    const avatar = document.getElementById('avatar');
    avatar.addEventListener('click', function(){ 
        avatar.setAttribute('style','animation: shake 2s');
        setTimeout(function(){
            avatar.setAttribute('style','animation: none');
        }, 500)
    })

})();