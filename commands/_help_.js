/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "h",
            alias: ["m"],
            desc: "Help list",
            category: "general",
            react: "✨",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭────《 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 》─────⊷\n`
                str +=
                    '```' + `\n
` + '```'
                str += `╭───『 ` + fancytext('Commands', 57) + `』──◆`
                for (const category in cmds) {
                    str += `               
┃ 𓇻╭────── ∘°❉°∘ ──────✫
┃ 𓇻│ ✯---- ${tiny(category)} ----⦿
┃ 𓇻╰────── ∘°❉°∘ ──────✫
┃  ┌┤\n`
                    for (const plugins of cmds[category]) {
                        str += `┃ 𓇻│ ✭ ${plugins}\n`
                    }
                    str += `┃ 𓇻╰─────────────✫`
                }

                str += `\n╰━━━━━━━━━━━──✫\n`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
