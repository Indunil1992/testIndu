let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: process.env.UserPoolId_cognitocognito1,
        AttributesToGet: ["sub", "address", "birthdate", "email", "family_name", "gender", "given_name", "locale", "middle_name", "name", "nickname", "phone_number"],
        Limit: 10
    }, function (error, data) {
        if (error) {
            console.log(error);
            console.log("errorrrrr");
            // implement error handling logic here
            throw error;
        }
        console.log("passsssss");
        console.log(data);
        // your logic goes within this block
    });

    callback(null, { "message": "Successfully executed" });
}