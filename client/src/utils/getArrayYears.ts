
export const getArrayYears = (): number[] => {
    const startYear = 2026;
    const currentYear = new Date().getFullYear();
    const arrayYears: number[] = [];
    for (let year = startYear; year <= currentYear; year++) {
        arrayYears.push(year);
    }
    return arrayYears;
};