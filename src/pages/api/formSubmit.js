// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { firebase } from '@utility/initFirebase'
import { collection, getDocs, addDoc } from 'firebase/firestore/lite'

import { WebClient } from '@slack/web-api'

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.SLACK_ACCESS_TOKEN
const web = new WebClient(token)

const handler = async (req, res) => {
  const { body } = req
  const { firstName, lastName, email, notes } = body

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }
  const slackMessage = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `:rocket: *New Lead!* ― *${firstName} ${lastName}* ― ${email}
        ${new Date().toLocaleDateString('en-GB', options)}  ${
          notes ? `:: :spiral_note_pad: _${notes}_` : ''
        }`,
      },
    },
  ]

  try {
    // Firebase
    const leads = collection(firebase, 'leads')
    await addDoc(leads, { id: 1, ...body })

    // Slack
    await web.chat.postMessage({
      channel: '#seismic',
      blocks: slackMessage,
      text: `:rocket: New Lead! ${firstName} ${lastName}`,
    })

    res.status(200).json({ status: 'OK' })
  } catch (error) {
    console.log('error :>> ', error)
    res.status(500).json({ error })
  }
}

export default handler
