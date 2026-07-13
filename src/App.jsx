import InfiniteMenu from './components/InfiniteMenu/InfiniteMenu';

function makeTile(label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
      <rect width="600" height="600" fill="#000000"/>
      <text x="300" y="300" font-family="Inter, sans-serif" font-size="48"
        font-weight="600" fill="#ffffff" text-anchor="middle"
        dominant-baseline="middle">${label}</text>
    </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const items = [
  { image: makeTile('Dashboard'), link: '#dashboard', title: 'Dashboard', description: 'Ringkasan performa trading kamu' },
  { image: makeTile('History'), link: '#history', title: 'History', description: 'Riwayat semua trade yang tercatat' },
  { image: makeTile('Switch Account'), link: '#switch-account', title: 'Switch Account', description: 'Ganti antar akun trading' },
  { image: makeTile('Sign In'), link: '#sign-in', title: 'Sign In', description: 'Masuk ke akun kamu' }
];

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative', background: '#000' }}>
      <InfiniteMenu items={items} scale={1} />
    </div>
  );
}

export default App;
