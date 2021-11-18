const { WebClient, LogLevel } = require("@slack/web-api");

const client = new WebClient(process.env.SLACK_TOKEN, {
  logLevel: process.env.NODE_ENV !== 'development' ? LogLevel.WARN : LogLevel.DEBUG
});

async function postAsUser(channelId, postMessageArgs) {
  try {
    // Call the chat.postMessage method using the WebClient
    const result = await client.chat.postMessage({
      channel: channelId,
      ...postMessageArgs
    });

    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = {
  postAsUser
}
