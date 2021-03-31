const yt = require('ytdl-core')

async function ytdl(url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
      .then((data) => {
        let pormat = data.formats
        let audio = []
        let video = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].container == 'mp4' && pormat[i].hasVideo == true && pormat[i].hasAudio == true) {
            let vid = pormat[i]
            video.push({
              quality: vid.qualityLabel,
              url: vid.url
            })
          }
          if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
            let aud = pormat[i]
            audio.push({
              bitrate: aud.audioBitrate,
              url: aud.url
            })
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
        const description = data.player_response.microformat.playerMicroformatRenderer.description.simpleText
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
        const result = {
          title: title,
          description: description,
          thumb: thumb,
          channel: channel,
          published: published,
          views: views,
          video: video,
          audio: audio
        }
        return(result)
      })
      resolve(yutub)
    } catch (error) {
      reject(error);
      }
      console.log(error)
  })
}

module.exports = {
  ytdl
};