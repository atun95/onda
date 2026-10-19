/* ============================================================
   CHATBOX & FLOATING CONTACT WIDGET - ONDATA VIETNAM
   Bao gồm:
   - Nút Điện Thoại (Hotline 0867036698) với hiệu ứng rung chuông
   - Nút Messenger (Facebook Messenger)
   - Cửa sổ Chatbox trực tuyến tương tác với tin nhắn mẫu và phản hồi tự động
   ============================================================ */

export function renderChatBox() {
  return `
    <!-- FLOATING CONTACT & CHATBOX WIDGET -->
    <div class="floating-contact-widget" id="floating-contact-widget">
      <!-- CỬA SỔ CHATBOX POPUP -->
      <div class="chatbox-window" id="chatbox-window">
        <!-- Header -->
        <div class="chatbox-header">
          <div class="chatbox-agent-info">
            <div class="chatbox-avatar">
              <span class="chatbox-avatar-online"></span>
              <img src="/logo tach nen.png" alt="Ondata Support" class="agent-logo-img" onerror="this.onerror=null; this.src='/logo.png';" />
            </div>
            <div>
              <h4 class="chatbox-agent-name">Hỗ Trợ Ondata</h4>
              <span class="chatbox-agent-status">Đang trực tuyến (Phản hồi tức thì)</span>
            </div>
          </div>
          <button class="chatbox-btn-close" id="chatbox-btn-close" aria-label="Đóng chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <!-- Body / Tin nhắn -->
        <div class="chatbox-body" id="chatbox-messages">
          <div class="chat-time-divider">Hôm nay</div>

          <!-- Tin nhắn chào mừng -->
          <div class="chat-msg chat-msg--incoming">
            <div class="msg-bubble">
              Xin chào Quý khách! Cảm ơn bạn đã ghé thăm <strong>Ondata</strong>. Bạn cần hỗ trợ về sản phẩm hay báo giá dịch vụ nào ạ?
            </div>
            <span class="msg-time">Vừa xong</span>
          </div>

          <!-- Gợi ý câu hỏi nhanh -->
          <div class="chat-quick-actions" id="chat-quick-actions">
            <button class="chat-quick-btn" data-query="Tư vấn máy tính All-in-one">
              Tư vấn máy All-in-one
            </button>
            <button class="chat-quick-btn" data-query="Tư vấn màn hình Ondata">
              Chọn màn hình làm việc / gaming
            </button>
            <button class="chat-quick-btn" data-query="Yêu cầu báo giá dự án / đại lý">
              Yêu cầu báo giá dự án & đại lý
            </button>
            <button class="chat-quick-btn" data-query="Hỗ trợ kỹ thuật & bảo hành">
              Chính sách bảo hành & kỹ thuật
            </button>
          </div>
        </div>

        <!-- Footer / Input -->
        <div class="chatbox-footer">
          <form class="chatbox-input-form" id="chatbox-form">
            <input 
              type="text" 
              class="chatbox-input" 
              id="chatbox-input" 
              placeholder="Nhập tin nhắn của bạn..." 
              autocomplete="off"
            />
            <button type="submit" class="chatbox-btn-send" id="chatbox-btn-send" aria-label="Gửi tin nhắn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
          <div class="chatbox-footer-note">
            Hotline: <a href="tel:0867036698">0867036698</a> • <a href="https://m.me/" target="_blank" rel="noopener">Chat Messenger</a>
          </div>
        </div>
      </div>

      <!-- CÁC NÚT BẤM FLOATING ICON BÊN NGOÀI -->
      <div class="floating-buttons-stack">
        <!-- Nút 1: Điện thoại / Hotline -->
        <a href="tel:0867036698" class="f-btn f-btn--phone" title="Gọi Hotline: 0867036698" aria-label="Gọi điện thoại">
          <div class="f-btn-waves"></div>
          <span class="f-btn-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
          <span class="f-btn-tooltip">Hotline 0867036698</span>
        </a>

        <!-- Nút 2: Messenger -->
        <a href="https://m.me/" target="_blank" rel="noopener" class="f-btn f-btn--messenger" title="Chat qua Messenger" aria-label="Facebook Messenger">
          <span class="f-btn-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.518 3.736 7.185v3.557a.75.75 0 0 0 1.134.643l3.24-1.892c.607.137 1.238.21 1.89.21 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.066 12.44-2.584-2.756-5.044 2.756 5.544-5.885 2.65 2.756 4.978-2.756-5.544 5.885z"/>
            </svg>
          </span>
          <span class="f-btn-tooltip">Chat Messenger</span>
        </a>

        <!-- Nút 3: Chatbox Trigger -->
        <button type="button" class="f-btn f-btn--chat" id="chatbox-toggle-btn" title="Mở hộp chat trực tuyến" aria-label="Mở chat">
          <span class="chat-badge-dot"></span>
          <span class="f-btn-icon icon-chat-open">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </span>
          <span class="f-btn-icon icon-chat-close" style="display:none;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </span>
          <span class="f-btn-tooltip">Chat trực tuyến</span>
        </button>
      </div>
    </div>
  `;
}

