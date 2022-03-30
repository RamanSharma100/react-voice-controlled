declare global {
  interface Window {
    speechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition || null;

export const recognition = speechRecognition ? new speechRecognition() : null;
