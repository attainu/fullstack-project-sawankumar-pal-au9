import Contacts from '../model/contacts.js';
import config from '../config.js';
import nodemailer from 'nodemailer'; 

let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: config.auth
});

//add user query
export const AddQuery = async(req,res) => {
    // console.log(req.body)
    const date = new Date();
    const month = date.toLocaleString('default', { month:'long' });
    try{
        let data = {
            date : req.body.date ? req.body.date : `${date.getDay()} ${month} ${date.getFullYear()}`,
            userName : req.body.userName,
            userEmail : req.body.userEmail,
            phone : req.body.phone,
            comment : req.body.comment             
        }
        let mailDetails = { 
            from: config.auth.user, 
            to: data.userEmail, 
            subject: 'Customer service - Amazed.in', 
            html: `
                <p>Hi ${data.userName},</p>
                    <p>Thank you for contacting us.</p>
                    <p>Will contact you soon.</p>
                <p>Regards,</p>
                <p>Customer Service Team- Amazed</p> 
                
                <pre>This is an autogenerated reply for your message ...
                ${data.comment}
                </pre>
            `
        };
        const response = await Contacts.create(data)
            res.status(201).send({"success":"Successfully added the comment"})
            mailTransporter.sendMail(mailDetails, function(err, data) { 
                if(err) { 
                    console.log('Error Occurs'); 
                } else { 
                    console.log('Email sent successfully'); 
                } 
            }); 
        }

        catch(error){
            res.status(409).send({"err":error.message})
        }
};

//update contact info
export const updateContact = async (req, res) => {
    try {
        const _id = req.params.id
        const updaterequired = await Contacts.findByIdAndUpdate(_id, req.body.contact);

        res.status(204).send({"sucess":"Contact is updated successfully"});
    }

    catch (error) {
        res.status(404).send({"err":error.message})
    }
};