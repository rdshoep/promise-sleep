/*
 * @description
 *   Please write the sleep script's description
 * @author Rdshoep(rdshoep@126.com)
 *   http://www.rdshoep.com/
 * @version
 *   1.0.0(3/1/2017)
 */

'use strict';
const DEFAULT_DELAY_TIME = 1000;

/**
 * delay for promise
 * @param time sleep time(ms)
 * @returns {Promise}
 */
module.exports = function sleep(time) {
    let args = Array.prototype.slice.call(arguments, 1);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            args.length > 1 ? resolve(args) : resolve.apply(this, args)
        }, time || DEFAULT_DELAY_TIME);
    });
};