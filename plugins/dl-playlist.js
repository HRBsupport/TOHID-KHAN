import yts from 'yt-search';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `✳️ Example: *${usedPrefix + command}* Lil Peep hate my life`;
    m.react('📀');
    
    let result = await yts(text);
    let ytres = result.videos;
    
    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${index}┃ ${v.title}`,
            rows: [
                {
                    header: '🎶 MP3',
                    title: "",
                    description: `▢ ⌚ *Duration:* ${v.timestamp}\n▢ 👀 *Views:* ${v.views}\n▢ 📌 *Title:* ${v.title}\n▢ 📆 *Uploaded:* ${v.ago}\n`, 
                    id: `${usedPrefix}yta ${v.url}`
                },
                {
                    header: "🎥 MP4",
                    title: "" ,
                    description: `▢ ⌚ *Duration:* ${v.timestamp}\n▢ 👀 *Views:* ${v.views}\n▢ 📌 *Title:* ${v.title}\n▢ 📆 *Uploaded:* ${v.ago}\n`, 
                    id: `${usedPrefix}ytv ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, '  ≡ *HONORSBOT MUSIC*🔎', `\n 📀 Results for:\n *${text}*`, `Click Here`, ytres[0].image, listSections, m);
};

handler.help = ['playlist'];
handler.tags = ['dl'];
handler.command = ['playlist']; 
handler.disabled = false;

export default handler;
