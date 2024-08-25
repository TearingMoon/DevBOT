import dotenv from "dotenv";
dotenv.config();

import { client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async (message) => {
  console.log(message);

  if (!message?.author.bot) {
    message.author.send("Hello, I'm a bot!");
  }
});
