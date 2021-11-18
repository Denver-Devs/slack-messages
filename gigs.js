const utils = require('./util');

async function main() {
  const blocks = encodeURIComponent(
    JSON.stringify({
      // put block content here
    })
  )
  await utils.postAsUser('replace-me-with-channel-id', { blocks })
}

main();
