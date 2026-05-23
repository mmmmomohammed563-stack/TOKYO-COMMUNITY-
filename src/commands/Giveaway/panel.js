import {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} from 'discord.js';

export default {

    data: new SlashCommandBuilder()
        .setName('panel')
        .setDescription('Tokyo Community Panel'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setColor('#8b0000')
            .setTitle('『 TOKYO COMMUNITY 』')
            .setDescription(`
> Welcome to TOKYO COMMUNITY

اضغط على الأزرار بالأسفل للتعرف على السيرفر أكثر.
            `)
            .setImage('https://cdn.discordapp.com/attachments/1493320568660033590/1507819135646830672/tokyo.png?ex=6a13497f&is=6a11f7ff&hm=3eebc415ba15b39c2edf76d5fc7213ceae47a2ccae54af4a6ac141b185337d7d&')
            .setThumbnail(interaction.guild.iconURL())
            .setFooter({
                text: 'TOKYO COMMUNITY'
            });

        const row = new ActionRowBuilder().addComponents(

            new ButtonBuilder()
                .setCustomId('rules')
                .setLabel('القوانين')
                .setEmoji('📜')
                .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
                .setCustomId('about')
                .setLabel('من نحن')
                .setEmoji('🗾')
                .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
                .setCustomId('boost')
                .setLabel('ميزات البوست')
                .setEmoji('🔥')
                .setStyle(ButtonStyle.Danger)
        );

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });

    },
};
