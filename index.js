const { RtmClient, CLIENT_EVENTS } = require('@slack/client');
const { WebClient } = require('@slack/client');

const token = process.env.SLACK_TOKEN;
// add export SLACK_TOKEN=xoxb-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxx to your profile

const web = new WebClient(token);

const channelId = 'C8JPXNLQ5'; // channel is flame-wars

// See: https://api.slack.com/methods/chat.postMessage
web.chat.postMessage(channelId, 'Hello, World!')
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);

