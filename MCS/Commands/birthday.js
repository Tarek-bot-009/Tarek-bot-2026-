"use strict";

module.exports.config = {
name: "birthday",
aliases: ["bday", "hbd"],
version: "5.0.0",
credit: "MOHAMMAD BADOL",
role: 0,
prefix: true,
cooldown: 5,
description: "Stylish Birthday Wish",
category: "fun"
};

module.exports.onStart = async function (api, event, args) {
try {

if (Object.keys(event.mentions).length === 0) {  
        return api.sendMessage(  
            "🎂 | একজনকে মেনশন করে তারপর আবার কমান্ডটি ব্যবহার করুন।",  
            event.threadID,  
            event.messageID  
        );  
    }  

    const targetID = Object.keys(event.mentions)[0];  
    const targetName = event.mentions[targetID].replace("@", "");  

    const mentions = [{  
        id: targetID,  
        tag: targetName  
    }];  

    const send = (msg) => {  
        api.sendMessage(  
            {  
                body: msg,  
                mentions  
            },  
            event.threadID  
        );  
    };  

    send(

`╭━━━━━━━━━━━━━━━━━━╮
┃ 🎂 𝐇𝐀𝐏𝐏𝐘 𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 🎂
╰━━━━━━━━━━━━━━━━━━╯

🎉 শুভ জন্মদিন @${targetName}

💖 তোমার জীবনের প্রতিটি মুহূর্ত
হোক সুখ, শান্তি ও ভালোবাসায় ভরা।

🎂 Many Many Happy Returns
Of The Day!

━━━━━━━━━━━━━━━━━━
🤖 SAEEM-BOT-V5`
);

const messages = [

{
delay:3000,
msg:`🎁 @${targetName}

অনেক অনেক শুভেচ্ছা ও ভালোবাসা রইলো।

🎂 শুভ জন্মদিন।`
},

{
delay:6000,
msg:`💖 @${targetName}

সারাজীবন হাসিখুশি থেকো,
আল্লাহ তোমাকে সবসময় ভালো রাখুন।`
},

{
delay:9000,
msg:`🌹 @${targetName}

তোমার জীবনের প্রতিটি স্বপ্ন
পূরণ হোক।

🎉 Happy Birthday`
},

{
delay:12000,
msg:`🎊 @${targetName}

আজকের দিনটা
অনেক সুন্দর কাটুক।

🎂 শুভ জন্মদিন।`
},

{
delay:15000,
msg:`🎈 @${targetName}

অনেক সুখ
অনেক ভালোবাসা
অনেক সফলতা কামনা করি।`
},

{
delay:18000,
msg:`🌸 @${targetName}

তোমার আগামী দিনগুলো
হোক আনন্দে ভরপুর।

🥳 শুভ জন্মদিন।`
},

{
delay:21000,
msg:`🎂 @${targetName}

May Allah bless you with
good health, happiness
and success.

❤️ Happy Birthday`
},

{
delay:24000,
msg:`🎁 @${targetName}

জন্মদিনের অনেক
অনেক শুভেচ্ছা।

💝 Stay Blessed.`
},

{
delay:27000,
msg:`💞 @${targetName}

তোমার প্রতিটি ইচ্ছা
পূরণ হোক।

🎉 Many Many Happy Returns
Of The Day.`
},

{
delay:30000,
msg:`🌹 @${targetName}

সব সময় হাসিখুশি থেকো।

🤍 শুভ জন্মদিন।`
},

{
delay:33000,
msg:`🎊 @${targetName}

তোমার জীবন ভরে উঠুক
ভালোবাসা ও সফলতায়।

🎂 Happy Birthday`
},

{
delay:36000,
msg:`🎈 @${targetName}

Always Keep Smiling 😊

🎉 Enjoy Your Special Day.`
},

{
delay:39000,
msg:`💖 @${targetName}

আজকের এই বিশেষ দিনে
অনেক অনেক শুভকামনা।

🥳 Happy Birthday`
}

];

messages.forEach(({ delay, msg }) => {
setTimeout(() => {
send(msg);
}, delay);
});

} catch (err) {
console.log(err);
return api.sendMessage(
`❌ Birthday Command Error

${err.message}`,
event.threadID,
event.messageID
);
}
};
