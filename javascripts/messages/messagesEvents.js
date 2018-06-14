const activateChatModal = () => {
  $(document).on('click','#open-chat-modal-btn', () => {
    $('#chat-modal').css('display', 'block');
  });
};

const deactivateChatModal = () => {
  $(document).on('click','#close-chat-modal-btn', () => {
    $('#chat-modal').css('display', 'none');
  });
};

module.exports = {
  activateChatModal,
  deactivateChatModal,
};
