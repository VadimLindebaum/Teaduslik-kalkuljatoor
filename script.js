$(document).ready(function () {
  const $display = $("#display");
  const $result = $("#result");

  $(".buttons").on("click", "button", function () {
    const val = $(this).text();

    if (val === "C") {
      $display.val("");
      $result.text("");
    } else if (val === "←") {
      $display.val($display.val().slice(0, -1));
    } else if (val === "=") {
      try {
        let expr = $display.val()
          .replace(/√/g, "Math.sqrt")
          .replace(/x²/g, "**2")
          .replace(/sin/g, "Math.sin")
          .replace(/cos/g, "Math.cos")
          .replace(/tan/g, "Math.tan")
          .replace(/log/g, "Math.log");

        const res = Function("return " + expr)();
        $result.text("Tulemus: " + res);
      } catch {
        $result.text("Viga avaldises");
      }
    } else {
      $display.val($display.val() + val);
    }
  });
});
