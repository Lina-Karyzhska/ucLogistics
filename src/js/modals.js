const openModal = (e, selector = "form-modal") => {
    e.preventDefault();
    $(`.${selector}`).removeClass("d-none");
    $("body").addClass("of-hidden");

    setTimeout(() => {
        $(`.${selector}`).removeClass("opacity0");
        $(`.${selector} .modal__wrapper`).addClass("left0");
    })
}

$(function() {
    [$(".open-position__button-modal"), $(".first-screen__get-quote")].forEach((el) => {
        el.on("click", openModal);
    });

    [$(".contact-form__btn"), $(".get-quote__submit")].forEach((el) => {
        el.on("click", (e) => {
        openModal(e, "thanks-modal");

        setTimeout(() => {
            $(".loading").addClass("d-none");
            $(".modal__content-thanks").removeClass("d-none");
        }, 1800)
    })});

    $(".modal__close").on("click", (e) => {
        console.log("close");
        e.preventDefault();
        $(".modal .modal__wrapper").removeClass("left0");

        setTimeout(() => {
            $(".modal").addClass("opacity0");
        }, 100)

        setTimeout(() => {
            if ($("#open-position__modal-form") && $("#open-position__modal-form").hasClass("d-none")) {
                $("#open-position__modal-form").removeClass("d-none");
                $("#open-position__modal-thanks").addClass("d-none");
            }

            $(".modal").addClass("d-none");
            $("body").removeClass("of-hidden");
        }, 300)
    });

    $(".modal__button").on("click", (e) => {
        e.preventDefault();
        $(".modal-form").addClass("d-none");
        $(".loading").removeClass("d-none");
        $(".modal__close").prop("disabled", true);

        setTimeout(() => {
            $(".loading").addClass("d-none");
            $(".modal__content-thanks").removeClass("d-none");
            $(".modal__close").prop("disabled", false);
        }, 1500)
    })
})