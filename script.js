document.getElementById("repairForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  alert(
    `¡Solicitud enviada exitosamente!\n\nCliente: ${data.cliente}\nServicio: ${data.servicio}\nDescripción: ${data.descripcion}\nCita: ${data.cita}\nPago simulado con tarjeta terminada en ${data.tarjeta.slice(-4)}`
  );

  e.target.reset();
});