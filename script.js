document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (
      (username === 'santiago' && password === '123456') ||
      (username === 'amanda' && password === '123456')
    ) {
      window.location.href = 'dashboard.html';
    } else {
      alert('Nome de usuário ou senha incorretos.');
    }
  });
  
  const diaryForm = document.getElementById('diary-form');

  diaryForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const entries = {
      monday: document.getElementById('monday').value,
      tuesday: document.getElementById('tuesday').value,
      wednesday: document.getElementById('wednesday').value,
      thursday: document.getElementById('thursday').value,
      friday: document.getElementById('friday').value
    };

    // Você pode salvar as entradas em um local de armazenamento (por exemplo, local storage) ou enviá-las para um servidor.
    // Aqui, apenas exibirei um alerta como exemplo.

    alert('Recadinhos salvos com sucesso!');
  });
});

const recadinhos = {
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: ''
};

document.addEventListener('DOMContentLoaded', () => {
  const diaryForm = document.getElementById('diary-form');
  const alertBox = document.createElement('div');
  alertBox.className = 'alert-box';
  document.body.appendChild(alertBox);

  diaryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(diaryForm);
    for (const key of formData.keys()) {
      recadinhos[key] = formData.get(key);
    }

    showAlert('Recadinho salvo com sucesso!');
  });

  function showAlert(message) {
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 3000);
  }
});
