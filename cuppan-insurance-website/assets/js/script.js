// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });
  }

  // Quote form tabs
  var tabs = document.querySelectorAll('.quote-tab');
  var panels = document.querySelectorAll('.quote-panel');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      var target = document.getElementById(tab.dataset.target);
      if (target) target.classList.add('active');
    });
  });

  // Vehicle repeater (Personal / Motor quote form)
  var addVehicleBtn = document.getElementById('add-vehicle');
  var vehicleWrap = document.getElementById('vehicle-list');
  var vehicleCount = vehicleWrap ? vehicleWrap.querySelectorAll('.vehicle-repeat').length : 0;

  function vehicleTemplate(index) {
    return '' +
      '<div class="vehicle-repeat">' +
      '  <div class="form-section-title">Vehicle ' + index + '</div>' +
      '  <div class="grid-3">' +
      '    <div class="field-wrap"><label class="field-label">Year</label><input class="field" name="vehicle_year_' + index + '" type="text" /></div>' +
      '    <div class="field-wrap"><label class="field-label">Make</label><input class="field" name="vehicle_make_' + index + '" type="text" /></div>' +
      '    <div class="field-wrap"><label class="field-label">Model</label><input class="field" name="vehicle_model_' + index + '" type="text" /></div>' +
      '  </div>' +
      '  <div class="grid-3">' +
      '    <div class="field-wrap"><label class="field-label">Registration number</label><input class="field" name="vehicle_reg_' + index + '" type="text" /></div>' +
      '    <div class="field-wrap"><label class="field-label">Colour</label><input class="field" name="vehicle_colour_' + index + '" type="text" /></div>' +
      '    <div class="field-wrap"><label class="field-label">Estimated value (R)</label><input class="field" name="vehicle_value_' + index + '" type="text" /></div>' +
      '  </div>' +
      '  <div class="grid-3">' +
      '    <div class="field-wrap"><label class="field-label">Use (private / business)</label><input class="field" name="vehicle_use_' + index + '" type="text" /></div>' +
      '    <div class="field-wrap"><label class="field-label">Finance company (if any)</label><input class="field" name="vehicle_finance_' + index + '" type="text" /></div>' +
      '    <div class="field-wrap"><label class="field-label">Regular driver</label><input class="field" name="vehicle_driver_' + index + '" type="text" /></div>' +
      '  </div>' +
      '  <div class="grid-2">' +
      '    <div class="field-wrap"><label class="field-label">Security features fitted</label><input class="field" name="vehicle_security_' + index + '" type="text" /></div>' +
      '    <div class="field-wrap"><label class="field-label">Where is it parked overnight?</label><input class="field" name="vehicle_parking_' + index + '" type="text" /></div>' +
      '  </div>' +
      '  <div class="field-wrap"><label class="field-label">Any claims in the last 3 years?</label><input class="field" name="vehicle_claims_' + index + '" type="text" /></div>' +
      '  <button type="button" class="remove-vehicle-btn">Remove this vehicle</button>' +
      '</div>';
  }

  if (addVehicleBtn && vehicleWrap) {
    addVehicleBtn.addEventListener('click', function () {
      vehicleCount += 1;
      var div = document.createElement('div');
      div.innerHTML = vehicleTemplate(vehicleCount);
      vehicleWrap.appendChild(div.firstElementChild);
    });

    vehicleWrap.addEventListener('click', function (e) {
      if (e.target.classList.contains('remove-vehicle-btn')) {
        e.target.closest('.vehicle-repeat').remove();
      }
    });
  }

  // Form submit -> success message (forms post to Formspree; this just gives instant feedback)
  document.querySelectorAll('form[data-success]').forEach(function (form) {
    form.addEventListener('submit', function () {
      var successId = form.dataset.success;
      var successEl = document.getElementById(successId);
      if (successEl) {
        window.setTimeout(function () {
          successEl.classList.add('visible');
          successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    });
  });
});
