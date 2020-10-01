/**
 * 
 * @param {Array} pool array consisting of lottery candidate configs
 * @param {Array} pool[] array consisting of the candidate return value and its weight
 * @param {*} pool[][0] lottery candidate return value
 * @param {number} pool[][1] lottery candidate weight, number should be greater than 0
 */
const weightedLottery = (pool) => {
    // lifted from https://blobfolio.com/2019/10/randomizing-weighted-choices-in-javascript/
    // get the theoretical total of array items if we created array keys for each candidate weight
    let total = 1
    for (let i = 0; i < pool.length; ++i) {
        total += pool[i][1]
    }

    // get a random 'key' from our theoretical lottery.length
    const threshold = Math.floor(Math.random() * total);

    // loop through the actual pool generating key ranges as we go until we find the
    // where our winning number would have been
    total = 0
    for (let i = 0; i < pool.length; ++i) {
        total += pool[i][1]

        if (total >= threshold) {
            return pool[i][0]
        }
    }
}
export default weightedLottery