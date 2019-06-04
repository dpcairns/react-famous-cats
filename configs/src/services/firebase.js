const config = {
    // config goes here
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();