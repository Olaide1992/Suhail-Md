huconst fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348136514115";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_43_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzLFxuICAgICAgICAyLFxuICAgICAgICA0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgODIsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDUwLFxuICAgICAgICA3LFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmeDBDNVhKMDM1bkIweGdjWFpZWHlTemROWEhSSmlLcFNMRnRZVFByQms0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItbHptWHl5NFN0cS1ybFhvYTZKNmhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVhMjFjNzAzLWRlYjMtNGRhNC04Zjg0LTlkYzBhNTE1NDdiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxNCxcbiAgICAgIDU5LFxuICAgICAgMTE5LFxuICAgICAgMTY0LFxuICAgICAgMTE2LFxuICAgICAgMTA5LFxuICAgICAgMTY5LFxuICAgICAgMTk0LFxuICAgICAgMTI0LFxuICAgICAgMTc2LFxuICAgICAgMjcsXG4gICAgICA4MSxcbiAgICAgIDE5MCxcbiAgICAgIDEzOCxcbiAgICAgIDIyNyxcbiAgICAgIDE4LFxuICAgICAgNyxcbiAgICAgIDMsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgMjMyLFxuICAgICAgNTksXG4gICAgICAxMzIsXG4gICAgICAyMzUsXG4gICAgICAxNzksXG4gICAgICAyNDMsXG4gICAgICA2NixcbiAgICAgIDE2OSxcbiAgICAgIDMsXG4gICAgICA2OSxcbiAgICAgIDE0NyxcbiAgICAgIDQ0LFxuICAgICAgMjA3LFxuICAgICAgNjcsXG4gICAgICAzMCxcbiAgICAgIDEzLFxuICAgICAgMjUzLFxuICAgICAgMjEsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzFFRlhCUlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzY1MTQxMTU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFkZWJheW8gT2xhaWRlXCIsXG4gICAgXCJsaWRcIjogXCIyMTM4MTIzMzAzODE0ODQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNRDNnY01CRU5LcXFMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNaejE3TUN4M0IrbTF6dnlhV3hLSU1mYkY3UmlMaDIvdmFDVWQ0bTVyQ2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWlFvRlBiVkVCTmZqcjVXM1dwaHNiUE9CUnNIN1JaSk94S0NDd3ZBYjBrVjR3S1hsMFBiSHkrWXJIY2I3ajA5OUR2SU04NkpOcDdOaXVObjZVWkRYQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYlRCVzJPNkJLTzRvdWlmeFdOcW1ZMHJHY1NUbjdpQUFRdy9QeE42NGJ4ZXhyNmVTeVRsMmYyTW40ZzZQZlRiSjlwWEd6SkRGbXhFTmE4aXlhL3JZaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjUxNDExNTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0MjI2MTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
