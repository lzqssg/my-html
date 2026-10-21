// 滚动入场动画：卡片进入视口时淡入上浮
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry, i) {
                if (entry.isIntersecting) {
                    // 依次错开一点时间，产生级联效果
                    setTimeout(function () {
                        entry.target.classList.add("visible");
                    }, i * 120);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    items.forEach(function (el) {
        observer.observe(el);
    });
});
