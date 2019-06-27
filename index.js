/**
 * AUTHOR: Prajwol KC
 * Fetch Facebook post and convert them to RSS format
 */

const axios = require('axios');

module.exports.getRss = (data) => {
    var facebookPageUrl = data.facebookPageUrl;
    var ACCESS_TOKEN = data.access_token;

    /* Validate url using regex */
    const facebookPageUrlRegEx = '(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(.*)?';
    let match = facebookPageUrl.match(facebookPageUrlRegEx);
    if (match) {
        return new Promise((resolve, reject) => {
            axios.get(`https://graph.facebook.com/v3.3?id=${facebookPageUrl}&access_token=${ACCESS_TOKEN}`)
                .then((response) => {
                    return response.data;
                })
                .then((response) => {
                    var {
                        name,
                        id
                    } = response;
                    return axios.get(`https://graph.facebook.com/v3.3/${id}/feed?fields=id,message,attachments,created_time,permalink_url&access_token=${ACCESS_TOKEN}`); // using response.data
                })
                .then((response) => {
                    var posts = response.data.data;
                    return posts;
                }).then((posts) => {
                    var rss = `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>RSS Feed</title>`;

                     posts.forEach((post) => {
                        var img = post.attachments ? post.attachments.data[0].media.image.src : 'http://lorempixel.com/g/400/200/';
                        rss += `<item><title>${post.message}</title><link>${post.permalink_url}</link><description>${post.message}</description><image><url>${img}</url><title>setbots.com</title><width>200</width><height>200</height></image><description>descption</description><meta>${post.message}</meta><summary>${post.message}</summary><pubdate>${post.created_time}</pubdate><link>${post.permalink_url}</link></item>`;
                    });
                    rss += `</channel></rss>`;
                    return resolve(posts)
                })
                .catch((err) => {
                    return reject(err)
                });
        })
    } else {
        return `💩${facebookPageUrl}💩💩💩💩💩`;
    }



}


