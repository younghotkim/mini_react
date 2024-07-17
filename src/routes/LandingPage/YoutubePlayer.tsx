import React, {useEffect} from 'react'

declare global {
  interface Window {
    onYouTubePlayerAPIReady: () => void
    YT: typeof YT
  }
}

interface YouTubePlayerProps {
  width?: string
  height?: string
  videoId: string
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  width = '1920px',
  height = '1000px',
  videoId
}) => {
  useEffect(() => {
    // YouTube IFrame API 비동기 로드
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // onYouTubePlayerAPIReady 함수 전역 등록
    window.onYouTubePlayerAPIReady = () => {
      new window.YT.Player('player', {
        videoId: videoId, // 최초 재생할 유튜브 영상 ID
        playerVars: {
          autoplay: 1, // 자동 재생 유무 (true 대신 1 사용)
          loop: 1, // 반복 재생 유무 (true 대신 1 사용)
          playlist: videoId // 반복 재생할 유튜브 영상 ID 목록
        },
        events: {
          // 영상이 준비되었을 때
          onReady: (event: YT.PlayerEvent) => {
            event.target.mute() // 음소거
          }
        }
      })
    }
  }, [width, height, videoId])

  return <div id="player" style={{width, height}}></div>
}

export default YouTubePlayer
