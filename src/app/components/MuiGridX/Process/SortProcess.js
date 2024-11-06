import { renderToString } from "react-dom/server";
import moment from 'moment';

const isNumber = value => {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

const isDate = value => {
    const datePattern = [
        'YYYY-MM-DD',
        'YYYY/MM/DD',
        'YYYY-MM-DD hh:mm:ss',
        'YYYY/MM/DD hh:mm:ss',
        'YYYY-MM-DD hh:mm',
        'YYYY/MM/DD hh:mm'
    ]

    return datePattern.reduce((acc, pattern) => (
        moment(value, pattern, true).isValid() || acc
    ), false);
}

/**
 * @param {any[]} list 
 * @param {{data:string,type:boolean}} sort 
 */
export const sortList = (list, sort) => (
    sort.data ? list.sort((a, b) => {
        a = a[sort.data];
        b = b[sort.data];

        // Number Sort
        if (isNumber(a)) {
            a = parseFloat(a);
            b = parseFloat(b);
            return sort.type ? a - b : b - a;
        }

        // Date Sort
        if (isDate(a)) {
            a = moment(a).unix();
            b = moment(b).unix();
            return sort.type ? a - b : b - a;
        }

        // String Sort
        a = renderToString(a);
        b = renderToString(b);
        return sort.type ? a.localeCompare(b) : b.localeCompare(a);
    }) : list
)