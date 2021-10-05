var currentTab = 0;
var question2Answer = "";
var question3Answer = "";
var question4Answer = "";
var question5Answer = "";
$(".profiler-results").html("");
document.addEventListener("DOMContentLoaded", function (event) {
  showTab(currentTab);
});

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  if (x[n]) {
    x[n].style.display = "block";
  }
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML =
      'SIGUIENTE  <i class="fa fa-angle-double-right"></i>';
  } else {
    document.getElementById("nextBtn").innerHTML =
      'SIGUIENTE  <i class="fa fa-angle-double-right"></i>';
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("nextprevious").style.display = "none";
    document.getElementById("all-steps").style.display = "none";
    // document.getElementById("register").style.display = "none";
    document.getElementById("thankyou-tab").style.display = "block";
    thankYouPageLogic();
  }
  if (x[currentTab]) {
    if (x[currentTab].id == "hostname-tab") {
      $("#hostname-tab h2").html(
        `Perfecto, ` +
          $("#name-tab input").val() +
          `, empecemos. ¿Qué es lo más importante para ti
          en un hosting?`
      );
    }
  }
  showTab(currentTab);
}

function validateForm() {
  var tab,
    input,
    errorFeild,
    i,
    valid = true;
  tab = document.getElementsByClassName("tab");
  input = tab[currentTab].getElementsByTagName("input");
  errorFeild = tab[currentTab].getElementsByClassName("error-message")[0];
  for (i = 0; i < input.length; i++) {
    if (input[i].value == "" && tab[currentTab].id != "newsletter-tab") {
      input[i].className += " invalid";
      errorFeild.innerHTML = "Este campo es obligatorio.";
      valid = false;
    }
    if (tab[currentTab].id == "hostname-tab") {
      let checkLength = $(
        "#" + tab[currentTab].id + ' input[name="radio"]:checked'
      ).length;
      if (checkLength == 0) {
        input[i].className += " invalid";
        errorFeild.innerHTML = "Este campo es obligatorio.";
        valid = false;
      } else {
        question2Answer = $(
          "#" + tab[currentTab].id + ' input[name="radio"]:checked'
        ).val();
      }
    } else if (tab[currentTab].id == "support-lang-tab") {
      let checkLength = $(
        "#" + tab[currentTab].id + ' input[name="radio"]:checked'
      ).length;
      if (checkLength == 0) {
        input[i].className += " invalid";
        errorFeild.innerHTML = "Este campo es obligatorio.";
        valid = false;
      } else {
        question3Answer = $(
          "#" + tab[currentTab].id + ' input[name="radio"]:checked'
        ).val();
      }
    } else if (tab[currentTab].id == "website-type-tab") {
      let checkLength = $(
        "#" + tab[currentTab].id + ' input[name="radio"]:checked'
      ).length;
      if (checkLength == 0) {
        input[i].className += " invalid";
        errorFeild.innerHTML = "Este campo es obligatorio.";
        valid = false;
      } else {
        question4Answer = $(
          "#" + tab[currentTab].id + ' input[name="radio"]:checked'
        ).val();
      }
    } else if (tab[currentTab].id == "location-tab") {
      let checkLength = $(
        "#" + tab[currentTab].id + ' input[name="radio"]:checked'
      ).length;
      if (checkLength == 0) {
        input[i].className += " invalid";
        errorFeild.innerHTML = "Este campo es obligatorio.";
        valid = false;
      } else {
        question5Answer = $(
          "#" + tab[currentTab].id + ' input[name="radio"]:checked'
        ).val();
      }
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    if (errorFeild) {
      errorFeild.innerHTML = "";
    }
  }
  return valid;
}

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  if (x[n]) {
    x[n].className += " active";
  }
}

function thankYouPageLogic() {
  console.log(
    question2Answer,
    question3Answer,
    question4Answer,
    question5Answer
  );
  if (question2Answer == "price" && question3Answer == "english-and-spanish") {
    console.log("Ending A");
    $("#thankyou-tab #result-info").html("");
    $("#thankyou-tab #result-info").html(
      `Los servidores de Siteground son la mejor opción para ti.
    Con planes desde 3,99€ al mes, soporte 24/7, dominio gratis
    el primer año y certificado SSL gratuito, este hosting es todo
    lo que necesitas para tu blog o web de WordPress.` +
        '<br/><br/><a id="result-link" href="https://www.siteground.es/go/8yl06h20rl" target="_blank">VER LA OFERTA</a>'
    );
  } else if (
    (question2Answer == "speed") &&
    (question3Answer == "spanish-only" ||
      question3Answer == "english-and-spanish")
  ) {
    console.log("Ending B");
    $("#thankyou-tab #result-info").html("");
    $("#thankyou-tab #result-info").html(
      `Los servidores de Cloudways son la mejor opción para ti. Desde
    $10 al mes, la calidad que ofrecen es difícil de superar: 60 centros
    de datos globales para que tu web cargue rápido, instalación SSL
    gratuita en 1-click, área de ensayo y fácil gestión de DNS.
    Además, lo puedes probar gratis sin tarjeta de crédito.
    ` +
        '<br/><br/><a id="result-link" href="https://www.cloudways.com/es/hosting-para-wordpress.php?id=970428" target="_blank">VER LA OFERTA</a>'
    );
  } else if (
    (question2Answer == "balance" && question2Answer == "installation") ||
    question3Answer == "spanish-only" && question5Answer == "europe"
  ) {
    console.log("Ending C");
    $("#thankyou-tab #result-info").html("");
    $("#thankyou-tab #result-info").html(
      `El hosting de Webempresa es el más apropiado para ti que estás en
    España/Europa. Tiene unos precios muy competitivos y una calidad excelente.
    Además, cuenta con un soporte técnico en español 24/7. Haz clic en el botón
    de abajo para conseguir un 25% de descuento exclusivo en todos los planes
    de hosting de Webempresa.` +
        '<br/><br/><a id="result-link" href="https://bit.ly/3ekH0u2" target="_blank">VER LA OFERTA</a>'
    );
  } else if (
    (question2Answer == "balance" && question2Answer == "installation") ||
    (question3Answer == "spanish-only" && question5Answer == "america")
  ) {
    console.log("Ending D");
    $("#thankyou-tab #result-info").html("");
    $("#thankyou-tab #result-info").html(
      `El hosting de Webempresa es el más apropiado para ti que estás en América.
    Tiene unos precios muy competitivos y una calidad excelente. Además,
    cuenta con soporte técnico en español 24/7. Haz clic en el botón de abajo
    para conseguir un 25% de descuento exclusivo en todos los planes de
    hosting de Webempresa.` +
        '<br/><br/><a id="result-link" href="https://bit.ly/3ekH0u2" target="_blank">VER LA OFERTA</a>'
    );
  }
}
