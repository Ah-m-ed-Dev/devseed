"use client";

import { useEffect, useRef, useState } from "react";

export default function WhatsappBubble() {
  const containerRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScroll = useRef(0);

  const widgetData = {
    phoneNumber: "249997143276",
    welcomeMessage: "مرحباً بك في DevSeed! كيف نقدر نساعدك في مشروعك التقني؟",
    brandName: "DevSeed",
    brandSubtitle: "نزرع حلولاً رقمية",
    brandImage: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230a0a0f'/><text x='50' y='68' font-size='46' font-family='monospace' font-weight='bold' fill='%2314b8a6' text-anchor='middle'>&lt;/&gt;</text></svg>",
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const host = document.createElement("div");
    containerRef.current = host;
    document.body.appendChild(host);

    const shadow = host.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      .devseed-whatsapp-widget {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 99999;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        direction: ltr;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }
      
      .devseed-whatsapp-button {
        width: 56px;
        height: 56px;
        background: #14b8a6;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(20, 184, 166, 0.3);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border: none;
        outline: none;
      }
      
      .devseed-whatsapp-button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 25px rgba(20, 184, 166, 0.4);
        background: #0d9488;
      }
      
      .devseed-whatsapp-icon {
        width: 28px;
        height: 28px;
        fill: white;
      }
      
      .devseed-chat-window {
        position: absolute;
        bottom: 72px;
        right: 0;
        width: 340px;
        background: #0f172a;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        animation: devseed-slideUp 0.3s ease-out;
        direction: ltr;
        border: 1px solid rgba(20, 184, 166, 0.2);
      }
      
      @keyframes devseed-slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .devseed-chat-header {
        background: #0a0a0f;
        padding: 18px 20px;
        color: white;
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
        border-bottom: 1px solid rgba(20, 184, 166, 0.15);
      }
      
      .devseed-brand-img-container {
        width: 48px;
        height: 48px;
        border-radius: 14px;
        background: #0a0a0f;
        border: 2px solid rgba(20, 184, 166, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      
      .devseed-brand-img {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }
      
      .devseed-brand-info {
        flex: 1;
      }
      
      .devseed-brand-name {
        font-weight: 700;
        font-size: 15px;
        margin-bottom: 2px;
        color: #ffffff;
      }
      
      .devseed-brand-subtitle {
        font-size: 12px;
        color: #14b8a6;
        font-weight: 500;
        margin-bottom: 4px;
      }
      
      .devseed-online-status {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        color: #9ca3af;
      }
      
      .devseed-status-dot {
        width: 7px;
        height: 7px;
        background: #14b8a6;
        border-radius: 50%;
        animation: devseed-pulse 2s infinite;
      }
      
      @keyframes devseed-pulse {
        0% { opacity: 1; }
        50% { opacity: 0.4; }
        100% { opacity: 1; }
      }
      
      .devseed-chat-body {
        padding: 20px;
        background: #0f172a;
        min-height: 100px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }
      
      .devseed-message-container {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 12px;
      }
      
      .devseed-welcome-message {
        background: #1e293b;
        padding: 14px 16px 8px 16px;
        border-radius: 12px 12px 12px 4px;
        font-size: 13px;
        line-height: 1.6;
        color: #e2e8f0;
        max-width: 85%;
        position: relative;
        border: 1px solid rgba(20, 184, 166, 0.1);
      }
      
      .devseed-message-time {
        font-size: 10px;
        color: #64748b;
        text-align: right;
        margin-top: 6px;
      }
      
      .devseed-response-time {
        background: rgba(20, 184, 166, 0.05);
        padding: 12px 14px;
        border-radius: 12px;
        font-size: 12px;
        color: #94a3b8;
        display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid rgba(20, 184, 166, 0.1);
      }
      
      .devseed-clock-icon {
        width: 14px;
        height: 14px;
        fill: #14b8a6;
        flex-shrink: 0;
      }
      
      .devseed-chat-footer {
        padding: 16px 20px;
        background: #0a0a0f;
      }
      
      .devseed-start-chat-btn {
        width: 100%;
        padding: 13px 20px;
        background: #14b8a6;
        color: white;
        border: none;
        border-radius: 14px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      
      .devseed-start-chat-btn:hover {
        background: #0d9488;
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(20, 184, 166, 0.3);
      }
      
      .devseed-whatsapp-btn-icon {
        width: 18px;
        height: 18px;
        fill: white;
      }
      
      .devseed-close-button {
        position: absolute;
        top: 14px;
        right: 14px;
        background: rgba(255, 255, 255, 0.05);
        border: none;
        color: #9ca3af;
        cursor: pointer;
        font-size: 16px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
      }
      
      .devseed-close-button:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
      }
      
      .devseed-minimized {
        transform: translateY(60px);
        opacity: 0.6;
      }
      
      .devseed-hidden {
        display: none !important;
      }
    `;
    shadow.appendChild(style);

    const widgetContainer = document.createElement("div");
    widgetContainer.className = `devseed-whatsapp-widget ${isMinimized ? 'devseed-minimized' : ''}`;

    const whatsappButton = document.createElement("button");
    whatsappButton.className = "devseed-whatsapp-button";
    whatsappButton.innerHTML = `
      <svg class="devseed-whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
      </svg>
    `;

    const chatWindow = document.createElement("div");
    chatWindow.className = `devseed-chat-window ${isOpen ? '' : 'devseed-hidden'}`;
    chatWindow.innerHTML = `
      <div class="devseed-chat-header">
        <div class="devseed-brand-img-container">
          <img src="${widgetData.brandImage}" alt="${widgetData.brandName}" class="devseed-brand-img">
        </div>
        <div class="devseed-brand-info">
          <div class="devseed-brand-name">${widgetData.brandName}</div>
          <div class="devseed-brand-subtitle">${widgetData.brandSubtitle}</div>
          <div class="devseed-online-status">
            <div class="devseed-status-dot"></div>
            <span>متصل الآن</span>
          </div>
        </div>
        <button class="devseed-close-button">&times;</button>
      </div>
      
      <div class="devseed-chat-body">
        <div class="devseed-message-container">
          <div class="devseed-welcome-message">
            ${widgetData.welcomeMessage}
            <div class="devseed-message-time">${new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
          </div>
        </div>
        <div class="devseed-response-time">
          <svg class="devseed-clock-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12.5 13H7V11.5H11V7H12.5V13Z"/>
          </svg>
          نرد عادةً خلال دقائق
        </div>
      </div>
      
      <div class="devseed-chat-footer">
        <button class="devseed-start-chat-btn">
          <svg class="devseed-whatsapp-btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
          </svg>
          ابدأ المحادثة
        </button>
      </div>
    `;

    widgetContainer.appendChild(whatsappButton);
    widgetContainer.appendChild(chatWindow);
    shadow.appendChild(widgetContainer);

    whatsappButton.addEventListener('click', (e) => {
      e.stopPropagation();
      setIsOpen(!isOpen);
    });

    const closeButton = chatWindow.querySelector('.devseed-close-button');
    closeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      setIsOpen(false);
    });

    const startChatBtn = chatWindow.querySelector('.devseed-start-chat-btn');
    startChatBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.open(`https://wa.me/${widgetData.phoneNumber}`, '_blank');
      setIsOpen(false);
    });

    const handleClickOutside = (event) => {
      if (!widgetContainer.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current + 10) {
        setIsMinimized(true);
      } else if (currentScroll < lastScroll.current - 10) {
        setIsMinimized(false);
      }
      lastScroll.current = currentScroll;
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      if (containerRef.current) {
        containerRef.current.remove();
      }
    };
  }, []);

  return null;
}
