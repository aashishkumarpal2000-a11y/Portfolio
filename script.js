/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        if (mainNav.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });


    // Close menu after clicking a navigation link

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");
            menuBtn.innerHTML = "☰";

        });

    });

}


/* =========================
   ANALYTICS
========================= */

function showAnalysis(type) {

    const result = document.getElementById("analysisResult");

    if (!result) {
        return;
    }


    if (type === "survival") {

        result.innerHTML = `
            <h3>Survival Analysis</h3>

            <p>
                <strong>Method:</strong>
                Kaplan–Meier Survival Analysis
            </p>

            <p>
                This demonstration evaluates time-to-event outcomes
                between treatment groups.
            </p>

            <p>
                <strong>Key outputs:</strong>
                Median Survival • Hazard Ratio • 95% CI • P-value
            </p>
        `;

    }


    else if (type === "meta") {

        result.innerHTML = `
            <h3>Meta-analysis</h3>

            <p>
                <strong>Method:</strong>
                Systematic Review & Meta-analysis
            </p>

            <p>
                This demonstration combines results from multiple
                studies to estimate an overall pooled effect.
            </p>

            <p>
                <strong>Key outputs:</strong>
                Pooled Estimate • 95% CI • Heterogeneity •
                Subgroup Analysis
            </p>
        `;

    }


    else if (type === "sample") {

        result.innerHTML = `
            <h3>Sample Size & Power Analysis</h3>

            <p>
                <strong>Purpose:</strong>
                Determine the required sample size for a study.
            </p>

            <p>
                The calculation can consider effect size,
                significance level, statistical power and
                allocation ratio.
            </p>

            <p>
                <strong>Key parameters:</strong>
                Alpha • Power • Effect Size • Allocation Ratio
            </p>
        `;

    }

}


/* =========================
   CONTACT FORM
========================= */

function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");


    if (!name || !email || !message) {
        return;
    }


    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {

        alert("Please fill all required fields.");

        return;
    }


    alert(
        "Thank you, " +
        name.value.trim() +
        "! Your message has been received."
    );


    const form = document.getElementById("contactForm");

    if (form) {
        form.reset();
    }

}