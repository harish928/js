function generateOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}
alert("your OTP IS ::" + generateOTP())
console.log("OTP of 4 digits:" + generateOTP())
