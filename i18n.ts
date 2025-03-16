import { i18n } from "@lingui/core";

// Function to dynamically load messages
export async function dynamicActivate(locale: string) {
  const { messages } = await import(`./src/locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
  return locale;
}

// Default activation with English
export async function initI18n() {
  await dynamicActivate("vn");
}
