  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a:not(.logo)");
    const sections = [];

    // Собираем секции для якорей, ссылки которых начинаются с #
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href.startsWith("#") && href.length > 1) {
        const section = document.querySelector(href);
        if (section) {
          sections.push(section);
        }
      }
    });

    // Функция обновления активного пункта меню по прокрутке
    function updateActiveLinkOnScroll() {
      let currentSectionId = "";
      const scrollPos = window.scrollY + 200; // с запасом сверху

      // Находим, какая секция сейчас сверху
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          currentSectionId = section.id;
        }
      }

      navLinks.forEach(link => {
        const href = link.getAttribute("href");

        if (href.startsWith("#")) {
          if (href === `#${currentSectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        } else {
          // Активность для ссылок на html файлы оставим без изменений
          const hrefPath = href.split("#")[0];
          const currentPath = window.location.pathname.split("/").pop() || "index.html";

          if (hrefPath === currentPath || (hrefPath === "" && currentPath === "index.html")) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    }

    // При загрузке страницы и скролле обновляем подсветку
    updateActiveLinkOnScroll();
    window.addEventListener("scroll", updateActiveLinkOnScroll);
  });
