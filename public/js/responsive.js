// Responsive Design Script
document.addEventListener("DOMContentLoaded", () => {
    // Ensure the meta viewport tag is set for responsive behavior
    const metaViewport = document.querySelector("meta[name='viewport']");
    if (!metaViewport) {
        const viewportTag = document.createElement("meta");
        viewportTag.name = "viewport";
        viewportTag.content = "width=device-width, initial-scale=1.0";
        document.head.appendChild(viewportTag);
    }

    // Adjust styles for small devices
    const applyResponsiveStyles = () => {
        const screenWidth = window.innerWidth;

        // For phones and small devices
        if (screenWidth <= 480) {
            document.body.style.fontSize = "14px";
            const elements = document.querySelectorAll(".container, .navbar, .header, .button");
            elements.forEach((el) => {
                if (el.classList.contains("container")) {
                    el.style.width = "100%";
                    el.style.padding = "10px";
                }
                if (el.classList.contains("navbar")) {
                    el.style.flexDirection = "column"; // Stack navbar items vertically
                }
                if (el.classList.contains("header")) {
                    el.style.fontSize = "18px";
                }
                if (el.classList.contains("button")) {
                    el.style.fontSize = "14px";
                    el.style.padding = "10px 5px";
                }
            });
        }

        // For tablets
        else if (screenWidth <= 768) {
            document.body.style.fontSize = "16px";
        } else {
            // Reset to default styles for larger screens
            document.body.style.fontSize = "16px";
            const elements = document.querySelectorAll(".container, .navbar, .header, .button");
            elements.forEach((el) => {
                el.style = ""; // Remove inline styles
            });
        }
    };

    // Run on load and window resize
    applyResponsiveStyles();
    window.addEventListener("resize", applyResponsiveStyles);
});
