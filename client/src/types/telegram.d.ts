interface TelegramWebApp {
    initData: string;
    ready: () => void;
    expand: () => void;
}

interface Telegram {
    WebApp: TelegramWebApp;
}

interface Window {
    Telegram?: Telegram;
}