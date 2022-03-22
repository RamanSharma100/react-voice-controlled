declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export const recognition = new speechRecognition();
