const utils = require("./util");

async function main() {
  // These two are very similar, but not identical.
  // I like to keep them separate in case I want to drastically alter the
  // messaging between the two later on
  // - Dan
  const announcementsBlock = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Good morning! Today is another gigs day! :moneybag::smile::computer:",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":handshake: If you’ve got a job posting: post it in #dd-job-board!",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":female-technologist: If you’re looking for work: post it in #dd-job-board!",
      },
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: ":question: Posts from the same week are allowed. Need help? Ask us in #dd-community",
        },
      ],
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":warning: Please read our Topic Gigs Rules before posting.",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "View Rules",
          emoji: true,
        },
        style: "primary",
        value: "rules",
        url: "https://denverdevs.org/resources/job-board-rules/",
        action_id: "button-action",
      },
    },
    {
      type: "divider",
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: ":pencil: Get help formatting your post with /gig_bot",
        },
      ],
    },
  ];
  const jobBoardBlock = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Good morning! Today is another gigs day! :moneybag::smile::computer:",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":handshake: If you’ve got a job posting: post it here!",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":female-technologist: If you’re looking for work: post it here!",
      },
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: ":question: Posts from the same week are allowed. Need help? Ask us in #dd-community",
        },
      ],
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":warning: Please read our Topic Gigs Rules before posting.",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "View Rules",
          emoji: true,
        },
        style: "primary",
        value: "rules",
        url: "https://denverdevs.org/resources/job-board-rules/",
        action_id: "button-action",
      },
    },
    {
      type: "divider",
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: ":pencil: Get help formatting your post with /gig_bot",
        },
      ],
    },
  ];
  await utils.postAsUser("C040F1EV5", { blocks: announcementsBlock });
  await utils.postAsUser("C042VCKLM", { blocks: jobBoardBlock });
}

main();
