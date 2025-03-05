let handler = async (m, { conn, usedPrefix, isOwner }) => {
  let vcard = `BEGIN:VCARD
VERSION:3.0
N:;ZERO;;;
FN:Mr ZERO 
ORG:ZERO
TITLE:Owner
item1.TEL;waid=628388188406
item1.X-ABLabel:Owner
X-WA-BIZ-DESCRIPTION:Developer of the Bot
X-WA-BIZ-NAME:Mr Honors 
END:VCARD`;

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: '*HonorsBot*',
      contacts: [{ vcard }]
    }
  }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['creator', 'creador', 'dueño'];

export default handler;
