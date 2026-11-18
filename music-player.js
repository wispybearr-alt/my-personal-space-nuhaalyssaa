
document.addEventListener("DOMContentLoaded", function () {

    const musicPlayer = document.createElement("div");

    musicPlayer.id = "spotify-floating-player";

    musicPlayer.innerHTML = `

        <div class="music-widget">

            <!-- FLOATING BUTTON -->
            <button class="music-toggle" id="musicToggle">

                <span class="music-icon">♫</span>
                <span>My Playlist</span>
                <span class="music-arrow" id="musicArrow">⌃</span>

            </button>


            <!-- MUSIC PLAYER -->
            <div class="music-content" id="musicContent">

                <div class="music-heading">

                    <div>
                        <p class="music-label">
                            A LITTLE MUSIC CORNER
                        </p>

                        <h3>My Little Playlist ♡</h3>

                        <p class="music-subtitle">
                            Songs that make my day better.
                        </p>
                    </div>

                    <button class="music-close" id="musicClose">
                        ×
                    </button>

                </div>


                <!-- YOUR SPOTIFY PLAYLIST -->

                <iframe
                    style="border-radius:12px"
                    src="https://open.spotify.com/embed/playlist/7AXpR0CFpBUWZlXejMDYIc?utm_source=generator&si=3f68ad9c54f34a7a"
                    width="100%"
                    height="352"
                    frameborder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>


                <p class="music-footer">
                    MADE WITH LOVE ♡
                </p>

            </div>

        </div>

    `;


    document.body.appendChild(musicPlayer);


    // OPEN AND CLOSE PLAYER

    const toggleButton =
        document.getElementById("musicToggle");

    const closeButton =
        document.getElementById("musicClose");

    const musicContent =
        document.getElementById("musicContent");

    const musicArrow =
        document.getElementById("musicArrow");


    toggleButton.addEventListener("click", function () {

        musicContent.classList.toggle("show");

        musicArrow.textContent =
            musicContent.classList.contains("show")
            ? "⌄"
            : "⌃";

    });


    closeButton.addEventListener("click", function () {

        musicContent.classList.remove("show");

        musicArrow.textContent = "⌃";

    });

});
