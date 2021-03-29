const prodKeys = {
    secret: process.env.SECRET,
    google: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
    },
    facebook:{
        FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
        FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET
    },
    auth:{
        user: process.env.AUTH_USER,
        pass: process.env.PASS
    },
    razorpay_auth:{
        key_id: process.env.RAZOR_ID,
        key_secret: process.env.RAZOR_SECRET
    }
}

export default prodKeys;