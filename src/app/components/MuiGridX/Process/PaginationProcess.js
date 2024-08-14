/**
 * ### Get render list by page
 * 
 * @param {array} list Source data
 * @param {number} page Current page number
 * @param {number} pageSize  The number of rows per page
 * @returns
 */
export const getRenderListByPage = (list, page, pageSize) => {
    let start = (page * pageSize) - pageSize;
    let end = start + pageSize;
    return list.slice(start, end);
}

/**
 * ### Get rows
 * 
 * @param {array} list Source data
 * @returns 
 */
export const getRows = list => list.length;

/**
 * ### Get pages
 * 
 * @param {number} rows Rows
 * @param {number} pageSize The number of rows per page
 * @returns 
 */
export const getPages = (rows, pageSize) => Math.ceil(rows / pageSize);