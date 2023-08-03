/*
 * @Author: MBCOFFICE\YC01538 houling0313@163.com
 * @Date: 2023-07-04 13:46:24
 * @LastEditors: MBCOFFICE\YC01538 houling0313@163.com
 * @LastEditTime: 2023-07-04 13:47:34
 * @FilePath: \demo\teacher_yuan\promise\p10.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Promise.resolve(1).then(30).then(Promise.resolve(3)).then(console.log)