/**
 * Список ендпоинтов к API бэку.
 */
export const API_URL = {
    apiUrl: window.location.href.includes("https://leoka-estetica-dev.ru") || window.location.href.includes("http://localhost:4200/")
        ? "https://leoka-estetica-dev.ru.net"
        // ? "http://localhost:9992"
        : window.location.href.includes("https://leoka-estetica-test.ru")
            ? "https://leoka-estetica-test.ru.net"
            : "https://leoka-estetica.ru.net"
};