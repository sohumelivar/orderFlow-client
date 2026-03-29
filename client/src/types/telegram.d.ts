interface TelegramWebApp {
    initData: string;
}

interface Telegram {
    WebApp: TelegramWebApp;
}

interface Window {
    Telegram?: Telegram;
}