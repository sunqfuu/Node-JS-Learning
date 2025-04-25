// Export

const footer1 = () => {
    console.log("footer");
}

const footer2 = () => {
    console.log(new Date().getTime());
}

module.exports.foot1 = footer1;
module.exports.foot2 = footer2;

