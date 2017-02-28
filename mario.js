/*
 * printPyramid
 *

  here are some comments
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    for (var hash = "#"; hash.length <=(height); hash += "#")
      console.log(hash);
}

printPyramid(5);
