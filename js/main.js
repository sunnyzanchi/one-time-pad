const shift = function shift(char, num){
  return String.fromCharCode(char.charCodeAt() + num);
}

const unshift = function shift(char, num){
  return String.fromCharCode(char.charCodeAt() - num);
}

const encrypt = function encrypt(msg, pad){
  const result = [];

  for(let i = 0; i < msg.length; i++){
    result.push(shift(msg[i], pad[i]));
  }

  return result.join('');
}

const decrypt = function decrypt(msg, pad){
  const result = [];

  for(let i = 0; i < msg.length; i++){
    result.push(unshift(msg[i], pad[i]));
  }

  return result.join('');
}

const generatePad = function generatePad(length){
  const randoms = new Uint8Array(length)
  crypto.getRandomValues(randoms);

  return randoms;
}

const msg = document.querySelector('#msg');
const pad = document.querySelectorAll('.pad');
const encrypted = document.querySelectorAll('.encrypted');
const decrypted = document.querySelector('#decrypted');

msg.addEventListener('input', function(e){
  const val = msg.value;

  const p = generatePad(val.length);
  for(let i of pad) i.value = p;

  const en = encrypt(val, p);
  for(let i of encrypted) i.value = en;

  const de = decrypted.value = decrypt(en, p);
});
