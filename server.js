import express from 'express'
import multer from 'multer'
import sgMail from '@sendgrid/mail'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express()
const upload = multer({ dest: 'uploads/' })

app.post('/send-email', upload.single('file'), async (req, res) => {
  const { name, email, message } = req.body

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

  const msg = {
    to: 'maxpowercharityau@gmail.com',
    from: 'no-reply@testdomain.com',
    subject: `New Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    attachments: attachment ? [attachment] : [],
  }

  try {
    await sgMail.send(msg)
    res.status(200).send('Email Sent')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error sending email')
  }
})

app.listen(3000, () => console.log('Server running on port 3000'))
