const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const { fetchJson, cmd, citel, Config, tlang } = require('../lib')

cmd({

            pattern: "ss",

            desc: "web ss", 

            react: "📸",

            category: "downloader"

            

            

        },

        async(Void, citel, text) => {

            if (!text) return

const webss = await fetchJson(`https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}`)

            citel.reply (`*Screenshot is taking, please wait...*`)

       Void.sendMessage(citel.chat, {

                image: {

                    url: `https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}` ,

                },

                caption: tlang().footer,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "fb",

            desc: "fb down",

            react: "📥",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdl = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/facebook?url=${text}&apikey=prabath`)

const videolink = fbdl.result[0].url[0].url

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Video*`);

       Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                caption: tlang().footer,

            }, {

                quoted: citel,

            });

 }

)
cmd({

            pattern: "fbs",

            desc: "fb down",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdls = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=${Config.botapikey}`)

const videolink = fbdls.result.audio

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Audio*`);

       return Void.sendMessage(citel.chat, {

                audio: {

                    url: videolink ,

                },

                mimetype: "audio/mpeg",

                fileName: `prabath-md-fb-song-downloader`,

            }, {

                quoted: citel,

            });

        }

    )


cmd({

            pattern: "video",

            desc: "video dl",

            react: "📽️",

            category: "downloader"

        },

        async(Void, citel, text) => {    
        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];
            if (!text) return     
            
const tvideo = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/ytmp4?url=${anu.url}&apikey=prabath`)

const videolink = tvideo.download

            citel.reply (`┏━━━━━✦❘༻༺❘✦━━━━━━┓\n                  *★𝘝𝘐𝘋𝘌𝘖 𝘐𝘕𝘍𝘖★*\n\n🌐 *T͙i͙t͙l͙e͙:* ${anu.title}\n\n⌚ *D͙u͙r͙a͙t͙i͙o͙n͙:* ${anu.timestamp}\n\n👁️‍🗨️ *V͙i͙e͙w͙e͙r͙s͙:* ${anu.views}\n\n📎 *U͙r͙l͙:* ${anu.url}\n\n⤴ *U͙p͙l͙o͙a͙d͙e͙d͙:* ${anu.ago}\n\n👨‍🎓 *A͙u͙t͙h͙o͙r͙:* ${anu.author.name}\n┗━━━━━✦❘༻༺❘✦━━━━━━┛\n\n_Genarted By Dark SamuZa_`);
            return Void.sendMessage(citel.chat, {
                video: {
                    url: videolink ,

                },

                mimetype: "document/mp4"",
                caption: tlang().footer,

            }, {

                quoted: citel,

            });

        }

    )
    
    
    cmd({

            pattern: "song",

            desc: "song dl",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {    

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

            if (!text) return     

            

const tsong = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/ytmp3?url=${anu.url}&apikey=prabath`)

const audiolink = tsong.download

            citel.reply (`┏━━━━━✦❘༻༺❘✦━━━━━━┓\n                    *★𝘝𝘐𝘋𝘌𝘖 𝘐𝘕𝘍𝘖★*\n\n🌐 *T͙i͙t͙l͙e͙:* ${anu.title}\n\n⌚ *D͙u͙r͙a͙t͙i͙o͙n͙:* ${anu.timestamp}\n\n👁️‍🗨️ *V͙i͙e͙w͙e͙r͙s͙:* ${anu.views}\n\n📎 *U͙r͙l͙:* ${anu.url}\n\n⤴ *U͙p͙l͙o͙a͙d͙e͙d͙:* ${anu.ago}\n\n👨‍🎓 *A͙u͙t͙h͙o͙r͙:* ${anu.author.name}\n┗━━━━━✦❘༻༺❘✦━━━━━━┛\n\n_Genarted By Dark SamuZa_`);

            return Void.sendMessage(citel.chat, {

                audio: {

                    url: audiolink ,

                },

                mimetype: "audio/mpeg",

                

            }, {

                quoted: citel,

            });

        }

    )


