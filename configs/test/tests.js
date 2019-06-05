import './html-equal.js';
import { app } from '../src/firebase.js'; // import may be different depending on file structure
// // individual test files...
// import './whatever.test.js';
QUnit.done(() => {
    app.delete();
}); 
