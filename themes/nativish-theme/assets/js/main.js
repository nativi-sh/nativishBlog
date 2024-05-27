// Click to Copy - contact email in footer
document.addEventListener("DOMContentLoaded", function () {
  const contactEmail = 'contact@nativi.sh';  // Replace with your actual email
  const emailRecentlyCopied = { value: false };

  const clickToCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail)
      .then(() => {
        emailRecentlyCopied.value = true;
        updateTooltipText();
        setTimeout(() => {
          emailRecentlyCopied.value = false;
          updateTooltipText();
        }, 3000);
      })
      .catch(err => {
        console.error('Could not copy email: ', err);
      });
  };

  const updateTooltipText = () => {
    const tooltipText = emailRecentlyCopied.value ? "Email copied to clipboard!" : "Click to copy";
    const tooltipElement = document.querySelector('.copy-email-button .tooltiptext');
    if (tooltipElement) {
      tooltipElement.textContent = tooltipText;
    }
  };

  const copyButton = document.querySelector('.copy-email-button');
  if (copyButton) {
    copyButton.addEventListener('click', clickToCopyEmail);
    updateTooltipText(); // Set initial tooltip text
  }
});
