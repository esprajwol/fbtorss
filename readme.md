# fbtorss

[![NPM version](http://img.shields.io/npm/v/htmlparser2.svg?style=flat)](https://npmjs.org/package/htmlparser2)
[![Downloads](https://img.shields.io/npm/dm/htmlparser2.svg?style=flat)](https://npmjs.org/package/htmlparser2)
[![Build Status](http://img.shields.io/travis/fb55/htmlparser2/master.svg?style=flat)](http://travis-ci.org/fb55/htmlparser2)
[![Coverage](http://img.shields.io/coveralls/fb55/htmlparser2.svg?style=flat)](https://coveralls.io/r/fb55/htmlparser2)
[![DeepScan grade](https://deepscan.io/api/teams/16471/projects/20426/branches/556113/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16471&pid=20426&bid=556113)

Lib to convert facebook post feed to RSS. You will need facebook public content permission to use to for any public pages.

## Installation
    npm install fbtorss

## Usage

```javascript
     fbtorss
    .getRss({
      facebookPageUrl: `https://www.facebook.com/cnet`,
      access_token: `accessTokenFromFacebook`,
    }) // Returns a Promise!
    .then( async (items) => {
      console.log(items);
          return resolve();
    })
    .catch(err => {
      console.log(err);
    });
```

Output (simplified):

```
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
  <title>W3Schools Home Page</title>
  <link>https://www.w3schools.com</link>
  <description>Free web building tutorials</description>
  <item>
    <title>RSS Tutorial</title>
    <link>https://www.w3schools.com/xml/xml_rss.asp</link>
    <description>New RSS tutorial on W3Schools</description>
  </item>
  <item>
    <title>XML Tutorial</title>
    <link>https://www.w3schools.com/xml</link>
    <description>New XML tutorial on W3Schools</description>
  </item>
</channel>

</rss>
```

## Working
This will call a request to graph facebook api via axios and then receive the data which in turn which convert them to `RSS` format.

## Issues
This is a development so reported issues will be resolved.

## Security contact information

To report a security vulnerability, please use the [prajwolkc.com.np](https://www.prajwolkc.com.np/).
