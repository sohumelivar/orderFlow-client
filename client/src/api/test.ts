import { api } from './axios';

export const testRequest = async () => {
    const res = await api.post('/auth/telegram', {
  "initData": "query_id=AAGkhYEvAAAAAKSFgS_KctZv&user=%7B%22id%22%3A797017508%2C%22first_name%22%3A%22sohumelivar%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22sohumelivar%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2Fr6yk-Jw4OYIVqLNXT5-z1Eq2iMEoLtjS162tiTM4pBQ.svg%22%7D&auth_date=1772442523&signature=A_OpuY2MOrgh-Wd-SGTsr6GtpfFVJ7kGeW9wT8Ln95QEX-yE1c3noF5o1nqINy99_tGT1c8TyiAN6_F0agOLDw&hash=eb6c741634cdb28dcc974de3b343348a8d8c62c98bae420b12e600a377224e6f"
});
    return res.data;
};
