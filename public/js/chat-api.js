document.addEventListener('DOMContentLoaded', () => {
  const sendBtn = document.getElementById('send-btn');
  const chatText = document.getElementById('chat-text');
  const chatBody = document.getElementById('chat-body');
  const apiKey = chatBody.dataset.apiKey;
  const agentCode = chatBody.dataset.agentCode;

  let chatId = null;

  function appendMessage(role, text) {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${role}`;
    if (role === 'bot') {
    messageEl.innerHTML = `
        <img class="" src="/img/smartbot/logo-binit-smartbot.svg" alt="" width="auto" height="50" />
        <p>
            ${text}
        </p>`;
    } else {
        messageEl.innerHTML = `<p>${text}</p>`;
    }
    chatBody.appendChild(messageEl);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  //Animacion writing
  let typingEl = null;

  function showTypingIndicator() {
    typingEl = document.createElement('div');
    typingEl.className = 'message bot typing';
    typingEl.innerHTML = `
      <img class="" src="/img/smartbot/logo-binit-smartbot.svg" alt="" width="auto" height="50" />
      <p class="dots">...</p>
    `;
    chatBody.appendChild(typingEl);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function removeTypingIndicator() {
    if (typingEl && typingEl.parentNode) {
      typingEl.parentNode.removeChild(typingEl);
      typingEl = null;
    }
  }

async function sendMessage(text, showMessage = true) {
  if ( showMessage ){
    appendMessage('user', text);
  }
  showTypingIndicator();

  const url = chatId
      ? `https://api.serenitystar.ai/api/v2/agent/${agentCode}/execute`
      : `https://api.serenitystar.ai/api/v2/agent/${agentCode}/conversation`;

  const bodyData = chatId
      ? [
          { Key: 'chatId', Value: chatId },
          { Key: 'message', Value: text },
        ]
      : { "message": text };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        //'Origin': window.location.origin,
        //'User-Agent': navigator.userAgent,
      },
      body: JSON.stringify(bodyData)
    });

    const result = await response.json();
    removeTypingIndicator();

    if (response.ok) {
      if (!chatId){
        chatId = result.chatId;
      }
      const reply = result.content;
      appendMessage('bot', reply);
    } else {
      appendMessage('bot', 'Hubo un error al procesar tu mensaje.');
      console.error(result);
    }
  } catch (err) {
    removeTypingIndicator();
    appendMessage('bot', 'Error de conexión con el servidor.');
    console.error(err);
  }
}

// Iniciamos conversacion para tener el chatId
sendMessage('Hola', false);

//Listener
  sendBtn.addEventListener('click', () => {
    const text = chatText.value.trim();
    if (text !== '') {
      sendMessage(text);
      chatText.value = '';
    }
  });

  chatText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendBtn.click();
    }
  });
});