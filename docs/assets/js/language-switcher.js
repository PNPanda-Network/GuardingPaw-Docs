(function () {
  // Language switcher functionality
  function initLanguageSwitcher() {
    var STORAGE_KEY = 'selectedLanguage';
    var defaultLanguage = 'en';

    function getStoredLanguage() {
      return localStorage.getItem(STORAGE_KEY) || defaultLanguage;
    }

    function setStoredLanguage(language) {
      localStorage.setItem(STORAGE_KEY, language);
    }

    function showLanguageContent(language) {
      // Hide all language content
      var allContent = document.querySelectorAll('.language-content');
      allContent.forEach(function(content) {
        content.classList.remove('active');
      });

      // Show selected language content
      var selectedContent = document.getElementById('content-' + language);
      if (selectedContent) {
        selectedContent.classList.add('active');
      }

      // Update docsify configuration for the selected language
      updateDocsifyConfig(language);
    }

    function updateDocsifyConfig(language) {
      if (window.$docsify) {
        // Update homepage and sidebar based on language
        var config = window.$docsify;


        // Reload docsify with new configuration
        if (window.Docsify) {
          window.location.hash = language === 'de' ? '#/de/' : '#/';
        }
      }
    }

    function createLanguageSwitcher() {
      var switcher = document.createElement('div');
      switcher.className = 'language-switcher';
      switcher.innerHTML = `
        <select id="language-select">
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      `;

      document.body.appendChild(switcher);

      var select = document.getElementById('language-select');
      select.value = getStoredLanguage();

      select.addEventListener('change', function() {
        var selectedLanguage = this.value;
        setStoredLanguage(selectedLanguage);
        showLanguageContent(selectedLanguage);
      });

      // Initialize with stored language
      showLanguageContent(getStoredLanguage());
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createLanguageSwitcher);
    } else {
      createLanguageSwitcher();
    }
  }

  // Initialize language switcher
  initLanguageSwitcher();
})();
