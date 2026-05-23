const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = {
  name: "panel",

  run: async (client, message) => {

    const embed = new EmbedBuilder()
      .setColor("#8b0000")
      .setTitle("『 TOKYO COMMUNITY 』")
      .setDescription(`
> Welcome to TOKYO COMMUNITY

اضغط على الأزرار بالأسفل للتعرف على السيرفر أكثر.
      `)
      .setImage("حط_رابط_الصورة_هنا")
      .setThumbnail(message.guild.iconURL())
      .setFooter({
        text: "TOKYO COMMUNITY"
      });

    const row = new ActionRowBuilder().addComponents(

      new ButtonBuilder()
        .setCustomId("rules")
        .setLabel("القوانين")
        .setEmoji("📜")
        .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
        .setCustomId("about")
        .setLabel("من نحن")
        .setEmoji("🗾")
        .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
        .setCustomId("boost")
        .setLabel("ميزات البوست")
        .setEmoji("🔥")
        .setStyle(ButtonStyle.Danger)
    );

    message.channel.send({
      embeds: [embed],
      components: [row]
    });

  }
};
