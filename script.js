document.addEventListener("DOMContentLoaded", function () {
  const figures = document.querySelectorAll(".gallery figure");
  const buttons = document.querySelectorAll(".page-btn");

  function showPage(page) {
    figures.forEach((figure, index) => {
      figure.classList.remove("active");
      if (Math.floor(index / 3) + 1 === page) {
        figure.classList.add("active");
      }
    });

    // به‌روزرسانی وضعیت دکمه‌ها
    buttons.forEach((btn) => {
      btn.classList.remove("active");
      if (parseInt(btn.getAttribute("data-page")) === page) {
        btn.classList.add("active");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const page = parseInt(button.getAttribute("data-page"));
      showPage(page);
    });
  });

  // نمایش پیش‌فرض صفحه 1
  showPage(1);
});