export function initChatBoxInteractions(showToast) {
  const widget = document.getElementById('floating-contact-widget');
  const chatWindow = document.getElementById('chatbox-window');
  const toggleBtn = document.getElementById('chatbox-toggle-btn');
  const closeBtn = document.getElementById('chatbox-btn-close');
  const form = document.getElementById('chatbox-form');
  const input = document.getElementById('chatbox-input');
  const messagesBox = document.getElementById('chatbox-messages');
  const iconOpen = toggleBtn?.querySelector('.icon-chat-open');
  const iconClose = toggleBtn?.querySelector('.icon-chat-close');

  if (!toggleBtn || !chatWindow) return;

  function openChat() {
    chatWindow.classList.add('chatbox-window--active');
    if (iconOpen) iconOpen.style.display = 'none';
    if (iconClose) iconClose.style.display = 'inline-block';
    setTimeout(() => input?.focus(), 200);
  }

  function closeChat() {
    chatWindow.classList.remove('chatbox-window--active');
    if (iconOpen) iconOpen.style.display = 'inline-block';
    if (iconClose) iconClose.style.display = 'none';
  }

  toggleBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (chatWindow.classList.contains('chatbox-window--active')) {
      closeChat();
    } else {
      openChat();
    }
  });

  closeBtn?.addEventListener('click', e => {
    e.stopPropagation();
    closeChat();
  });

  // Gửi tin nhắn
  function appendMessage(text, isOutgoing = true) {
    if (!messagesBox) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${isOutgoing ? 'chat-msg--outgoing' : 'chat-msg--incoming'}`;
    msgDiv.innerHTML = `
      <div class="msg-bubble">${text}</div>
      <span class="msg-time">Vừa xong</span>
    `;
    messagesBox.appendChild(msgDiv);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  function handleBotReply(userQuery) {
    // Show typing effect
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-typing-indicator';
    typingDiv.innerHTML = `<span></span><span></span><span></span>`;
    messagesBox.appendChild(typingDiv);
    messagesBox.scrollTop = messagesBox.scrollHeight;

    setTimeout(() => {
      typingDiv.remove();
      let reply = 'Cảm ơn bạn đã nhắn tin! Chuyên viên Ondata đã nhận được yêu cầu và sẽ phản hồi ngay.';
      
      const q = userQuery.toLowerCase();
      if (q.includes('all-in-one') || q.includes('aio') || q.includes('máy tính')) {
        reply = 'Dạ máy tính All-in-one Ondata One 24" và Pro 27" 2K hiện đang có sẵn cấu hình i5/i7 cực mạnh, bảo hành chính hãng 24-36 tháng. Quý khách vui lòng để lại SĐT hoặc gọi Hotline <strong>0867036698</strong> để được báo giá ưu đãi nhất ạ!';
      } else if (q.includes('màn hình') || q.includes('monitor')) {
        reply = 'Dạ Ondata có màn hình từ 24" IPS 100Hz đến màn hình cong 27" 165Hz và 34" Ultrawide sắc nét chuẩn màu đồ họa & gaming. Quý khách có thể xem chi tiết tại mục Sản phẩm hoặc liên hệ hotline <strong>0867036698</strong> để được hỗ trợ ạ!';
      } else if (q.includes('báo giá') || q.includes('đại lý') || q.includes('dự án')) {
        reply = 'Dạ phòng kinh doanh Ondata luôn có chính sách chiết khấu đại lý và giá dự án hấp dẫn. Vui lòng gửi email tới <strong>nchieu@xinchen.vn</strong> hoặc gọi hotline <strong>0867036698</strong> để nhận bảng báo giá ngay ạ!';
      } else if (q.includes('bảo hành') || q.includes('kỹ thuật')) {
        reply = 'Dạ sản phẩm Ondata được bảo hành chính hãng 24 đến 36 tháng (RAM bảo hành trọn đời), tiếp nhận xử lý tận nơi. Mọi sự cố kỹ thuật quý khách hãy liên hệ Hotline <strong>0867036698</strong> để được hỗ trợ tức thì!';
      }

      appendMessage(reply, false);
    }, 700);
  }

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const text = input?.value.trim();
    if (!text) return;
    appendMessage(text, true);
    input.value = '';
    handleBotReply(text);
  });

  // Bấm vào câu hỏi gợi ý nhanh
  document.querySelectorAll('.chat-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.dataset.query;
      if (query) {
        appendMessage(query, true);
        handleBotReply(query);
      }
    });
  });
}
