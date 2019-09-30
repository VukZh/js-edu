/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = "family",
  knowsProgramming = true,
  config = { family: 4 }
) {
  const findFactor = config[focus];
  // console.log(" -- " + findFactor);
  return knowsProgramming
    ? Math.ceil(800 / findFactor)
    : Math.ceil(1300 / findFactor);
};
