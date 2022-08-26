import CryptoJS from 'crypto-js';
const chave = import.meta.env.VITE_APP_API_KEY;

const Criptography = (value: string) => {
  let key = chave?.toString();
  var cryptdata = CryptoJS.AES.encrypt(value, key ? key : '').toString();
  return cryptdata;
};

const Decriptography = (value: string) => {
  let key = chave?.toString();
  var bytes = CryptoJS.AES.decrypt(value, key ? key : '');

  var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
};

export { Criptography, Decriptography };
