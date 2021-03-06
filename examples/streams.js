const zulip = require('../lib/');

const config = {
  username: process.env.ZULIP_USERNAME,
  password: process.env.ZULIP_PASSWORD,
  realm: process.env.ZULIP_REALM,
};

zulip(config).then((z) => {
  // Fetch all streams
  z.streams.retrieve().then(console.log).then(() => {
    // Fetch user's subscriptions
    z.streams.subscriptions.retrieve().then(console.log);
  });
}).catch(err => console.log(err.msg));
