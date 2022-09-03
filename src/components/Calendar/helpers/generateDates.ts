const getDaysArray = (start: Date, end: Date): Date[] => {
    const arr: Date[] = [];
    for (const date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        arr.push(new Date(date));
    }
    return arr;
};

export const generateDates = (date: Date): Date[] => {
    return getDaysArray(firstDayOfMonth(date), lastDayOfMonth(date));
};

const firstDayOfMonth = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
};
const lastDayOfMonth = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};
