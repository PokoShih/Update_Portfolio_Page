$(".btn").on("click", submitContact);

function submitContact() {
    console.log("clicked");
    window.location.replace("../index.html");
    alert(
        "Thanks for your feedback! Your message has been submitted, we will reach out to you as soon as possible!"
    );
}
