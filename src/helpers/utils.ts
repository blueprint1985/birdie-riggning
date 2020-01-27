export default class Utils {
    static extractMonthString(date: Date): string {
        const val: number = (date.getMonth()) + 1;
        return (val < 10) ? `0${val}` : `${val}`;
    }

    static extractDateString(date: Date): string {
        const val: number = date.getDate();
        return (val < 10) ? `0${val}` : `${val}`;
    }
}
