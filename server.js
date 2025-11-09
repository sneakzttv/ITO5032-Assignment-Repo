import express from 'express'
import cors from 'cors'
import sgMail from '@sendgrid/mail'
import multer from 'multer'
import dotenv from 'dotenv'
import fs from 'fs'

// Allows access to process env vars, this is where our API keys are.
dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const app = express()
app.use(cors())
const upload = multer({ dest: 'uploads/' })

// Creates email data and sends.
app.post('/send-email', upload.single('file'), async (req, res) => {
  const { name, email, message } = req.body

  // Converts attatchment data if it's present.
  let attachment = null
  if (req.file) {
    const fileData = fs.readFileSync(req.file.path).toString('base64')
    attachment = {
      content: fileData,
      filename: req.file.originalname,
      type: req.file.mimetype,
      disposition: 'attachment',
    }
  }
  // Creates message data.
  const msg = {
    to: 'maxpowercharityau@gmail.com',
    from: 'maxpowercharityau@gmail.com',
    subject: `New Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    // Possibly one of my favourite operators, the ternary operator keeps code clean.
    attachments: attachment ? [attachment] : [],
  }

  // Attempts to send mail, catches and displays errors.
  try {
    await sgMail.send(msg)
    res.status(200).send('Email Sent')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error sending email')
  }
})

app.listen(3000, () => console.log('Server running on port 3000'))
