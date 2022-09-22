
            function animate(obj, target , hanshu) {
                console.log(window.pageYOffset);
                clearInterval(obj.timer);
                obj.timer = setInterval(function() {  // 动画函数
                    var step = (target - window.pageYOffset) / 10; // 因为每次都要重新计算 所以要放在计时器开始后
                    step = step > 0 ? Math.ceil(step) : Math.floor(step); // 取整
                    if (window.pageYOffset == target) {
                    clearInterval(obj.timer);
                    if (hanshu) {
                        hanshu();
                    }
                }
                window.scroll(0,window.pageYOffset + step)
            },15)
            }