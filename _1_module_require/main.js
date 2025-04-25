// Export (header) Sinle Function

const headerOther = require('./header.js');


//node main.js
headerOther();


// Export Footers Multi Function (Alias)

const foot1Function = require('./footer.js').foot1;
const foot2Function = require('./footer.js').foot2;

foot1Function();
foot2Function();

