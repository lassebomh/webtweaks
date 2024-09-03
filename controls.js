if (window.location.host !== "localhost") {
  document.addEventListener("keydown", (e) => {
    if (document.activeElement !== document.body) return;
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

    if (e.key == "j" || e.key == "k" || e.key == "s" || e.key == "d") {
      e.preventDefault();
      const direction = e.key == "j" || e.key == "s" ? 1 : -1;
      const distance = e.repeat ? 150 : 300;
      window.scrollBy({
        top: distance * direction,
        behavior: e.repeat ? "instant" : "smooth",
      });
    } else if (e.key == "h" || e.key == "a") {
      e.preventDefault();
      history.back();
    } else if (e.key == "l" || e.key == "f") {
      e.preventDefault();
      history.forward();
    }
  });
}
