import { Client, Events, GatewayIntentBits } from "discord.js";
import ENV from "dotenv";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
ENV.config();
// EVENTS
client.on(Events.ClientReady, (readyClient) => {
    console.log(`Client is ready! Tag: ${readyClient.user.tag}.`);
});
client.login(process.env.TOKEN);
//# sourceMappingURL=index.js.map