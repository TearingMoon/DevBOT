# Quick Start Guide

## Define bot Token

If runned locally using Node create a local .env with the following code:

``` .env
        DISCORD_TOKEN = "Your Token Here"   
```

>📝 **NOTE:** Substitute 'Your Token Here' with the actual token of the discord bot. You can obtain the token from here [Discord Tokken OAuth2](https://discord.com/developers/docs/topics/oauth2)
>> ⚠️ **WARNING:**  be aware that you must keep this token secret.

Or if hosted in a VPS insert in your VPS Environment a new variable with the following name:

``` .env
        DISCORD_TOKEN
```

## Launch in local

To Launch in local environment run the following console command

```console
        npm run start
```
