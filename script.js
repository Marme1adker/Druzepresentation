function startAnimations() {
    // Скрываем overlay
    document.getElementById("overlay").classList.add("hidden");

    // Немного задерживаем запуск анимаций
    setTimeout(() => {
        document.body.classList.add("start-animations");
    }, 500); // 500 миллисекунд для плавного перехода
}