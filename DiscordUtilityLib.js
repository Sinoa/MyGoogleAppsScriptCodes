// zlib/libpng License
//
// Copyright (c) 2021 Sinoa
//
// This software is provided 'as-is', without any express or implied warranty.
// In no event will the authors be held liable for any damages arising from the use of this software.
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it freely,
// subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not claim that you wrote the original software.
//    If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

class DiscordWebhookClient
{
  constructor(id, token)
  {
    this.webhookId = id;
    this.webhookToken = token;
    this.webhookUrl = "https://discord.com/api/webhooks/" + id + "/" + token;
  }


  sendMessage(message)
  {
    let options =
    {
      muteHttpExceptions : true,
      method : "post",
      contentType : "application/json",
      payload : message.toJson()
    };

    let url = this.webhookUrl;
    let response = UrlFetchApp.fetch(this.webhookUrl, options);
  }
}



class DiscordMessage
{
  setContent(content)
  {
    this.content = content;
    return this;
  }


  setUserName(userName)
  {
    this.username = userName;
    return this;
  }


  setAvatarUrl(url)
  {
    this.avatar_url = url;
    return this;
  }


  setTts(tts)
  {
    this.tts = tts;
    return this;
  }


  addEmbed(embed)
  {
    if (this.embeds == null)
    {
      this.embeds = [];
    }

    this.embeds.push(embed);
    return this;
  }


  toJson()
  {
    return JSON.stringify(this);
  }
}



class DiscordEmbed
{
  setTitle(title)
  {
    this.title = title;
    return this;
  }

  setType(type)
  {
    this.type = type;
    return this;
  }

  setDescription(description)
  {
    this.description = description;
    return this;
  }

  setUrl(url)
  {
    this.url = url;
    return this;
  }

  setTimestamp(timestamp)
  {
    this.timestamp = timestamp;
    return this;
  }

  setColor(color)
  {
    this.color = color;
    return this;
  }

  setFooter(text, iconUrl)
  {
    let footer = new DiscordEmbedFooter(text, iconUrl);
    this.footer = footer;
    return this;
  }

  setImage(url, width, height)
  {
    let image = new DiscordEmbedImage(url, width, height);
    this.image = image;
    return this;
  }
}



class DiscordEmbedFooter
{
  constructor(text, iconUrl)
  {
    this.text = text;
    if (iconUrl != null)
    {
      this.icon_url = iconUrl;
    }
  }
}



class DiscordEmbedImage
{
  constructor(url, width, height)
  {
    this.url = url;
    if (width != null)
    {
      this.width = width;
    }
    if (height != null)
    {
      this.height = height;
    }
  }
}