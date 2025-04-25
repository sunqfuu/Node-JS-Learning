// Header Function
const header = () => {
    console.log("Header");
}

//export ile modül dışına aktarıyoruz
module.exports = header;

const footer = () => {
    console.log("footer")
}
module.exports = footer;