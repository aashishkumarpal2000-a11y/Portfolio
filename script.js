```javascript
// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// =========================================
// ANALYTICS DEMO
// =========================================

function showAnalysis(type) {

    const result = document.getElementById("analysisResult");

    if (type === "survival") {

        result.innerHTML = `
            <h3>Survival Analysis</h3>
            <p>
                Kaplan–Meier analysis demonstration selected.
                Future version will display an interactive survival
                curve, median survival, hazard ratio, 95% CI and
                log-rank p-value.
            </p>
        `;

    } else if (type === "meta") {

        result.innerHTML = `
            <h3>Meta-analysis</h3>
            <p>
                Meta-analysis demonstration selected.
                Future version will display a forest plot,
                pooled estimate, 95% CI and heterogeneity statistics.
            </p>
        `;

    } else if (type === "sample") {

        result.innerHTML = `
            <h3>Sample Size & Power</h3>
            <p>
                Sample size demonstration selected.
                Enter study parameters in the future calculator
                to estimate required sample size and statistical power.
            </p>
        `;
    }
}


// =========================================
// CONTACT FORM DEMO
// =========================================

function submitForm(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message form is ready. " +
        "Email/backend integration will be added later."
    );
}
```
