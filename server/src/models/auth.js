import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OAuthTokens = mongoose.model(
  'OAuthTokens',
  new Schema({
    accessToken: { type: String },
    accessTokenExpiresAt: { type: Date },
    client: { type: Object }, // `client` and `user` are required in multiple places, for example `getAccessToken()`
    clientId: { type: String },
    refreshToken: { type: String },
    refreshTokenExpiresAt: { type: Date },
    user: { type: Object },
    userId: { type: String },
  })
);

const OAuthClients = mongoose.model(
  'OAuthClients',
  new Schema({
    clientId: { type: String },
    clientSecret: { type: String },
    redirectUris: { type: Array },
  })
);

// Seed data for axiom zen demo
OAuthClients.findOne({ clientId: 'demo' }).then(client => {
  if (client === null) {
    new OAuthClients({
      clientId: 'demo',
      clientSecret: 'demosecret',
      redirectUris: ['http://localhost:3000'],
    }).save(err => {
      if (err) console.error(err);
    });
  }
});

export { OAuthTokens, OAuthClients };
