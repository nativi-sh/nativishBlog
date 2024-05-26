// Click to Copy - contact email in footer
document.addEventListener("DOMContentLoaded", function() {
  const contactEmail = 'contact@nativi.sh';  // Replace with your actual email
  const emailRecentlyCopied = { value: false };

  const clickToCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail)
      .then(() => {
        emailRecentlyCopied.value = true;
        setTimeout(() => {
          emailRecentlyCopied.value = false;
        }, 3000);
      })
      .catch(err => {
        console.error('Could not copy email: ', err);
      });
  };

  const copyButton = document.querySelector('.copy-email-button');
  if (copyButton) {
    copyButton.addEventListener('click', clickToCopyEmail);
  }
});
