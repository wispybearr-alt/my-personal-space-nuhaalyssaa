
document.addEventListener("DOMContentLoaded", function () {

    // CREATE POPUP ELEMENTS

    const popupHTML = `
        <!-- WELCOME POPUP -->
        <div class="popup-overlay" id="welcomePopup">
            <div class="popup-card">

                <button class="popup-close" id="closeWelcome">
                    &times;
                </button>

                <div class="popup-icon">🤎</div>

                <h2>Welcome to My Little Space</h2>

                <p>
                    Hello there! I'm Nuha Alyssa.
                    Thank you for visiting my personal website.
                    Feel free to explore my journey, memories
                    and little stories.
                </p>

                            </div>
        </div>


        <!-- FLOATING NOTIFICATION -->
        <div class="popup-toast" id="popupToast">
            ✨ Don't forget to explore my gallery
            and discover more about me!
        </div>


        <!-- FLOATING BUBBLE -->
        <button class="popup-bubble" id="popupBubble"
        aria-label="Open quick menu"
        aria-expanded="false">
            ✦
        </button>


       

        <!-- INTERACTIVE POPUP -->
        <div class="popup-overlay" id="infoPopup">

            <div class="popup-card">

                <button class="popup-close" id="closeInfo">
                    &times;
                </button>

                <div class="popup-icon">🌷</div>

                <h2 id="infoTitle">A Little Note</h2>

                <p id="infoMessage">
                    Thank you for exploring my website!
                </p>

                <button class="popup-button" id="closeInfoButton">
                    Lovely!
                </button>

            </div>

        </div>
    `;


    document.body.insertAdjacentHTML("beforeend", popupHTML);


    // ELEMENTS

    const welcomePopup = document.getElementById("welcomePopup");
    const infoPopup = document.getElementById("infoPopup");
    const popupToast = document.getElementById("popupToast");
    const popupBubble = document.getElementById("popupBubble");
    const popupMenu = document.getElementById("popupMenu");


  // 1. WELCOME POPUP - AUTO DISMISS

if (!sessionStorage.getItem("welcomeShown")) {

    setTimeout(function () {

        welcomePopup.classList.add("active");

        sessionStorage.setItem("welcomeShown", "true");

        // Automatically close after 5 seconds
        setTimeout(function () {
            closeWelcomePopup();
        }, 5000);

    }, 700);

}

function closeWelcomePopup() {
    welcomePopup.classList.remove("active");
}

document.getElementById("closeWelcome")
    .addEventListener("click", closeWelcomePopup);

    // 2. FLOATING NOTIFICATION

    setTimeout(function () {

        popupToast.classList.add("show");

        setTimeout(function () {
            popupToast.classList.remove("show");
        }, 6000);

    }, 4500);


    // 3. FLOATING BUBBLE

    popupBubble.addEventListener("click", function () {

        const isOpen = popupMenu.classList.toggle("show");

        popupBubble.setAttribute("aria-expanded", isOpen);

        popupBubble.innerHTML = isOpen ? "&times;" : "✦";

    });


    // CLOSE MENU WHEN CLICKING OUTSIDE

    document.addEventListener("click", function (event) {

        if (
            !popupBubble.contains(event.target) &&
            !popupMenu.contains(event.target)
        ) {

            popupMenu.classList.remove("show");

            popupBubble.setAttribute("aria-expanded", "false");

            popupBubble.innerHTML = "✦";

        }

    });


    // 4. INTERACTIVE POPUP

    document.querySelectorAll("[data-popup-message]")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const title =
                    button.dataset.popupTitle || "A Little Note";

                const message =
                    button.dataset.popupMessage;

                document.getElementById("infoTitle").textContent = title;

                document.getElementById("infoMessage").textContent = message;

                infoPopup.classList.add("active");

            });

        });


    function closeInfoPopup() {
        infoPopup.classList.remove("active");
    }

    document.getElementById("closeInfo")
        .addEventListener("click", closeInfoPopup);

    document.getElementById("closeInfoButton")
        .addEventListener("click", closeInfoPopup);


    // CLOSE POPUP BY CLICKING OVERLAY

    [welcomePopup, infoPopup].forEach(function (popup) {

        popup.addEventListener("click", function (event) {

            if (event.target === popup) {
                popup.classList.remove("active");
            }

        });

    });


    // CLOSE USING ESCAPE KEY

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeWelcomePopup();
            closeInfoPopup();

            popupMenu.classList.remove("show");

            popupBubble.setAttribute("aria-expanded", "false");

            popupBubble.innerHTML = "✦";

        }

    });

});
