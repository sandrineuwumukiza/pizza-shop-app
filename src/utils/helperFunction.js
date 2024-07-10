// utils/timestampUtils.js

/**
 * Converts a UNIX timestamp to a UTC date and time string.
 *
 * @param {number} unixTimestamp - The UNIX timestamp to convert.
 * @returns {string} The UTC date and time string.
 */
function convertUnixToUtc(unixTimestamp) {
    const dateObj = new Date(unixTimestamp * 1000);
    return dateObj.toUTCString();
}

export default convertUnixToUtc;
