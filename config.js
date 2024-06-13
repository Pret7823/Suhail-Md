const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349063926386";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_18_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICA3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICA1NCxcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNHNUQzNWxXSm1JQnJ4MDJTWEM5TVg5alUxbHRGcGhxZFFlN0R5RTlvUmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhFcG83RUZuUkIyWE9qWnE5RDUtRmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjFmOGE0YzAtOGFiNC00YWRiLTlkNDktNjRlYjU1MTQ5ZDI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNSxcbiAgICAgIDQ2LFxuICAgICAgOTMsXG4gICAgICA1MCxcbiAgICAgIDE4MSxcbiAgICAgIDQ0LFxuICAgICAgMTgyLFxuICAgICAgNjcsXG4gICAgICA4MyxcbiAgICAgIDIzMixcbiAgICAgIDEyMixcbiAgICAgIDM2LFxuICAgICAgMTIsXG4gICAgICA5NCxcbiAgICAgIDgyLFxuICAgICAgNDYsXG4gICAgICAyMDgsXG4gICAgICAxNixcbiAgICAgIDY2LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMjMyLFxuICAgICAgNjUsXG4gICAgICAxMjYsXG4gICAgICAyNTIsXG4gICAgICAxODgsXG4gICAgICAxMzEsXG4gICAgICA5NSxcbiAgICAgIDUwLFxuICAgICAgMTc2LFxuICAgICAgMTc2LFxuICAgICAgNTQsXG4gICAgICA3NixcbiAgICAgIDE2NCxcbiAgICAgIDIwLFxuICAgICAgMTk1LFxuICAgICAgMTAxLFxuICAgICAgMjA3LFxuICAgICAgODMsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVRYM01ZRThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjM5MjYzODY6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTYWdlIFByZWN5QlwiLFxuICAgIFwibGlkXCI6IFwiMTc2NzM4NDA3NTQ4MjI6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTC9jeVo0TUVPU3FxN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTSk8zZktpZHBOUEJhRkZYVGxWNzI1dy9STGlSczBPd1Z5Z2ZwUzhyakJ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRELzBtdE9CQ3BkWm51am5HYU8vaWZaUkZOYjk3a2hmU3h3WUdxWFoxRXE0MTlUcGl0bitTZ0RjVXRuQ05QM3Q5WXo3ZGUzQXNIalNjWjB4bTN1ZEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJJUHgwV0FldDFKL3BYbmM2NnVzSVVuTFRrQTBKZ0gvbTlKUlhHVHdYayttUGFod3pMV3lDR0EyTytzWWVCUEJndDlGZERvTnhzamt5WW9NdGF0YkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjM5MjYzODY6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Mjc3NDc5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
