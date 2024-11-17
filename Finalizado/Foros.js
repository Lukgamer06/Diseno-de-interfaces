const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sender');
        messageElement.innerHTML = `<p>${messageText}</p>`;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazar hacia abajo
    }
});

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});