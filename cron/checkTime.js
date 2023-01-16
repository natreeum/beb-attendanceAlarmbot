const { EmbedBuilder } = require('discord.js');

const checkTime = async (client) => {
  const channel = await client.channels.fetch('1064542813838114897');
  const qr = new EmbedBuilder()
    .setColor(0xd070fb)
    .setTitle('QR보러가기')
    .setURL(
      'https://discord.com/channels/1061497447035174952/1064542813838114897/1064547192133648474'
    );
  const jjaggak = new EmbedBuilder()
    .setColor(0x008000)
    .setTitle('째깍이 깨우러 가기')
    .setURL('https://urclass.codestates.com/');

  const now = new Date();
  const timeDiff = 9 * 60 * 60 * 1000;
  const nowGetTime = now.getTime();
  const kst = new Date(nowGetTime + timeDiff);
  const kstHour = kst.getHours();
  const kstMinute = kst.getMinutes();

  if (kstHour === 8 && kstMinute === 50) {
    const message = await channel.send({
      content: `@everyone 아침 입실시간입니다~⏰`,
      embeds: [qr, jjaggak],
    });
    message.react('✅');
  }
  if (kstHour === 18 && kstMinute === 0) {
    const message = await channel.send({
      content: `@everyone 저녁 퇴실시간입니다~⏰`,
      embeds: [qr, jjaggak],
    });
    message.react('✅');
  }
};

module.exports = {
  checkTime,
};
