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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_19_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTksXG4gICAgICAgIDQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICA5NixcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MixcbiAgICAgICAgMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3LFxuICAgICAgICAyMixcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBPMHRpZmNWR24zVkg5TUlHOGsrUDQrVnBMRkVsdmlPRG5BV0VOckNkTkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRQeWxNUTgxUnJ1QnhNSnVEbTRvcGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDJkNTFhNWQtMGMzNS00ZDcxLWI5NjgtMTI5YTBlMmEwODlmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMzgsXG4gICAgICAyMzQsXG4gICAgICA3NyxcbiAgICAgIDIxMyxcbiAgICAgIDIzNCxcbiAgICAgIDY4LFxuICAgICAgMTI0LFxuICAgICAgNTIsXG4gICAgICAzMSxcbiAgICAgIDI1MCxcbiAgICAgIDE5MCxcbiAgICAgIDE2OSxcbiAgICAgIDE5NSxcbiAgICAgIDc0LFxuICAgICAgMjIyLFxuICAgICAgMTc1LFxuICAgICAgMTk4LFxuICAgICAgMjM0LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDUxLFxuICAgICAgMTQ3LFxuICAgICAgMTY1LFxuICAgICAgMjEzLFxuICAgICAgNTksXG4gICAgICAyMTAsXG4gICAgICAxMTAsXG4gICAgICAyMzgsXG4gICAgICAxNTgsXG4gICAgICAxODUsXG4gICAgICAzOCxcbiAgICAgIDE4MyxcbiAgICAgIDE4MyxcbiAgICAgIDE4MyxcbiAgICAgIDU3LFxuICAgICAgNTQsXG4gICAgICAxMTMsXG4gICAgICAxOSxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1KUkpSMTRRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDYzOTI2Mzg2OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2FnZSBQcmVjeUJcIixcbiAgICBcImxpZFwiOiBcIjE3NjczODQwNzU0ODIyOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pYQ2hJa0JFTHpqcTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU0pPM2ZLaWRwTlBCYUZGWFRsVjcyNXcvUkxpUnMwT3dWeWdmcFM4cmpCdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSK2pTWVlaNWJ2dWRSaDEvWGNIblc4TXAzWXJyNUhWRnVsVjdQSjFYcVlNRCtyVWUwTUgrcVhYVXcva3Q5U09xcW1rcThDb3NOOXRObEJnbHJLS0pEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhSEk4OGV5MjIwUGorYjFRMTRwYjFQUWt6L3BBZVRhekxSQ2FQSk1DbjF4YzNTUkFjZ2RtYjRZUzZLNHB4TkpzSzAzbDFKdllSVGlUSXdnclRRaXdpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYzOTI2Mzg2OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI4NDczNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
