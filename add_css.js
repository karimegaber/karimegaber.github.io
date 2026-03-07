const fs = require('fs');

const path = 'app/globals.css';
let css = fs.readFileSync(path, 'utf8');

if (!css.includes('@keyframes spin')) {
  css += `\n
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
  fs.writeFileSync(path, css);
}
