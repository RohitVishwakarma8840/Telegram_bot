const { Telegraf } = require('telegraf')
const axios = require('axios');

// get secret token by opening the telegram and use botfather
// to create a new bot press /newbot and enter 
// access key is Done! Congratulations on your new bot. You will find it at t.me/coding_solution_rover_bot. 
// Use this token to access the HTTP API:

let binarysearch=`function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Find the middle element of the array
        let mid = Math.floor((left + right) / 2);

        // Check if the target is equal to the middle element
        if (arr[mid] === target) {
            return mid; // Found the target, return its index
        } else if (arr[mid] < target) {
            // If target is greater than the middle element, search the right half
            left = mid + 1;
        } else {
            // If target is smaller than the middle element, search the left half
            right = mid - 1;
        }
    }

    return -1; // Target not found
}`

const bot = new Telegraf('your access code ');
bot.start((ctx) => ctx.reply('Welcome to new coding bot from rohit'));

bot.command('binarysearchjs' , (ctx) => ctx.reply(binarysearch));
bot.command('whomadethis',(ctx) => ctx.reply("rohit "));

bot.on('sticker',(ctx)=>ctx.reply('❤️'));

bot.command('binarytreejs', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js');
    return ctx.reply(response.data);
})


bot.launch();