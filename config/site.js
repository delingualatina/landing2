export const SITE_CONFIG = {
  name: "Sitio Oficial",
  // Número por defecto en caso de no definir variable en Vercel
  fallbackNumber: "",
  defaultMessage: "Hola Sitio Oficial, quiero usuario",
  defaultTelegramLink: "https://t.me/",
};

/**
 * Retorna el enlace de WhatsApp usando la variable de entorno NEXT_PUBLIC_WHATSAPP_NUMBER configurada en Vercel.
 */
export function getWhatsAppLink(customMessage) {
  const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const cleanNumber = envNumber.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(customMessage || SITE_CONFIG.defaultMessage);

  if (cleanNumber) {
    return `https://wa.me/${cleanNumber}?text=${text}`;
  }

  // Si no se definió variable de entorno, abre el selector de WhatsApp con el mensaje predeterminado
  return `https://wa.me/?text=${text}`;
}

/**
 * Retorna el enlace de Telegram usando la variable de entorno NEXT_PUBLIC_TELEGRAM_LINK configurada en Vercel.
 */
export function getTelegramLink() {
  return process.env.NEXT_PUBLIC_TELEGRAM_LINK || SITE_CONFIG.defaultTelegramLink;
}

