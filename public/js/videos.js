console.log('videos!!')
const loadYouTubeAPI = () =>
  new Promise((resolve, reject) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.onload = resolve;
    tag.onerror = reject;
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });

const videoAPIBlocks = async () => {
  await loadYouTubeAPI();

  window.onYouTubeIframeAPIReady = () => {
    console.log("YouTube Iframe API is ready.");
    const players = [];

    /* eslint-disable no-shadow */
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const videoId = element.dataset.id;
            console.log(`Initializing player for video ID: ${videoId}`);
            /* eslint-disable no-undef */
            const player = new YT.Player(element, {
              videoId,
              events: {
                /* eslint-disable  no-use-before-define */
                onStateChange: onPlayerStateChange,
                onReady: (event) => {
                  console.log(`Player ready for video ID: ${videoId}`);
                },
                onError: (event) => {
                  /* eslint-disable  no-use-before-define */
                  handlePlayerError(event, videoId);
                },
              },
            });
            players.push(player);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.01 }
    );

    document.querySelectorAll(".youtube-player").forEach((element) => {
      observer.observe(element);
    });

    document.querySelectorAll(".play-button").forEach((button, index) => {
        console.log('play button ', button)
      button.addEventListener("click", () => {
        console.log("Play button clicked.");
        const playerElement = button
          .closest(".video-wrap")
          .querySelector(".youtube-player");
        const player = players.find((p) => p.getIframe() === playerElement);
        if (player) {
          console.log(`Playing video with ID: ${playerElement.dataset.id}`);
          player.playVideo();
          players.forEach((otherPlayer) => {
            if (
              otherPlayer !== player &&
              typeof otherPlayer.pauseVideo === "function"
            ) {
              console.log(
                `Pausing video with ID: ${otherPlayer.getIframe().dataset.id}`
              );
              otherPlayer.pauseVideo();
            }
          });
        } else {
          console.error("Player not found for element", playerElement);
        }
        /* eslint-disable  no-use-before-define */
        fadeElements(index, true);
      });
    });

    /* eslint-disable no-use-before-define */
    function fadeElements(index, fadeOut) {
      console.log("Fading elements.");
      const wrapper = document.querySelectorAll(".video-wrap")[index];
      const elementsToFade = wrapper.querySelectorAll(
        ".play-button, .video-slide__img, .video-description, .anim-reveal__outer"
      );
      elementsToFade.forEach((element) => {
        if (fadeOut) {
          element.classList.add("-fade-out");
          setTimeout(() => {
            element.style.zIndex = "-1";
          }, 300);
        } else {
          element.classList.remove("-fade-out");
          element.style.zIndex = "";
        }
      });
    }

    function onPlayerStateChange(event) {
      console.log("Player state changed:", event);
      if (
        event.data === YT.PlayerState.PAUSED ||
        event.data === YT.PlayerState.ENDED
      ) {
        const playerElement = event.target.getIframe();
        const wrapper = playerElement.closest(".video-wrap");
        const index = Array.from(
          document.querySelectorAll(".video-wrap")
        ).indexOf(wrapper);
        fadeElements(index, false);
      }
    }

    function handlePlayerError(event, videoId) {
      console.error(`Error in player for video ID: ${videoId}`, event);
      const errorMessage = getErrorMessage(event.data);
      console.error(`Error playing video: ${errorMessage}`);
    }

    function getErrorMessage(errorCode) {
      switch (errorCode) {
        case 2:
          return "The request contains an invalid parameter value.";
        case 5:
          return "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
        case 100:
          return "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.";
        case 101:
        case 150:
          return "The owner of the requested video does not allow it to be played in embedded players.";
        default:
          return "An unknown error occurred.";
      }
    }
  };
};

videoAPIBlocks();
