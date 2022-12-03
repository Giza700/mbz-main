const express = require('express')
const nodemailer = require("nodemailer")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
const port = 3001

app.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "blogappmailer34@mail.com",
                pass: "fxfsrrljrrleubmt",
            },
        });
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'blogappmailer34@gmail.com',
            subject,
            html: `<h4>Name: ${name}<h4><h4>Email: ${email}<h4><h4>Message: ${message}</h4>`,
        });
        res.status(200).send("Email sent successfully")
    } catch (e) {
        res.status(500).send("Email could not be sent")
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})