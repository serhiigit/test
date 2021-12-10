(function () {
  const activeClass = "active";
  const tabsContainers = $("ul.tabs");

  tabsContainers.each(function () {
    const tabsContainer = $(this);

    const tabs = $(tabsContainer).find("li.tabs__list-item");

    tabs.on("click keypress", function () {
      const tab = $(this);
      if (tab.hasClass(activeClass)) {
        return true;
      } else {
        tabs.filter(`.${activeClass}`).removeClass(activeClass);
        tab.addClass(activeClass);
      }
    });
  });
})();
