import { api } from './axios';
import { tokenService } from './token';

export type TelegramAuthRequest = {
  initData: string;
};

type AuthResponse = {
    accessToken: string;
    user: {
        telegramId: string,
        role: string,
        name: string,
    }
};

export const authWithTelegram = async (initData: TelegramAuthRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/telegram', {initData: initData});
    console.log('{initData}', {initData});
    

    const data = response.data as AuthResponse;

    tokenService.setToken(data.accessToken);

    return data;
};