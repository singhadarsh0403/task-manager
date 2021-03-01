const sgMail = require('@sendgrid/mail')
 
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'adarsh.1721it1009@kiet.edu',
        subject:'Thanks for joining',
        text : `Welcome to this app, ${name}. Let me know how you go along with this app`
    }).then(() => {
      console.log('Status: SUCCESS')
    }).catch((e) => {
      console.log('Status: ERROR', e)
    })
}
 
const sendCancelEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from:'adarsh.1721it1009@kiet.edu',
        subject:'Sad to see you leave',
        text : `Apologies to any inconvienece caused, ${name}. Let me know how much can you rate this app`
    }).then(() => {
      console.log('Status: SUCCESS')
    }).catch((e) => {
      console.log('Status: ERROR', e)
    })
}
 
sendWelcomeEmail('adarshdude14@gmail.com','adarsh')
 
module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
